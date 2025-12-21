import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useRole from "../../../hook/useRole";
import Loading from "../../../Components/Loading/Loading";
import { IoPersonAdd } from "react-icons/io5";
import { motion } from "framer-motion";

const LatestTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { role, roleLoading } = useRole();

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/tutors/limited")
      .then((res) => {
        setTutors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) return <Loading />;

  // Duplicate array for seamless looping
  const displayTutors = [...tutors, ...tutors];

  return (
    <div className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Tutors
        </h3>
        {!roleLoading && role === "Tutor" && (
          <button className="mt-5 px-6 py-3 bg-teal-500 text-black rounded-full font-semibold hover:bg-teal-400 transition flex items-center">
            <IoPersonAdd className="mr-2" />
            Become a Tutor
          </button>
        )}
      </div>

      {/* Framer Motion Marquee */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {displayTutors.map((tutor, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(`/tutors/${tutor._id}`)}
            className="min-w-[260px] bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.08, y: -10, rotateZ: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              className="p-5 flex flex-col items-center text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-2xl font-bold text-black mb-3">
                {tutor.name?.charAt(0)}
              </div>

              {/* Name & Location */}
              <h2 className="text-xl font-semibold">{tutor.name}</h2>
              <p className="text-sm text-gray-500 mb-2">📍 {tutor.location}</p>

              {/* Subjects */}
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {tutor.subjects?.slice(0, 2).map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700"
                  >
                    {sub}
                  </span>
                ))}
                {tutor.subjects?.length > 2 && (
                  <span className="text-xs text-gray-400">
                    +{tutor.subjects.length - 2} more
                  </span>
                )}
              </div>

              {/* Salary */}
              <span className="text-lg font-bold text-teal-600">
                ৳ {tutor.expectedSalary}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestTutors;
