import BkLogo from '../../../public/img/BKlogo.png'
import { FaFacebook } from 'react-icons/fa';

const BodyInfo = () => {
    return (
        <div className="flex space-x-4 h-full">

            {/* Khung Education */}
            <div className="w-1/2 flex flex-col space-y-4 ml-4 flex-1">
                <div className=" p-4 rounded-lg shadow-md ml-4 flex flex-col h-4/10" style={{ border: '0.1px solid #d1d5db' }}>
                    {/* Dòng tiêu đề ở trên, chiếm chiều cao riêng */}
                    <h3 className="font-semibold text-xl mb-2 text-left ">Education</h3>

                    {/* Nội dung còn lại chiếm phần còn lại của chiều cao */}
                    <div className="flex-1 flex items-center justify-center ">
                        {/* Logo */}
                        <div className="relative w-28 h-28 rounded-lg overflow-hidden shadow-xl mr-4" style={{ border: '0.1px solid #d1d5db' }}>
                            <img
                                src={BkLogo}
                                alt="HCMUT Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thông tin */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center flex-wrap">
                                <h3 className="text-xl font-semibold">VNU-HCM University Of Technology - HCMUT</h3>
                                <p className="ml-4 text-gray-500">2022–2026</p>
                            </div>

                            <div className="text-gray-700 mt-1">
                                Bachelor of Science in Computer Science<br />
                                Specialization: Software Engineering
                            </div>
                        </div>
                    </div>


                </div>

                <div className=" p-4 rounded-lg shadow-md ml-4 flex flex-col h-6/10" style={{ border: '0.1px solid #d1d5db' }}>
                    <h3 className="font-semibold text-xl mb-2 text-left">Experience</h3>
                    <div className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                        <p><strong>Dec 2024 – Feb 2025</strong></p>
                        <p><strong>Remote Fullstack Developer</strong></p>
                        <p>
                            Developed a full-featured web application with user authentication, payment system,
                            admin dashboard, and OpenAI API integration.
                        </p>
                        <div className="flex items-start space-x-2">
                            <p className="font-medium text-black whitespace-nowrap">Technologies:</p>
                            <p className="text-gray-700">
                                ReactJS | ViteJS | NodeJS | ExpressJS | PayOS | OpenAI | MySQL | Ngrok | PM2
                            </p>
                        </div>
                        <div className="flex items-start space-x-2">
                            <p className="font-medium text-black whitespace-nowrap">Accomplishments:</p>
                            <p className="text-gray-700">
                                Highly positive client
                                feedback.
                            </p>
                        </div>


                        <div className="flex items-center space-x-2 text-blue-600">
                            <p className="font-medium text-black">References:</p>
                            <FaFacebook />
                            <a
                                href="https://www.facebook.com/nguyen.minh.son9999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-sm"
                            >
                                Nguyen Minh Son
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-600">
                            <p className="font-medium text-black">Client Project:</p>

                            <a
                                href=" https://logimindcs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-sm"
                            >
                                https://logimindcs.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            {/* Khung Skills */}
            <div className="w-1/2 flex flex-col flex-1 mr-4">
                <div
                    className="p-6 rounded-xl shadow-lg bg-white flex flex-col flex-1"
                    style={{ border: '1px solid #d1d5db' }}
                >
                    {/* TIÊU ĐỀ LUÔN Ở GÓC TRÊN TRÁI */}
                    <h3 className="font-semibold text-xl mb-4 text-left">Skills</h3>

                    {/* PHẦN NỘI DUNG CĂN GIỮA THEO CHIỀU DỌC */}
                    <div className="ml-4 flex-1 flex flex-col justify-center space-y-3 text-gray-700 md:text-base lg:text-lg">
                        <div>
                            <span className="font-medium text-gray-800">Programming Languages: </span>
                            TypeScript, JavaScript, Python, Java, C++.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">Frontend: </span>
                            ReactJS, NextJS, ViteJS, React Native, Tailwind CSS.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">Backend: </span>
                            NodeJS, Express, Spring Boot, Flask, Django, FastAPI.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">Database: </span>
                            MySQL, SQLite, SQL Server, Firebase.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">Tools: </span>
                            Git, Docker, Postman, Figma, HashiCorp Vault.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">DevOps & Deployment: </span>
                            PM2, Vercel, Nginx, Ngrok, AWS.
                        </div>

                        <div>
                            <span className="font-medium text-gray-800">Soft Skills: </span>
                            Strong problem-solving and analytical thinking abilities, effective team collaboration, and a quick adaptability to new technologies and complex concepts.
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default BodyInfo;
