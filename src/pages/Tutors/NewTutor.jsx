

import { useNavigate } from "react-router";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const CreateTutor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNewTutor = async (data) => {
    const newTutor = {
      name: data.name,
      email: user?.email,
      phone: data.phone,
      subjects: data.subjects.split(",").map(s => s.trim()),
      experience: Number(data.experience),
      mode: data.mode,
      location: data.location,
      expectedSalary: Number(data.salary),
      bio: data.bio,
      availability: data.availability,
      createdAt: new Date(),
      userRole: "tutor"
    };

    try {
      await axiosSecure.post("/tutors", newTutor);
      Swal.fire({
        icon: "success",
        title: "Profile Submitted!",
        text: "Your tutor profile is under review",
        timer: 2000,
        showConfirmButton: false
      });
      navigate("/dashboard");
    } catch (err) {
      Swal.fire("Error", "Failed to submit profile", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1220] via-[#101828] to-[#0B1220] py-16 px-4">
      <h3 className="text-5xl font-extrabold text-center mb-14
        bg-gradient-to-r from-[#00BBA7] to-[#5EEAD4]
        bg-clip-text text-transparent">
        Become a Tutor
      </h3>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(handleNewTutor)}>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10
            border border-white/10 shadow-[0_0_80px_rgba(0,187,167,0.15)]">

            {/* Name */}
            <div className="mb-6">
              <label className="label text-gray-300">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="input input-bordered w-full bg-white/10 text-white"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-400 text-sm">Required</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="label text-gray-300">Email</label>
              <input
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full bg-white/10 text-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="label text-gray-300">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                className="input input-bordered w-full bg-white/10 text-white"
                placeholder="01XXXXXXXXX"
              />
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <label className="label text-gray-300">
                Subjects (comma separated)
              </label>
              <input
                {...register("subjects", { required: true })}
                className="input input-bordered w-full bg-white/10 text-white"
                placeholder="Math, Physics, ICT"
              />
            </div>

            {/* Experience */}
            <div className="mb-6">
              <label className="label text-gray-300">Experience (Years)</label>
              <input
                type="number"
                {...register("experience", { required: true })}
                className="input input-bordered w-full bg-white/10 text-white"
              />
            </div>

            {/* Teaching Mode */}
            <div className="mb-6">
              <label className="label text-white-300">Teaching Mode</label>
              <select
                {...register("mode")}
                className="select select-bordered w-full bg-white/10 text-white"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="label text-gray-300">Location</label>
              <input
                {...register("location")}
                className="input input-bordered w-full bg-white/10 text-white"
                placeholder="City / Area"
              />
            </div>

            {/* Expected Salary */}
            <div className="mb-6">
              <label className="label text-gray-300">Expected Salary (৳)</label>
              <input
                type="number"
                {...register("salary")}
                className="input input-bordered w-full bg-white/10 text-white"
              />
            </div>

            {/* Availability */}
            <div className="mb-6">
              <label className="label text-gray-300">Availability</label>
              <input
                {...register("availability")}
                className="input input-bordered w-full bg-white/10 text-white"
                placeholder="Weekends / Evenings"
              />
            </div>

            {/* Bio */}
            <div className="mb-10">
              <label className="label text-gray-300">Short Bio</label>
              <textarea
                {...register("bio")}
                rows="4"
                className="textarea textarea-bordered w-full bg-white/10 text-white"
                placeholder="Tell something about yourself"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl text-xl font-bold
                bg-gradient-to-r from-[#00BBA7] to-[#5EEAD4]
                text-[#0B1220] hover:scale-105 transition"
            >
              Submit Tutor Profile
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTutor;
