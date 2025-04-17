import { useState } from "react";

const HomeSideBar = ({ onSelectItem, onClick }: { onSelectItem: (name: string) => void; onClick: () => void; }) => {

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (name: string) => {
        setHoveredItem(name);
        onSelectItem(name);


    }
    const handleMouseLeave = () => {
        setHoveredItem(null);
        onSelectItem('');
    };
    return (

        <ul className="flex flex-col justify-between h-full">

            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('Tune2Tab')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">TUNE2TAB</span>
                <span className="text-gray-500">NOW</span>
            </li>
            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('LogiMind')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">LOGI MIND</span>
                <span className="text-gray-500">2025</span>
            </li>
            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('Eshop')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">ESHOP</span>
                <span className="text-gray-500">2025</span>
            </li>
            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('QuickRead')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">QUICK READ</span>
                <span className="text-gray-500">2025</span>
            </li>
            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('HCMUT Printing Service')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">HCMUT PRINTING SERVICE</span>
                <span className="text-gray-500">2024</span>
            </li>

            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('SimpleBittorent')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">SIMPLE BITTORENT</span>
                <span className="text-gray-500">2024</span>
            </li>


            <li className="sidebar-item group relative flex justify-between items-center p-3 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter('BK_Hospital')}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            >

                <span className="text-gray-800 font-semibold">BK HOSPITAL</span>
                <span className="text-gray-500">2023</span>
            </li>



        </ul>

    )
}

export default HomeSideBar