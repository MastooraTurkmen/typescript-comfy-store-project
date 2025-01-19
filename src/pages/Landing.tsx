import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { Hero, FeaturedProduct } from "../components";

export const loader: LoaderFunction = async () => {
  console.log("loading landing page");
  return null;
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  );
}
export default Landing;
