import Avatar from '../../../public/img/avatar/image.png';

const HeaderInfo = () => {
    return (
        <div className='flex items-center justify-between mt-4'>
            {/* Avatar container */}
            <div className="flex items-center justify-start ml-[10vw]">
                <div className="relative w-32 h-32 rounded-full overflow-hidden  shadow-xl mr-4" style={{ border: '0.1px solid #d1d5db' }}>
                    <img
                        src='https://d2206g6teziymy.cloudfront.net/faceToan.jpg' // Đường dẫn đến avatar của bạn
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border-4 border-white rounded-full"></div>
                </div>
                {/* Info text below the avatar */}
                <div className="text-center mt-4 mr-5">
                    <h3 className="text-xl font-semibold">Tran Quoc Toan</h3>
                    <p className="text-gray-500">Fullstack Developer</p>
                </div>
            </div>
            {/* Info text on the right */}
            <div className="text-gray-500 w-[50vw] mr-[10vw]">
                Hello! I’m a third-year Computer Science student with a strong interest in fullstack development and
                cloud engineering. Over the past few years, I’ve been actively building projects that span both frontend
                and backend, gaining hands-on experience with modern frameworks like React, Node.js, and various cloud
                technologies. I enjoy solving real-world problems through code and am constantly looking for
                opportunities to learn, grow, and contribute to impactful software solutions.
            </div>
        </div>
    )
}

export default HeaderInfo;
