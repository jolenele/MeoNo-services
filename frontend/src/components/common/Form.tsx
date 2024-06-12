import { ZodType, z } from "zod";
import { FormProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";

type Field = {
  name: string;
  render: (params: Record<string, any>) => React.ReactNode;
  // label: string;
  // zodType: z.ZodType<any>;
  // errorMessage?: string;
  // defaultValue?: any;
  // placeholder?: string;
  // description?: string;
};

type Props = {
  formSchema: z.ZodObject<any>;
  data: Array<Field>;
  onSubmit: (data: any) => void;
};

/**
 * @param {ZodType} zodType
 * @returns
 */
const Form = (props: Props) => {
  const { formSchema, data, onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitForm(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  return (
    <form className="form-control" onSubmit={handleSubmit(handleSubmitForm)}>
      {data.map(({ name, render }) => (
        <>
          {render({
            ...register(name),
            className: "input input-bordered w-full max-w-xs",
          })}

          {errors[name]?.message && (
            <div className="label">
              <span className="label-text-alt" />
              <span className="label-alt-text">
                <p className="text-error">{errors[name].message?.toString()}</p>
              </span>
            </div>
          )}
        </>
      ))}

      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
