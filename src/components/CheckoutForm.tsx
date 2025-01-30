import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { ReduxStore } from "../store";
import { toast } from "../hooks/use-toast";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "Please fill out all fields" });
      return redirect("/login");
    }

    const user = store.getState().userState.user;

    if (!user) {
      toast({ description: "Please log in to place an order" });
      return redirect("/login");
    }

    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );
      console.log(result);
      store.dispatch(clearCart());
      toast({ description: "Order placed" });
      redirect("/orders");
    } catch (error) {
      console.log(error);

      toast({ description: "Order failed" });
      return null;
    }

    return null;
  };

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" defaultValue={""} />
      <FormInput label="address" name="address" type="text" defaultValue={""} />
      <div>
        <SubmitBtn text="Place your order" className="mt-4" />
      </div>
    </Form>
  );
}

export default CheckoutForm;
