import HomeSideBar from "./HomeSidebar";
import HomeMainContent from "./HomeMainContent";
import VideoModal from "../../components/ui/Card/Home/VideoModeal";
import Thumbnail from "../../components/ui/Card/Home/Thumnail";
import thumbnailData, { ThumbnailItem } from '@data/thumbnailData';
import { useState } from "react";

console.log(thumbnailData[0])

const Home = () => {

    const [selectedName, setSelectedName] = useState<string>('');  // Trạng thái cho tên item hover
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<string>('');


    const selectedItem = thumbnailData.find((item: ThumbnailItem) => item.name === selectedName);


    const handleItemSelect = (name: string) => {
        console.log(name)
        setSelectedName(name);  // Cập nhật tên khi hover vào item

    };

    const handleOpenModal = (video: string) => {
        console.log(video)
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVideo('');
    };

    return (
        <div className="home-gradient-bg grid grid-cols-4 h-screen overflow-hidden " style={{ height: 'calc(100vh - 65px)' }}>
            {/* Sidebar */}
            <div className="col-span-1 p-4 overflow-y-auto bg-gray-100" style={{ height: 'calc(100vh - 65px)' }}>
                <HomeSideBar onSelectItem={handleItemSelect} onClick={() => handleOpenModal(selectedItem.video)} />
            </div>

            {/* Main Content */}
            <div className="col-span-3 flex flex-1 items-center justify-center">
                <div className="home-content">
                    {!selectedItem && <HomeMainContent />}
                </div>

                {selectedItem && (
                    <div className="">
                        <Thumbnail
                            name={selectedItem.name}
                            img={selectedItem.img}
                            description={selectedItem.description}
                            description2={selectedItem.description2}
                            h2={selectedItem.h2}
                            team_size={selectedItem.team_size}
                            role={selectedItem.role}
                            keyC={selectedItem.key}
                        />
                    </div>

                )}

            </div>
            {isModalOpen && (
                <VideoModal videoSrc={selectedVideo} onClose={handleCloseModal} />
            )}
            {/* <div className="col-span-1" /> */}
        </div>
    );
};

export default Home;
