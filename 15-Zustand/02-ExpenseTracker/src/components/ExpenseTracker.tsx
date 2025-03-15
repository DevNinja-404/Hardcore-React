import { useState } from "react";
import { Expense, useStore } from "../store/useStore";

const ExpenseTracker = () => {
  const { expenses, addExpense, updateExpense, removeExpense } = useStore();

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      description,
      amount: +amount,
    });

    setDescription("");
    setAmount("");
  };

  const handleCancelEdit = () => {
    setDescription("");
    setAmount("");
    setEditingExpense(null);
  };

  return (
    <div className="flex flex-col w-1/2  justify-around">
      <form
        className="flex flex-col gap-y-4 bg-slate-800 py-10 px-6 rounded-xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Expense Done On???"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white py-2 rounded-xl placeholder:px-2 px-2 outline-none"
        />
        <input
          type="text"
          placeholder="Amount Spent???"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-white py-2 rounded-xl placeholder:px-2 px-2 outline-none"
        />
        {editingExpense ? (
          <div className="flex w-full justify-between">
            <button
              onClick={() => updateExpense(editingExpense)}
              className="bg-purple-700 px-4 py-2 rounded-xl text-white"
            >
              Update
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-red-700 px-4 py-2 rounded-xl"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="bg-green-700 px-4 py-2 rounded-xl w-fit">
            Add Expense
          </button>
        )}
      </form>

      <div className="flex flex-col gap-y-6 bg-slate-800 rounded-xl py-10 px-6 text-white">
        <p className="text-xl font-semibold">
          Total Expense :{" "}
          <span className="text-purple-700">
            ${" "}
            {expenses
              .reduce((total, expense) => total + expense.amount, 0)
              .toFixed(2)}
          </span>
        </p>
        <div className="flex flex-col gap-y-4">
          <p className="text-xl text-center"> Expenses :</p>
          <div className="flex flex-col gap-y-8 ">
            {expenses.map((eachExpense) => (
              <div
                key={eachExpense.id}
                className={`p-3 rounded-xl flex flex-col gap-y-1  gap-y-4 ${
                  editingExpense?.id === eachExpense.id
                    ? "bg-purple-900"
                    : "bg-gray-900"
                }`}
              >
                <div className="flex justify-between px-4 bg-black py-3 rounded-xl">
                  <span>{eachExpense.description}</span>
                  <span>{eachExpense.amount}</span>
                </div>
                <div className="flex justify-around ">
                  <button
                    className="bg-blue-700 px-4 py-2 rounded-xl "
                    onClick={() => {
                      setEditingExpense(eachExpense);
                      setDescription(eachExpense.description);
                      setAmount(eachExpense.amount.toString());
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-700 px-4 py-2 rounded-xl"
                    onClick={() => removeExpense(eachExpense.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
