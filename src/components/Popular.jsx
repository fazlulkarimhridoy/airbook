import { FaStar } from "react-icons/fa";
import image1 from "../assets/popular1.svg"
import image2 from "../assets/popular2.svg"
import image3 from "../assets/popular3.svg"
import image4 from "../assets/popular4.svg"
import image5 from "../assets/popular5.svg"
import image6 from "../assets/popular6.svg"


const Popular = () => {
    return (
        <div className="w-[60%] mx-auto">
            <h2 className="text-3xl font-semibold mt-5 ml-5">Popular Airlines</h2>
            <div className="mt-10 mb-20">
                <div className="flex items-center justify-between">
                    {/* first col */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={image1} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image2} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image3} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second col */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={image3} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image4} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image1} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third col */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={image5} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image1} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image4} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fourth col */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img src={image4} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image6} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <img src={image5} />
                            <div>
                                <h3 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh</h3>
                                <div className="flex items-center gap-1">
                                    <FaStar color="orange"></FaStar>
                                    <h2>4 (783 reviews)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;