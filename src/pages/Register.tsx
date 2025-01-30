import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { SubmitBtn, FormInput } from "../components";
import { customFetch } from "../utils";
import { AxiosError } from "axios";
import { toast } from "../hooks/use-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await customFetch.post("/auth/local/register", data);
    toast({ description: "Register" });
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "Registered Failed";
    toast({ description: errorMsg });
    console.log(error);
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" defaultValue={""} />
            <FormInput type="email" name="email" defaultValue={""} />
            <FormInput type="password" name="password" defaultValue={""} />
            <SubmitBtn text="Register" className="w-full mt-4" />
            <p className="text-center mt-4">
              Already a member?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
