import { useGetAllProductsQuery } from "../app/service/ApiData";

const Products = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Alas , Got an Error</h1>;
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {data?.products.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
