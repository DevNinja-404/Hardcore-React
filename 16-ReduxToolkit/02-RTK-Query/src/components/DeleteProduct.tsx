import { useDeleteProductByIdMutation } from "../app/service/ApiData";

const DeleteProduct = () => {
  const [deleteProductById, { data, isLoading, error }] =
    useDeleteProductByIdMutation();

  if (error) return <h1>Alas,Got an Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const handleDelete = async () => {
    try {
      await deleteProductById(2);
    } catch (err) {
      console.log(`Error while deleting a produc : ${err}`);
    }
  };

  return (
    <div>
      {data ? <h2>{data.title} successfully deleted</h2> : ""}
      <button onClick={handleDelete} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
