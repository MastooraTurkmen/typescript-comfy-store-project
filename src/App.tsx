import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Orders,
  Checkout,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/singleProduct",
      element: <SingleProduct />,
    },
    {
      path: "/HomeLayout",
      element: <HomeLayout />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
