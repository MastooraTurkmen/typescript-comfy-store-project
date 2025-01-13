import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";
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
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <div>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => console.log("Button Clicked")}
      >
        Click Me
      </Button>
      <h2 className="text-red-900 p-3">Hello People</h2>;
    </div>
  );
}

export default App;
