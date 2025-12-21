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
    <div className="min-h-screen bg-gradient-to-br from-[#F3E8FF] via-[#E0D7FF] to-[#D9B6FF] py-16 px-4">
      <h3 className="text-5xl font-extrabold text-center mb-14
        bg-gradient-to-r from-[#8B5CF6] to-[#C084FC]
        bg-clip-text text-transparent">
        Become a Tutor
      </h3>

      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSubmit(handleNewTutor)}>
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10
            border border-white/20 shadow-[0_0_80px_rgba(139,92,246,0.15)]">

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

              {/* Name */}
              <div>
                <label className="label text-[#4B0082]">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm">Required</p>}
              </div>

              {/* Email */}
              <div>
                <label className="label text-[#4B0082]">Email</label>
                <input
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full bg-white/20 text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label text-[#4B0082]">Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              {/* Subjects */}
              <div>
                <label className="label text-[#4B0082]">Subjects</label>
                <input
                  {...register("subjects", { required: true })}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="Math, Physics, ICT"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="label text-[#4B0082]">Experience (Years)</label>
                <input
                  type="number"
                  {...register("experience", { required: true })}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                />
              </div>

              {/* Teaching Mode */}
              <div>
                <label className="label text-[#4B0082]">Teaching Mode</label>
                <select
                  {...register("mode")}
                  className="select select-bordered w-full bg-white/20 text-[#4B0082]"
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="both">Both</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="label text-[#4B0082]">Location</label>
                <input
                  {...register("location")}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="City / Area"
                />
              </div>

              {/* Expected Salary */}
              <div>
                <label className="label text-[#4B0082]">Expected Salary (৳)</label>
                <input
                  type="number"
                  {...register("salary")}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="label text-[#4B0082]">Availability</label>
                <input
                  {...register("availability")}
                  className="input input-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="Weekends / Evenings"
                />
              </div>

              {/* Bio */}
              <div className="md:col-span-5">
                <label className="label text-[#4B0082]">Short Bio</label>
                <textarea
                  {...register("bio")}
                  rows="4"
                  className="textarea textarea-bordered w-full bg-white/20 text-[#4B0082]"
                  placeholder="Tell something about yourself"
                />
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl text-xl font-bold
                mt-8 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC]
                text-white hover:scale-105 transition"
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
