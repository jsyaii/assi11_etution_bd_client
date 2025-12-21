import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // const handleRegistration = (data) => {
  //   const profileImg = data.photo[0];

  //   registerUser(data.email, data.password)
  //     .then(() => {

  //       // 1️⃣ upload image to imgbb
  //       const formData = new FormData();
  //       formData.append('image', profileImg);

  //       const image_API_URL =
  //         `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

  //       axios.post(image_API_URL, formData)
  //         .then(res => {
  //           const photoURL = res.data.data.url;

  //           // 2️⃣ update firebase profile
  //           const userProfile = {
  //             displayName: data.name,
  //             photoURL: photoURL,
  //           };

  //           updateUserProfile(userProfile)
  //             .then(() => {

  //               // 3️⃣ save user to MongoDB
  //               const userInfo = {
  //                 name: data.name,
  //                 email: data.email,
  //                 phone: data.phone,
  //                 role: data.role, // student | tutor
  //                 photoURL: photoURL,
  //                 createdAt: new Date(),
  //               };

  //               axiosSecure.post('/users', userInfo)
  //                 .then(res => {
  //                   if (res.data.insertedId) {
  //                     navigate(location.state || '/');
  //                   }
  //                 });
  //             });
  //         });
  //     })
  //     .catch(error => console.log(error));
  // };
const handleRegistration = async (data) => {
  const profileImg = data.photo[0];

  try {
    // 1️⃣ Register user in Firebase
    await registerUser(data.email, data.password);

    // 2️⃣ Upload image to imgbb
    const formData = new FormData();
    formData.append('image', profileImg);
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
    const imgRes = await axios.post(image_API_URL, formData);
    const photoURL = imgRes.data.data.url;

    // 3️⃣ Update Firebase profile
    await updateUserProfile({ displayName: data.name, photoURL });

    // 4️⃣ Save user to MongoDB
   const userInfo = {
  name: data.name,
  email: data.email,
  phone: data.phone,
  userRole: data.role, 
  photoURL,
  createdAt: new Date(),
};


    const mongoRes = await axiosSecure.post('/users', userInfo);
    if (mongoRes.data.insertedId) {
      navigate(location.state || '/');
    }

  } catch (error) {
    // Handle Firebase specific errors
    if (error.code === "auth/email-already-in-use") {
      Swal.fire("Error", "This email is already registered. Please login instead.", "error");
    } else {
      Swal.fire("Error", error.message || "Registration failed.", "error");
    }
    console.error(error);
  }
};

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <h3 className="text-3xl text-center font-bold">Create Account</h3>
      <p className="text-center">Register as Student or Tutor</p>

      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset space-y-2">

          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input input-bordered w-full h-12"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register('photo', { required: true })}
            className="file-input file-input-bordered w-full h-12"
          />
          {errors.photo && <p className="text-red-500">Photo is required</p>}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input input-bordered w-full h-12"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          {/* Phone */}
          <label className="label">Phone</label>
          <input
            type="text"
            {...register('phone', { required: true })}
            className="input input-bordered w-full h-12"
            placeholder="Phone Number"
          />
          {errors.phone && <p className="text-red-500">Phone is required</p>}

          {/* Role */}
          <label className="label">Register As</label>
          <select
            {...register('role', { required: true })}
            className="select select-bordered w-full h-12"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
          {errors.role && <p className="text-red-500">Role is required</p>}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            className="input input-bordered w-full h-12"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password must be at least 6 characters</p>
          )}

          <button className="btn btn-primary mt-4 w-full h-12 text-white">
            Register
          </button>
        </fieldset>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            state={location.state}
            className="text-primary ml-1 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>

      {/* <SocialLogin /> */}
    </div>
  );
};

export default Register;
