import { describe } from "node:test";

export type ThumbnailItem = {
    name: string;
    img: string;
    description: string;
};

const thumbnailData = [
    {
        name: 'Tune2Tab',
        img: '/img/Tune2Tab.png',
        video: 'video/Tune2Tab.mp4',
        h2: 'Python | OpenCV | Flask | PostgreSQL',
        team_size: '2',
        role: 'Backend',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'Tune2Tab is a personal project created by me and a colleague. The idea behind the project is to help users convert piano-playing videos into sheet music. This way, users can get the sheet music from any video and use it for their own purposes, like practicing or learning to play the song.',
        description2: 'This project uses the OpenCV library to analyze video frames and detect the elements we need in order to convert them into sheet music (tabs). We also apply several techniques such as sorting algorithms, math, and object-oriented programming (OOP) to reduce complexity and improve performance for faster processing. The project is still in development and will be completed soon.'
    },
    {
        name: 'QuickRead',
        img: '/img/QuickRead.png',
        video: 'video/QuickRead.mp4',
        h2: 'React Native | Expo | Typescripts | Axios | JWT | ContextAPI | StyleSheet | Figma | Behance',
        team_size: '4',
        role: 'Frontend',
        key: [
            'JWT Authentication: Implemented JWT for API protection and access, ensuring the security of transmitted data',
            'Hashing User Data (Frontend): Applied hashing to user information on the frontend to prevent sensitive data exposure during transmission',
            'User interface was designed using Figma, and the design concepts were shared and showcased on Behance',

        ],
        description: 'QuickRead is a mobile app that makes reading easier and more enjoyable. It offers offline reading, a built-in dictionary, and lets users create a personal book library. With a simple design and smooth performance, QuickRead helps users enjoy their favorite books anytime, anywhere.',
    },
    {
        name: 'LogiMind',
        img: '/img/LogiMind.png',
        video: 'video/LogiMind.mp4',
        h2: 'ReactJS | ViteJS | NodeJS | ExpressJS | OpenAI | PayOS | PM2',
        team_size: '2',
        role: 'Fullstack',
        key: [
            `JWT Authentication: Implemented JWT for API protection and access, ensuring the security of transmitted data`,
            `Hashing User Data (Frontend): Applied hashing to user information on the frontend to prevent sensitive data exposure during transmission`,
            `Third-Party APIs Integration: Integrated third-party APIs, such as OpenAI and PayOS, to enhance functionality and improve user experience`,
            `Ngrok Integration: Used Ngrok to easily deploy and test webhook function`,
            `WebSocket for Payment Status: Integrated WebSocket to monitor and confirm real-time payment status`,
            `Modern and Consistent UI: Designed a modern, aesthetically pleasing, and consistent interface to provide a seamless user experience`,
            `Clean Code: Wrote clean, maintainable, and scalable code`

        ],
        description: 'LogiMind is a fine-tuning platform that allows users to upload domain-specific documents to train an AI model. After training, users can chat with the AI to search for and retrieve information directly from the uploaded documents. This helps speed up data exploration and supports more effective decision-making.',
        description2: `On the frontend, the project uses Vite to speed up the build process. On the backend, it's built using a monolithic structure, which is suitable for projects of medium size and below, making maintenance easier. The project also integrates third-party APIs, such as OpenAI and PayOS. `
    },
    {
        name: 'SimpleBittorent',
        h2: 'Python | Flask | WebSocket | MySQL lite',
        img: '/img/Bittorent.png',
        video: 'video/Bittorent.mp4',
        team_size: '2',
        role: 'Backend',
        key: ['File sharing between devices on the same LAN network.'],
        description: 'A simple BitTorrent app is an application that implements the core principles of the BitTorrent protocol, allowing users to download and upload files via a decentralized peer-to-peer (P2P) network. The main idea behind BitTorrent is to break large files into smaller pieces and distribute those pieces among multiple peers, which helps speed up file sharing.',
    },
    {
        name: 'BK_Hospital',
        img: '/img/BK_hospital.png',
        h2: 'HTML | CSS | Javascripts | Firebase',
        video: 'video/BK_hospital.mp4',
        team_size: '3',
        role: 'Fullstack',
        key: [
            `JWT Authentication: Implemented JWT for API protection and access, ensuring the security of transmitted data`,
            "Developed without any frontend or backend frameworks",
            "Built using pure HTML, CSS, and vanilla JavaScript",
            "Utilizes a NoSQL database for flexible data storage",
        ],
        description: 'BK Hospital is a web platform designed to help companies efficiently manage hospital operations, tools, and medical equipment.',
    },
    {
        name: 'Eshop',
        img: '/img/Eshop.png',
        h2: 'Spring Boot | Java | Spring Security | PostgreSQL | Azure DevOps ',
        video: 'video/Eshop.mp4',
        team_size: '6',
        role: 'Backend',
        key: [
            'Using Azure DevOps to manage tasks, track progress, and collaborate effectively as a team',
            'JWT Authentication: Implemented JWT for API protection and access, ensuring the security of transmitted data',
            'Third-Party APIs Integration: PayOS',
            'Clean Code: Wrote clean, maintainable, and scalable code'
        ],
        description: 'Eshop is a project focused on building an online store for a small business looking to expand into e-commerce. It was developed as a major assignment for the Software Project Management course. Through this project, I gained a deeper understanding of how a team operates, as well as how to manage and monitor project progress effectively.',
    },
    {
        name: 'HCMUT Printing Service',
        h2: 'ReactJS | Javascripts | JWT | Bootstrap | NodeJS | ExpressJS | MySQL',
        img: '/img/SPSO.png',
        video: 'video/SPSO.mp4',
        team_size: '5',
        role: 'Backend',
        key: [
            'Achieved a score of 8.5/10 in the Software Engineering course'
        ],
        description: 'HCMUT SSPS-SPSO is a project that helps staff and students at the University of Danang - University of Science and Technology easily use and manage printing services.',
    },
];

export default thumbnailData;