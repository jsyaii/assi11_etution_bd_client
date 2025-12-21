import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../socialLogIn/socialLogIn";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch(() => {});
  };

  return (
    /* Page wrapper */
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">

      {/* Card */}
      <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm shadow-2xl">

        <h3 className="text-2xl sm:text-3xl text-center mt-6">
          Welcome back
        </h3>
        <p className="text-center text-sm sm:text-base">
          Please Login
        </p>

        <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset space-y-1">

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-xs sm:text-sm">
                Email is required
              </p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-xs sm:text-sm">
                Password must be 6 characters or longer
              </p>
            )}

            <div className="text-right">
              <a className="link link-hover text-xs sm:text-sm">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-primary mt-4 w-full h-11 sm:h-12 text-white">
              Login
            </button>
          </fieldset>

          <p className="text-center mt-4 text-xs sm:text-sm">
            New to Zap Shift{" "}
            <Link
              state={location.state}
              className="text-blue-400 underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>

        <div className="px-4 sm:px-6 pb-6">
          <SocialLogIn />
        </div>

      </div>
    </div>
  );
};

export default Login;
