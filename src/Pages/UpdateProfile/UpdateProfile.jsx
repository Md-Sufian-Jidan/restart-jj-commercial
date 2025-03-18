import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        console.log(name, photo);

        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then((result) => {
                console.log(result.user);
                toast.success('user Update Successfully');
                return navigate(location?.state ? location.state : '/userProfile');
            })
            .catch(() => {
                return toast.error('user Not Updated. Please Reload the Page and Try again');
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Your Profile</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" defaultValue={user?.photoURL} placeholder="Your Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#778899] text-white w-full">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;