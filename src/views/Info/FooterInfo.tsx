import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterInfo = () => {
    return (
        <div className="w-full flex justify-center mt-4 mb-4">
            <div className="w-full flex justify-center mt-4 mb-4">
                <div className="flex gap-x-12 text-[28px] text-gray-700">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/tqtcse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <FaLinkedin />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/tqtcse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        <FaGithub />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/tranquoc.toan.200/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                    >
                        <FaFacebook />
                    </a>

                    {/* Gmail with email address */}
                    <a
                        href="mailto:tqtoancse@gmail.com"
                        className="flex items-center space-x-2 hover:text-red-600 transition-colors text-[18px]"
                    >
                        <MdEmail className="text-[28px]" />
                        <span>tqtoancse@gmail.com</span>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default FooterInfo;
