import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../Routes/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return toast.error('your password should at least 6 character long');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should contain a Capital letter')
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Your password should contain a lower letter')
        }
        // creating user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //update user profile name and photo url
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('profile updated');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                navigate('/login');
                e.target.reset();
                return toast.success('User Register Successfully');
            })
            .catch(error => {
                console.log(error);
                return toast.error(error.message);
            });
    };
    return (
        <>
            <Helmet>
                <title>
                    Jj Commercial || Register
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Your Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name="password" placeholder="Your Password" className="input input-bordered" required />
                                <span className="absolute top-9 right-5" onClick={() => setShow(!show)}>
                                    {show ?
                                        <FaEye /> :
                                        <FaEyeSlash />
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#EF9651] w-full">Register</button>
                            </div>
                        </form>
                        <p className='text-center my-3'>Already have an account? <Link className='text-blue-500' to={'/login'}>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;