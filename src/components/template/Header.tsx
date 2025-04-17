import type { CommonProps } from "../../@types/common"
import classNames from "../../utils/hooks/classNames"
import { Link, useLocation } from 'react-router-dom'

const Header = (props: CommonProps) => {
    const { className } = props
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    return (
        <header
            className={classNames(
                'fixed top-0 left-0 right-0 z-50 bg-white shadow-md',
                className
            )}
            style={{ height: 65 }}
        >
            <div className="h-full px-6 flex items-center justify-between ">
                {/* <div className="text-cyan-600 text-xl font-bold tracking-wide">LogiMind</div> */}

                <nav className="flex gap-6">
                    <Link
                        to="/"
                        className={classNames(
                            'font-bold transition duration-200 font-roboto', // Thêm font Roboto
                            isActive('/')
                                ? 'text-[#1E90FF]' // Sử dụng màu #1E90FF thay cho text-blue-600
                                : 'text-[#4B5563] hover:text-[#1E90FF] ' // Cập nhật màu hover
                        )}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/info"
                        className={classNames(
                            'font-bold transition duration-200 font-roboto', // Thêm font Roboto
                            isActive('/info')
                                ? 'text-[#1E90FF]'
                                : 'text-[#4B5563] hover:text-[#1E90FF] '
                        )}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
