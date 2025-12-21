import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link, useNavigate } from "react-router";
import Loading from "../../../Components/Loading/Loading";
import { IoMdAdd } from "react-icons/io";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import useRole from "../../../hook/useRole";

const Tuitions = () => {
  const [tuitions, setTuitions] = useState([]);
  const [filteredTuitions, setFilteredTuitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { role } = useRole();

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarkedTuitions")) || [];
    setBookmarks(saved);
  }, []);

  // Fetch tuitions
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/tuitions`)
      .then((res) => {
        setTuitions(res.data);
        setFilteredTuitions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosSecure]);

  // Filter + Sort
  useEffect(() => {
    let filtered = tuitions.filter((t) => {
      const term = searchTerm.toLowerCase();
      return (
        t.class?.toLowerCase().includes(term) ||
        t.subject?.toLowerCase().includes(term) ||
        t.location?.toLowerCase().includes(term)
      );
    });

    if (sortBy === "budget") filtered.sort((a, b) => a.fee - b.fee);
    if (sortBy === "date") filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setFilteredTuitions(filtered);
  }, [searchTerm, sortBy, tuitions]);

  // Toggle bookmark
  const handleBookmark = (tuitionId) => {
    let updated;
    if (bookmarks.includes(tuitionId)) {
      updated = bookmarks.filter((id) => id !== tuitionId);
    } else {
      updated = [...bookmarks, tuitionId];
    }
    setBookmarks(updated);
    localStorage.setItem("bookmarkedTuitions", JSON.stringify(updated));
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-4xl text-black font-bold pt-10">All Tuitions</h3>

        {role === "Student" && (
          <Link
            to="/dashboard/newtuitions"
            className="btn w-[20rem] h-20 mt-5 rounded-4xl text-2xl hover:scale-103 btn-neutral bg-teal-500 text-black hover:bg-teal-300/50 flex items-center justify-center gap-2"
          >
            <IoMdAdd className="scale-120" /> Post a Tuition
          </Link>
        )}

        {/* Search & Sort */}
        <div className="w-full max-w-2xl mt-8 px-4 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search by Class, Subject, or Location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-4 rounded-3xl border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-4 rounded-3xl border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
          >
            <option value="">Sort By</option>
            <option value="budget">Budget (Low to High)</option>
            <option value="date">Newest First</option>
          </select>
        </div>
      </div>

      {/* Tuition Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
        {filteredTuitions.map((tuition) => (
          <div
            key={tuition._id}
            className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Tuition Image */}
            <div
              className="h-52 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/tuitions/${tuition._id}`)}
            >
              <img
                src={tuition.image}
                alt={tuition.subject}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Bookmark Icon */}
            <button
              onClick={() => handleBookmark(tuition._id)}
              className="absolute top-3 right-3 text-white text-2xl z-10"
            >
              {bookmarks.includes(tuition._id) ? <BsBookmarkFill /> : <BsBookmark />}
            </button>

            {/* Tuition Content */}
            <div className="p-5 text-white">
              <h2 className="text-2xl font-semibold tracking-wide">{tuition.subject}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                <span>📍 {tuition.location}</span>
                <span>💻 {tuition.mode}</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="text-3xl font-bold text-teal-400">৳ {tuition.fee}</span>
                {tuition.isAdminApproved && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    ✔ Approved
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tuitions;
