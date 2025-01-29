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
