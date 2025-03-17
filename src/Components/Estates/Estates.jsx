import { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider";
import Estate from "../Estate/Estate";

const Estates = () => {
    const { fakeData } = useContext(AuthContext);

    return (
        <>
        <div className="text-center my-5">
            <h2>Explore Prime Commercial Estates</h2>
            <p>Discover a wide range of commercial properties designed to meet your business needs. From modern office buildings and retail spaces to industrial facilities and entertainment venues, we offer premium estates for sale and rent. Browse through our curated listings and find the perfect space that suits your ambitions.</p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fakeData?.map((estate) => <Estate key={estate?.id} estate={estate}></Estate>)
                }
            </div>
        </>
    );
};

export default Estates;