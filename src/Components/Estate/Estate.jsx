import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {
    const { id, estate_title, relevant_Image, location, segment_name, facilities } = estate || {};
    return (
        <div>
            <div className="card card-compact h-[650px] w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[70vh]" src={relevant_Image} alt="Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="font-bold text-lg">Location : {location}</p>
                    <p className="font-bold">Segment Name : {segment_name}</p>
                    <p className="text-xl font-bold">Facilities :</p>
                    <ul className="grid grid-cols-2 gap-3 font-bold">
                        {
                            facilities?.map((fac, idx) => <li key={idx}>{idx + 1}) {fac}</li>)
                        }
                    </ul>
                    <div className="card-actions justify-center my-3">
                        <Link to={`/estate/${id}`} className="btn bg-[#c7bb19]">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;