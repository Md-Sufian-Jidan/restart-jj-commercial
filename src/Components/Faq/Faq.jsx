const Faq = () => {
    return (
        <div className="my-5">
            <h2 className="text-4xl text-center my-3">❓ Frequently Asked Questions (FAQs)</h2>
            <div className="flex items-center ">
                <div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">What types of commercial properties are available for sale or rent?</div>
                        <div className="collapse-content text-sm">We offer a wide range of commercial properties, including office buildings, retail spaces, warehouses, industrial facilities, restaurants, and entertainment venues.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How can I schedule a property tour?</div>
                        <div className="collapse-content text-sm">To schedule a property tour, simply click the "Schedule a Visit" button on the property listing page or contact our team directly through the provided contact details.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">What documents are required for renting a commercial property?</div>
                        <div className="collapse-content text-sm">Typically, you’ll need proof of identity, business registration documents, and financial statements. Additional requirements may apply based on the property and lease terms.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Are the properties listed available for both sale and rent?</div>
                        <div className="collapse-content text-sm">Yes, some properties are available for sale, while others are for rent. The listing details will specify the status of each property.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">What facilities are included in commercial properties?</div>
                        <div className="collapse-content text-sm">Facilities vary by property type but may include conference rooms, parking, high-speed internet, security systems, storage areas, and more. Each listing provides a detailed breakdown of available facilities.</div>
                    </div>
                </div>
                <div>
                    <img className="max-w-xl" src="https://i.ibb.co/zW9cpS8g/84610145-SL-050620-30640-14-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;