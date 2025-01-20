import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { Hero, FeaturedProduct } from "../components";
import { customFetch } from "../utils";
import { ProductsResponse } from "../utils/types";

const url = "/products?featured=true";

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  console.log(response);
  return { ...response.data };
};

function Landing() {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);

  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  );
}
export default Landing;
