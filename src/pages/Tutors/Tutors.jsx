import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import { IoPersonAdd } from "react-icons/io5";
import useRole from "../../hook/useRole";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { role, roleLoading } = useRole();


  useEffect(() => {
    setLoading(true)
    axiosSecure
      .get("/tutors")
      .then((res) => {
        setTutors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) {
    return <Loading />;
  }



  return (
    <>
      <div className="flex justify-center items-center text-center flex-col">
        <h3 className="text-4xl text-white text-center pt-15">All Tutors</h3>
      {!roleLoading && role === "Tutor" && (
  <Link
    to="/newtutor"
    className="btn w-[20rem] h-20 mt-5 rounded-4xl text-2xl 
               hover:scale-103 btn-neutral bg-teal-500 
               text-black hover:bg-teal-300/50"
  >
    <IoPersonAdd className="scale-105 mr-2" />
    Become a Tutor!
  </Link>
)}

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 pb-20">
        {tutors.map((tutor) => (
  <div
    key={tutor._id}
    onClick={() => navigate(`/tutors/${tutor._id}`)}
    className="cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 
               border border-gray-700 rounded-2xl shadow-lg 
               hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
  >
    <div className="p-6 text-white">

      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-2xl font-bold text-black">
          {tutor.name?.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{tutor.name}</h2>
          <p className="text-sm text-gray-400">
            📍 {tutor.location}
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tutor.subjects?.slice(0, 3).map((sub, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300"
          >
            {sub}
          </span>
        ))}
        {tutor.subjects?.length > 3 && (
          <span className="text-xs text-gray-400">
            +{tutor.subjects.length - 3} more
          </span>
        )}
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
        <p className="text-gray-300">
          🎓 <span className="font-medium">{tutor.experience} yrs</span> experience
        </p>
        <p className="text-gray-300">
          💻 Mode: <span className="font-medium capitalize">{tutor.mode}</span>
        </p>
        <p className="text-gray-300 col-span-2">
          🕒 Availability: {tutor.availability}
        </p>
      </div>

      {/* Bio */}
      <p className="mt-4 text-gray-400 text-sm line-clamp-2">
        {tutor.bio}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-bold text-teal-400">
          ৳ {tutor.expectedSalary}
        </span>

        <span className="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">
          ⭐ 4.8
        </span>
      </div>
    </div>
  </div>
))}

      </div>


    </>




  );
};

export default Tutors;