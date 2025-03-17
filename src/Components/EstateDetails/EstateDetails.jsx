import React, { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import { useParams } from 'react-router-dom';

const EstateDetails = () => {
    const { fakeData } = useContext(AuthContext);
    const { id } = useParams();
    const estate = fakeData.find(data => data?.id === id);
    const { relevant_Image, estate_title, segment_name, description, price, Status, Area, location, facilities } = estate || {};

    return (
        <div className="mx-10 my-5">
            <div>
                <img className="rounded-2xl w-full h-screen" src={relevant_Image} alt="property image" />
            </div>
            <div className="space-y-2">
                <p className="text-center mt-2 font-bold text-2xl">Title: {estate_title}</p>
                <p>{description}</p>
                <div className="space-y-2 font-semibold">
                    <p>Location : <span>{location}</span></p>
                    <p>Segment Name : <span>{segment_name}</span></p>
                    <p>Area : <span>{Area}</span></p>
                </div>
                <p className="text-xl font-bold ">Facilities :</p>
                <ul >
                    {facilities?.map((fac, idx) => <li key={idx}>{idx + 1}){fac}</li>)}
                </ul>
                <div className="font-semibold">
                    <p>Price : $ <span>{price}</span></p>
                    <p>Status : <span>{Status}</span></p>
                </div>
            </div>
            <div className="navbar-center">
                <button className="btn bg-[#7832c9]">Buy Now</button>
            </div>
        </div>
    );
};

export default EstateDetails;