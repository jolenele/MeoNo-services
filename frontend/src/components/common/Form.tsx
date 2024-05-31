import { z } from "zod";
import {
  Form as ShaForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import Input from "./Input";

type Field = {
  label: string;
  zodType: z.ZodType<any>;
  errorMessage?: string;
  defaultValue?: any;
  placeholder?: string;
  description?: string;
};

type Props = {
  data: Record<string, Field>;
  onSubmit: (data: any) => void;
};

const Form = (props: Props) => {
  const { data, onSubmit } = props;

  const formSchema = z.object(
    Object.entries(data).reduce(
      (acc, [key, field]) => {
        acc[key] = field.zodType;

        return acc;
      },
      {} as Record<string, z.ZodType<any>>,
    ),
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: Object.entries(data).reduce(
      (acc, [key, field]) => {
        acc[key] = field.defaultValue;

        return acc;
      },
      {} as Record<string, any>,
    ),
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  return (
    <ShaForm {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {Object.entries(data).map(([key, values]) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{values.label}</FormLabel>
                <FormControl>
                  <Input placeholder={values.placeholder} {...field} />
                </FormControl>
                <FormDescription>{values.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </ShaForm>
  );
};

export default Form;
