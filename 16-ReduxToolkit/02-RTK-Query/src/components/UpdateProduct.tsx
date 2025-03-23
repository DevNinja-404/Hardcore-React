import { useUpdateProductByIdMutation } from "../app/service/ApiData";

const UpdateProduct = () => {
  const [updateProductById, { data, isLoading, error }] =
    useUpdateProductByIdMutation();

  if (error) return <h1>Alas,Got an Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const handleUpdateProduct = async () => {
    try {
      const UpdateProductData = {
        title: "Lenevo Laptop",
        category: "Laptop",
        description: "A description fot the laptop",
      };

      await updateProductById({ id: 4, updatedProduct: UpdateProductData });
    } catch (err) {
      console.log(`Error while updating the product:${err}`);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        UpdateProduct
      </button>
    </div>
  );
};

export default UpdateProduct;
