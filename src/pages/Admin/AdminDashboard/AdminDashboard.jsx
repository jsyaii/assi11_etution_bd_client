import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { Bar,
     BarChart,
      CartesianGrid,
       Cell, 
       Legend, 
       Line,
        LineChart,
         Pie,
         PieChart,
          ResponsiveContainer,
           Tooltip,
            XAxis, 
            YAxis } from "recharts";

            

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    users: [],
    tuitions: [],
    revenue: [],
  });

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/admin/dashboard-stats")
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) return <Loading />;

  const COLORS = ["#6C5CE7", "#341F97", "#FDCB6E"];

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-[#341F97]">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart - Revenue over Months */}
        <div className="bg-[#F8F7FF]/80 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.revenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#6C5CE7" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Total Tuitions per Category */}
        <div className="bg-[#F8F7FF]/80 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">Tuitions by Subject</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.tuitions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#341F97" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart - Users by Role */}
      <div className="bg-[#F8F7FF]/80 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">Users by Role</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats.users}
              dataKey="count"
              nameKey="role"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#6C5CE7"
              label
            >
              {stats.users.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
