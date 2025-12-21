import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import Swal from "sweetalert2";
import { FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: profile = {}, isLoading } = useQuery({
    queryKey: ['my-profile', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loading />;

  const handleEditProfile = (profile) => {
    Swal.fire({
      title: "Edit Profile",
      html: `
        <input readonly id="email" class="swal2-input cursor-not-allowed text-gray-600" placeholder="Email" value="${profile?.email}">
        <input id="name" class="swal2-input" placeholder="Name" value="${profile?.displayName}">
        <input id="photoURL" class="swal2-input" placeholder="Photo URL" value="${profile?.photoURL || ''}">
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => ({
        displayName: document.getElementById("name").value,
        photoURL: document.getElementById("photoURL").value,
      }),
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user.email}`, result.value)
          .then(() => {
            Swal.fire("Updated!", "Profile updated successfully.", "success");
          })
          .catch(() => {
            Swal.fire("Error", "Failed to update profile.", "error");
          });
      }
    });
  };

  return (
    <div className="py-12 flex justify-center items-center">
      <div className="max-w-4xl w-full px-4">
        <div className="backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-10 text-white flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <img
            src={profile.photoURL || `https://dummyimage.com/2500x2500/1a1a2e/ffffff.png&text=${profile.displayName}`}
            alt={profile.displayName}
            className="w-48 h-48 rounded-full object-cover border-2 border-teal-500 shadow-xl"
          />

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">{profile.displayName}</h1>
            <p className="text-2xl text-teal-400 mb-2">{profile.email}</p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="badge bg-teal-400 text-black px-4 py-1 rounded-full">
                {profile.userRole === "tutor"
                  ? "Tutor"
                  : profile.userRole === "admin"
                  ? "Admin"
                  : "Student"}
              </span>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={() => handleEditProfile(profile)}
                className="btn bg-teal-500 text-black hover:bg-teal-300/50 flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
              >
                <FaUserEdit />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
