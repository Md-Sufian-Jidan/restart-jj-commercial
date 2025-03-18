import { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL, phoneNumber, } = user || {}
    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto p-6 dark:bg-gray-50 dark:text-gray-800">
                <img src={user ? photoURL : "https://source.unsplash.com/200x200/?portrait?2"} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                <div>
                    <h2 className="text-xl font-bold">User Name: {displayName}</h2>
                    <h2 className="text-xl font-semibold dark:text-gray-600">User Email :{email}</h2>
                    <p>phone Number : {phoneNumber || "Don't have"}</p>
                    <div className="text-center my-5">
                        <Link to="/update-profile" className="btn bg-[#fd618d]">Edit Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;