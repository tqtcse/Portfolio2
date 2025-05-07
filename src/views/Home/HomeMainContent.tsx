const HomeMainContent = () => {
    return (
        <div>
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
                            <span className="highlight">tqtcse</span>
                        </h1>
                        <p className="text-2xl text-gray-700 mb-6">
                            Fullstack Developer | Cloud Engineer
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="contact-item text-gray-600 hover:text-gray-800 transition">About</a>
                            <a href="https://www.facebook.com/tranquoc.toan.200/" className="contact-item text-gray-600 hover:text-gray-800 transition">Contact</a>
                            <a href="https://www.linkedin.com/in/tqtcse/" className=" contact-item text-gray-600 hover:text-gray-800 transition">LinkedIn</a>
                            <a href="https://github.com/tqtcse" className=" contact-item text-gray-600 hover:text-gray-800 transition">GitHub</a>
                        </div>

                        <p className="text-gray-500 text-sm italic">
                            Helloo!! I’m a third-year Computer Science student with a strong interest in fullstack development and
                            cloud engineering. Over the past few years, I’ve been actively building projects that span both frontend
                            and backend, gaining hands-on experience with modern frameworks like React, Node.js, and various cloud
                            technologies. I enjoy solving real-world problems through code and am constantly looking for
                            opportunities to learn, grow, and contribute to impactful software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMainContent