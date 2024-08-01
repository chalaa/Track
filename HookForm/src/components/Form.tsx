import { useForm } from "react-hook-form";
import { DevTool} from '@hookform/devtools'
function Form() {
    interface FormValues {
    username: string;
    email: string;
    message: string;
    
  }
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      message: ""
    },
  });
  const { register,control, handleSubmit,formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("data is",data);
  };

  return (
    <div className="w-2/5 h-96 border-solid border-2 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background ${errors.username?"border-red-800" : ""}`}
            type="text"
            {...register("username", {
                required: "Username is required"
            })}
            placeholder="Username"
          />
          <p className="text-red-800 text-xs mt-1">{errors.username?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background ${errors.email?"border-red-800" : ""}`}
            type="email"
            {...register("email", {
                required : "email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            })}
            placeholder="email"
          />
          <p className="text-red-800 text-xs mt-1">{errors.email?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background ${errors.message?"border-red-800" : ""}`}
            type="text"
            {...register("message",{
                required: "message is required"
            })}
            placeholder="message"
          />
          <p className="text-red-800 text-xs mt-1">{errors.message?.message}</p>
        </div>
        
        
          <button
            className="bg-background hover:bg-primary hover:text-gray-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form;
