import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./components/UI/RootElement";
import Welcome from "./components/UI/Welcome";
import Products from "./components/UI/Products";
import ProductDetail from "./components/UI/ProductDetail";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([{
  path: '/',
  element: <RootElement/>,
  errorElement: <ErrorPage />,
  children:[
    {
      path: '/welcome', element: <Welcome/>
    },
    {
      path: '/products', element: <Products/>
    },
    {
      path: '/products/:productId', element: <ProductDetail/>
    },
  ]

}])

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider> 
  );
}

export default App;
