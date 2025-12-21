// // import { useQuery } from "@tanstack/react-query";
// // import Swal from "sweetalert2";
// // import useAxiosSecure from "../../../hook/useAxiosSecure";
// // import Loading from "../../../Components/Loading/Loading";
// // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// import Swal from "sweetalert2";
// import Loading from "../../../Components/Loading/Loading";
// import useAxiosSecure from "../../../hook/useAxiosSecure";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { useQuery } from "@tanstack/react-query";

// const VerifyTutor = () => {
//   const axiosSecure = useAxiosSecure();

//   const {
//     data: tutors = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["admin-tutors"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/tutors");
//       return res.data;
//     },
//   });

//   if (isLoading) return <Loading />;

//   // ✅ Approve Tutor
//   const handleApprove = async (tutor) => {
//     const confirm = await Swal.fire({
//       title: "Approve Tutor?",
//       text: `Approve ${tutor.name} as Tutor`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Approve",
//     });

//     if (confirm.isConfirmed) {
//       const res = await axiosSecure.patch(
//         `/admin/tutors/approve/${tutor._id}`
//       );

//       if (res.data.modifiedCount > 0) {
//         Swal.fire("Approved!", "Tutor approved successfully", "success");
//         refetch();
//       }
//     }
//   };

//   // ❌ Reject Tutor
//   const handleReject = async (tutor) => {
//     const confirm = await Swal.fire({
//       title: "Reject Tutor?",
//       text: "This action cannot be undone",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       confirmButtonText: "Reject",
//     });

//     if (confirm.isConfirmed) {
//       await axiosSecure.delete(`/admin/users/delete/${tutor._id}`);
//       Swal.fire("Rejected!", "Tutor rejected successfully", "success");
//       refetch();
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h2 className="text-2xl font-semibold mb-5 text-teal-400">
//         Verify Tutors
//       </h2>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Status</th>
//             <th className="text-center">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tutors.map((tutor, index) => (
//             <tr key={tutor._id} className="hover:bg-white/10">
//               <td>{index + 1}</td>
//               <td>{tutor.name}</td>
//               <td>{tutor.email}</td>
//               <td className="text-green-400">{tutor.phone}</td>

//               {/* Status */}
//               <td
//                 className={`font-medium ${
//                   tutor.isApproved
//                     ? "text-green-500"
//                     : "text-yellow-400"
//                 }`}
//               >
//                 {tutor.isApproved ? "Approved" : "Pending"}
//               </td>

//               {/* Actions */}
//               <td className="flex gap-2 justify-center">
//                 {!tutor.isApproved && (
//                   <>
//                     <button
//                       onClick={() => handleApprove(tutor)}
//                       className="btn btn-xs bg-teal-500 text-black hover:bg-teal-600"
//                     >
//                       <FaCheckCircle />
//                     </button>

//                     <button
//                       onClick={() => handleReject(tutor)}
//                       className="btn btn-xs bg-red-500 text-black hover:bg-red-600"
//                     >
//                       <FaTimesCircle />
//                     </button>
//                   </>
//                 )}

//                 {tutor.isApproved && (
//                   <span className="text-green-400 font-semibold">
//                     ✔ Verified
//                   </span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VerifyTutor;
