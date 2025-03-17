import { useContext } from "react";
import { AuthContext } from "../../../Routes/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { googleLogin, githubLogin, signInUser } = useContext(AuthContext);
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result);
                return toast.success('User Logged in successfully');
            })
            .catch(error => {
                console.log(error);
                return toast.error(error.message);
            })
    };
    //google login
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                return toast.success('User Login Successful');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('Something wrong please reload the page and try again');
            });
    };
    //github login
    const handleGithub = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location?.state : '/');
                return toast.success('User Login Successfully');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('Something wrong please reload the page and try again');
            });
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#EF9651] w-full">Login</button>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className="mx-5">
                        <div onClick={handleGoogle} className="flex items-center gap-3 btn text-xl my-2 bg-[#3F7D58] text-white">
                            <FaGoogle size={20} />
                            <span>Google Login</span>
                        </div>
                        <div onClick={handleGithub} className="flex items-center gap-3 btn text-xl my-2 bg-black text-white">
                            <FaGithub size={20} />
                            <span>Github Login</span>
                        </div>
                    </div>
                    <p className='text-center my-3'>Don't have an account? <Link to={'/register'}>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;