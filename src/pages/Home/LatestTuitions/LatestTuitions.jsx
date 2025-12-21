import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { FaBook, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

const LatestTuitions = () => {
  const [tuitions, setTuitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/newtuitions") 
      .then((res) => {
        setTuitions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) return <Loading />;

  // Framer Motion card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(14, 165, 233, 0.4)" },
    float: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative px-4 sm:px-8 py-16 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Latest Tuitions
        </h2>
      </div>

      {/* Grid of Tuition Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tuitions.map((tuition, index) => (
          <motion.div
            key={tuition._id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            onClick={() => navigate(`/tuitions/${tuition._id}`)}
            className="relative cursor-pointer bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden"
          >
            {/* Optional Image */}
            {tuition.image && (
              <div className="h-40 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={tuition.image}
                  alt={tuition.subject}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            )}

            {/* Card Content */}
            <motion.div
              className="p-6"
              animate="float"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaBook className="text-teal-400" />
                {tuition.subject}
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                📍 {tuition.location}
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <FaLaptop className="text-teal-400" /> {tuition.mode}
              </p>

              {/* Fee */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-teal-600">
                  ৳ {tuition.fee}
                </span>
                {tuition.isAdminApproved && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 animate-pulse">
                    ✔ Approved
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestTuitions;
