import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Component1 = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div key={data.id}>
          <div>Title : {data.title}</div>
          <div> Description : {data.description}</div>
          <div> Price : {data.price}</div>
          <div> Rating : {data.rating}</div>
          <div> Brand : {data.brand}</div>
          <div> Category : {data.category}</div>
          <div>
            Thumbnail :{" "}
            <div>
              <img src={data.thumbnail} alt="" />
            </div>
          </div>
          <div>
            Images :
            <ul>
              {data.images.map((image) => (
                <li key={Math.random()}>
                  <img src={image} alt="" height={200} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Component1;
