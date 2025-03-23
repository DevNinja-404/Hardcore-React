import { useAddNewProductMutation } from "../app/service/ApiData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isLoading, isError, isSuccess }] =
    useAddNewProductMutation();

  if (isError) return <h1>Alas,Got an Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  //   if (isSuccess) return <h1>Successfully Added a Product </h1>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Samsung Galaxy S25",
        category: "SmartPhone",
        description: "A description of the mobile",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
