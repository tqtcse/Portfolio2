import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

interface VideoModalProps {
    videoSrc: string;
    github: string;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose, github }) => {
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
                    <div className="flex gap-x-12 text-[28px] text-gray-700">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            <FaGithub />
                        </a>
                    </div>

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
