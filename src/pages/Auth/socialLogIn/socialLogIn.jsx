import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {

                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    userRole: "student"
                }

                navigate('/dashboard')
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In!",
                    showConfirmButton: false,
                    timer: 1000
                });

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                    })

            })
            .catch(error => {
            })
    }

    return (
        <div className='text-center pb-8'>
            <p className='mb-2'>OR</p>
            <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black rounded hover:bg-white/70">
            
                <FcGoogle/>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;