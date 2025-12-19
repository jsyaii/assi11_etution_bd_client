// import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hook/useAxiosSecure";
// import { useNavigate } from "react-router";
// import useAuth from "../../../hook/useAuth";
// import Swal from "sweetalert2";

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
        title: "Your Tuition has been submitted!",
        showConfirmButton: false,
        timer: 2000
      });
      navigate("/dashboard/my-tuitions");
    } catch (err) {
      Swal.fire("Error", "Failed to submit tuition", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1220] via-[#101828] to-[#0B1220] py-16 px-4">
      <h3 className="text-5xl font-extrabold text-center mb-14
                     bg-gradient-to-r from-[#00BBA7] to-[#5EEAD4]
                     bg-clip-text text-transparent">
        Add Tuition
      </h3>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(handleNewTuition)}>
          <div className="relative bg-white/5 backdrop-blur-xl
                          rounded-3xl p-10 shadow-[0_0_80px_rgba(0,187,167,0.15)]
                          border border-white/10">

            {/* Email */}
            <div className="mb-8">
              <label className="block text-gray-300 text-lg mb-3">
                Email
              </label>
              <input
                type="text"
                value={user?.email || ''}
                readOnly
                className="w-full px-6 py-4 rounded-xl
                           bg-white/10 border border-white/20
                           text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Subject */}
            <div className="mb-8">
              <label className="block text-gray-300 text-lg mb-3">
                Subject
              </label>
              <input
                {...register('subject', { required: true })}
                type="text"
                placeholder="Physics, ICT, English"
                className="w-full px-6 py-4 rounded-xl
                           bg-white/10 border border-white/20
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2
                           focus:ring-[#00BBA7] focus:border-[#00BBA7]"
              />
              {errors.subject && (
                <p className="text-red-400 mt-2 text-sm">
                  Subject is required
                </p>
              )}
            </div>

            {/* Teaching Mode */}
            <div className="mb-8">
              <label className="block text-gray-300 text-lg mb-4">
                Teaching Mode
              </label>
              <div className="flex gap-14">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    {...register('mode')}
                    value="offline"
                    defaultChecked
                    className="radio radio-success"
                  />
                  <span className="text-white text-lg">Offline</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    {...register('mode')}
                    value="online"
                    className="radio radio-success"
                  />
                  <span className="text-white text-lg">Online</span>
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <label className="block text-gray-300 text-lg mb-3">
                Location
              </label>
              <input
                {...register('location')}
                type="text"
                placeholder="Where?"
                className="w-full px-6 py-4 rounded-xl
                           bg-white/10 border border-white/20
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2
                           focus:ring-[#00BBA7]"
              />
            </div>

            {/* Budget */}
            <div className="mb-12">
              <label className="block text-gray-300 text-lg mb-3">
                Budget
              </label>
              <input
                {...register('fee', { required: true })}
                type="number"
                placeholder="৳ Budget"
                className="w-full px-6 py-4 rounded-xl
                           bg-white/10 border border-white/20
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2
                           focus:ring-[#00BBA7]"
              />
              {errors.fee && (
                <p className="text-red-400 mt-2 text-sm">
                  Budget is required
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl text-xl font-bold
                         bg-gradient-to-r from-[#00BBA7] to-[#5EEAD4]
                         text-[#0B1220]
                         hover:shadow-[0_0_40px_rgba(0,187,167,0.6)]
                         hover:scale-[1.02]
                         transition-all duration-200"
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












