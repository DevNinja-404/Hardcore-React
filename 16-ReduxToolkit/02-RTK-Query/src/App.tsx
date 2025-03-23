// Redux Toolkit(RTK) is specially designed to simplify data fetching,caching,and state management for API calls in a React and Redux Application.

import AddNewProduct from "./components/AddNewProduct";
import DeleteProduct from "./components/DeleteProduct";
import Products from "./components/Products";
import SpecificProduct from "./components/SpecificProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      <Products />
      <SpecificProduct />
      <AddNewProduct />
      <UpdateProduct />
      <DeleteProduct />
    </div>
  );
};

export default App;
