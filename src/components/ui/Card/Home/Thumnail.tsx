import Tune2TabImage from '@img/Tune2Tab.png';
import { ThumbnailProps } from '../../../../@types/thumbnail';

const Thumbnail = ({ name, img, description, h2, team_size, role, description2, keyC }: ThumbnailProps) => {
    return (
        <div className='flex flex-1 items-center'>

            <div className='details'>

                <div className="w-full flex justify-center">
                    <div className="max-w-2xl">
                        <video
                            id="hover-video"
                            className="hidden top-10 right-10 w-full rounded-lg shadow-xl z-20"
                            muted
                            playsInline
                        ></video>

                        {/* Các nội dung khác */}
                        <div id="text-content">
                            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                                <span className="highlight">{name}</span>
                            </h1>
                            <p className="text-2xl text-gray-700 mb-6">
                                {h2}
                            </p>
                            <div className="flex space-x-4 mb-6">
                                <a className="text-gray-600 hover:text-gray-800 transition">Team size: {team_size}</a>
                                <a className="text-gray-600 hover:text-gray-800 transition">|</a>
                                <a className="text-gray-600 hover:text-gray-800 transition">Role: {role} </a>

                            </div>

                            <p className="text-gray-500 text-sm italic">
                                {description}
                            </p>

                            <p className="text-gray-500 text-sm italic mt-5">
                                {description2}


                            </p>
                            <p className="text-gray-500 text-sm italic mt-5">
                                Key Contributions:
                                {keyC.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-600">{item}</li>
                                ))}


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 w-[40vw] h-[60vh] mr-2">
                <div className="">
                    <img
                        src={img}
                        alt="Thumbnail"
                        className="w-full h-[50vh] object-cover rounded-md mb-2"
                    // style={{ height: 'calc(100vh - 65px)' }}
                    />
                </div>

                <p className="text-sm text-gray-600 text-center font-medium transition duration-200 font-roboto">

                    <div>Click on the sidebar to display more detailed information.</div>
                </p>
            </div>
        </div>

    );
};

export default Thumbnail;