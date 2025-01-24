import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue: string;
};

function FormCheckbox({ label, name, defaultValue }: FormCheckboxProps) {
  const defaultCheck = defaultValue === "on" ? true : false;
  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className=" capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultCheck} />
    </div>
  );
}

export default FormCheckbox;
