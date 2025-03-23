import { useGetProductByIdQuery } from "../app/service/ApiData";

const SpecificProduct = () => {
  const { data, isLoading, isError } = useGetProductByIdQuery(10);

  if (isError) return <h1>Alas,Got an Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>The product with id:10 is :</h1>
      <h2>{data.title}</h2>
      <h2>{data.brand}</h2>
      <h2>{data.category}</h2>
    </div>
  );
};

export default SpecificProduct;
