import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";


const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // ✅ 1) Firebase Google login
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        const email = result?.user?.email;

        // ================================
        // ✅ 2) SAVE USER TO DATABASE (TODO)
        // ================================
        // Here you should send user info to backend
        // with DEFAULT role = "student"
        //
        // Example:
        // fetch(`${import.meta.env.VITE_API_URL}/users`, {
        //   method: "POST",
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify({
        //     email,
        //     displayName: result.user.displayName,
        //     photoURL: result.user.photoURL,
        //     role: "student", // default role
        //   }),
        // });

        // ================================
        // ✅ 3) JWT TOKEN GENERATION (TODO)
        // ================================
        // Call backend to create JWT token
        //
        // Example:
        // fetch(`${import.meta.env.VITE_API_URL}/jwt`, {
        //   method: "POST",
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify({ email }),
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     localStorage.setItem("access-token", data.token);
        //
        //     // ================================
        //     // ✅ 4) ROLE BASED ROUTING (TODO)
        //     // ================================
        //     // fetch(`${import.meta.env.VITE_API_URL}/users/role?email=${email}`, {
        //     //   headers: { authorization: `Bearer ${data.token}` }
        //     // })
        //     //   .then(res => res.json())
        //     //   .then(roleData => {
        //     //     if (roleData.role === "admin") navigate("/dashboard/admin");
        //     //     else if (roleData.role === "tutor") navigate("/dashboard/tutor");
        //     //     else navigate("/dashboard/student");
        //     //   });
        //   });

        // ✅ TEMPORARY REDIRECT (until JWT + role routing is connected)
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center pb-8">
      <p className="mb-2">OR</p>

      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white text-black border-[#e5e5e5] h-12 w-full"
        type="button"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </g>
        </svg>
        <span className="ml-2">Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
