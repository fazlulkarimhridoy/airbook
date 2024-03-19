import image1 from "../assets/subscribe.svg"
const Subscribe = () => {
    return (
        <div className="w-[60%] mx-auto overflow-hidden">
            <h2 className="text-3xl font-semibold mt-5 ml-5">Featured Destinations</h2>
            <div className="mt-10 mb-20 flex items-center justify-between">
                <img src={image1} />
                <div className="w-5/6 ml-40">
                    <h1 className="text-[40px] font-bold">Subscribe to our <br /> Newsletter!</h1>
                    <h2 className="text-[#006CE4] text-xl font-medium mt-3">Subscribe to our newsletter and stay <br /> updated.</h2>
                    <input className="w-full mt-3 p-4 rounded-xl text-[#006CE4] border-2 border-[#006CE4]"
                        type="email"
                        placeholder="Your Email" />
                    <button className="w-full py-4 bg-[#FFB700] rounded-xl mt-3 text-xl font-medium">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;