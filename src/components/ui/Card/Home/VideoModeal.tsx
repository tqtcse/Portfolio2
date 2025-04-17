import React from "react";

interface VideoModalProps {
    videoSrc: string;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose }) => {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center z-50">

            <div className="relative bg-white rounded-xl shadow-2xl border-1 border-white p-4 overflow-hidden ">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-600 text-3xl font-bold z-50 hover:text-red-500 cursor-pointer"
                >
                    &times;
                </button>

                {/* Tab header */}
                <div className="flex space-x-4 border-b-2 pb-2 mb-4">
                    <button className="tab-btn text-lg font-semibold text-blue-600 border-b-2 border-blue-600">
                        Video
                    </button>
                </div>

                {/* Video Content */}
                <div
                    className="tab-content"
                    style={{ width: "50vw", height: "60vh", objectFit: "contain" }}
                >
                    <video autoPlay controls muted className="w-full h-full object-contain">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
