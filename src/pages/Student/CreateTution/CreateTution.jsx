import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const CreateTuition = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNewTuition = async (data) => {
    const newTuition = {
      creatorEmail: user.email,
      subject: data.subject,
      location: data.location,
      mode: data.mode,
      fee: Number(data.fee),
    };

    try {
      await axiosSecure.post('/newtuitions', newTuition);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tuition posted successfully!",
        showConfirmButton: false,
        timer: 2000
      });
      navigate("/dashboard/my-tuitions");
    } catch {
      Swal.fire("Error", "Failed to submit tuition", "error");
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#F3E8FF] via-[#E0D7FF] to-[#D9B6FF] py-20 px-4">



      <h3 className="text-5xl font-extrabold text-center mb-14
        bg-gradient-to-r from-purple-900 to-blue-500
        bg-clip-text text-transparent">
        Create Tuition
      </h3>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(handleNewTuition)}>
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10
            border border-white/10 shadow-[0_0_100px_rgba(34,211,238,0.15)]">

            {/* Email */}
            <div className="mb-7">
              <label className="block text-gray-900  mb-2">Email</label>
              <input
                value={user?.email || ""}
                readOnly
                className="w-full px-5 py-4 rounded-xl bg-white/10
                  border border-blue-200 text-purple-700  cursor-not-allowed"
              />
            </div>

            {/* Subject */}
            <div className="mb-7">
              <label className="block text-gray-900  mb-2">
                Subject
              </label>
              <input
                {...register('subject', { required: true })}
                type="text"
                placeholder="Physics, ICT, English"
                className="w-full px-5 py-4 rounded-xl bg-white/10
                  border border-white/20 text-gray-900 
                  focus:ring-2 focus:ring-blue-200 outline-none"
              />
              {errors.subject && (
                <p className="text-red-400 mt-2 text-sm">
                  Subject is required
                </p>
              )}
            </div>


            {/* Teaching Mode */}
            <div className="mb-7">
              <label className="block text-gray-900  mb-3">Teaching Mode</label>
              <div className="flex gap-10">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    {...register("mode")}
                    value="offline"
                    defaultChecked
                    className="radio radio-success"
                  />
                  <span className="text-gray-900 ">Offline</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    {...register("mode")}
                    value="online"
                    className="radio radio-success"
                  />
                  <span className="text-gray-900 ">Online</span>
                </label>
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="mb-7">
              <label className="block text-gray-400 mb-2">Location</label>
              <select
                {...register("location")}
                className="w-full px-5 py-4 rounded-xl bg-white/10
                  border border-white/20 text-gray-900 
                  focus:ring-2 focus:ring-blue-200 outline-none"
              >
                <option value="">Select location</option>
                <option value="Khulna">Khulna</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Online">Online</option>
              </select>
            </div>

            {/* Budget */}
            <div className="mb-10">
              <label className="blocktext-gray-900  mb-2">Budget</label>
              <input
                {...register("fee", { required: true })}
                type="number"
                placeholder="৳ Monthly fee"
                className="w-full px-5 py-4 rounded-xl bg-white/10
                  border border-white/20 text-gray-900 
                  focus:ring-2 focus:ring-blue-200 outline-none"
              />
              {errors.fee && (
                <p className="text-red-400 text-sm mt-2">Budget is required</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl font-bold text-xl
                bg-gradient-to-r from-purple-900 to-blue-500
                text-black-900 hover:scale-[1.02]
                hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]
                transition-all"
            >
              Submit Tuition
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTuition;
