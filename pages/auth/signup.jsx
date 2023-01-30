import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://127.0.0.1:8080/users/signup", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Sign up successful, please login to continue");
        router.push("/auth/login");
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
              id="name"
              type="text"
              placeholder="Name"
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-400 font-semibold">
                This field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              {...register("email", {
                required: true,
                maxLength: 20,
              })}
              type="email"
              placeholder="Email"
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-400 font-semibold">
                This field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              {...register("phone", {
                required: true,
                maxLength: 20,
              })}
              type="text"
              placeholder="Phone"
            />
            {errors?.phone?.type === "required" && (
              <p className="text-red-400 font-semibold">
                This field is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              {...register("password", {
                required: true,
                maxLength: 20,
              })}
              type="password"
              placeholder="Password"
            />
            {errors?.password?.type === "required" && (
              <p className="text-red-400 font-semibold">
                This field is required
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              href="/auth/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
