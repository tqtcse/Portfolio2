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
        h2: 'Python | OpenCV | Flask | PostgreSQL',
        team_size: '4',
        role: 'Frontend',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'QuickRead - Ứng dụng chussyển nhạc thành tab guitar',
    },
    {
        name: 'LogiMind',
        img: '/img/LogiMind.png',
        video: 'video/LogiMind.mp4',
        h2: 'ReactJS | ViteJS | NodeJS | ExpressJS | OpenAI | PayOS | PM2',
        team_size: '2',
        role: 'Fullstack',
        key: [
            `JWT Authentication: Implemented JWT for API protection and access, ensuring the security of transmitted data.`,
            `Hashing User Data (Frontend): Applied hashing to user information on the frontend to prevent sensitive data exposure during transmission.`,
            `Third-Party APIs Integration: Integrated third-party APIs, such as OpenAI and PayOS, to enhance functionality and improve user experience.`,
            `Ngrok Integration: Used Ngrok to easily deploy and test webhook function.`,
            `WebSocket for Payment Status: Integrated WebSocket to monitor and confirm real-time payment status.`,
            `Modern and Consistent UI: Designed a modern, aesthetically pleasing, and consistent interface to provide a seamless user experience.`,
            `Clean Code: Wrote clean, maintainable, and scalable code.`

        ],
        description: 'LogiMind is a fine-tuning platform that allows users to upload domain-specific documents to train an AI model. After training, users can chat with the AI to search for and retrieve information directly from the uploaded documents. This helps speed up data exploration and supports more effective decision-making.',
        description2: `On the frontend, the project uses Vite to speed up the build process. On the backend, it's built using a monolithic structure, which is suitable for projects of medium size and below, making maintenance easier. The project also integrates third-party APIs, such as OpenAI and PayOS. `
    },
    {
        name: 'SimpleBittorent',
        img: '/img/Bittorent.png',
        video: 'video/Bittorent.mp4',
        team_size: '2',
        role: 'Backend',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'QuickRead - Ứng dụng chussyển nhạc thành tab guitar',
    },
    {
        name: 'BK_Hospital',
        img: '/img/BK_hospital.png',
        video: 'video/BK_hospital.mp4',
        team_size: '3',
        role: 'Fullstack',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'QuickRead - Ứng dụng chussyển nhạc thành tab guitar',
    },
    {
        name: 'Eshop',
        img: '/img/Eshop.png',
        video: 'video/Eshop.mp4',
        team_size: '6',
        role: 'Backend',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'QuickRead - Ứng dụng chussyển nhạc thành tab guitar',
    },
    {
        name: 'HCMUT Printing Service',
        img: '/img/SPSO.png',
        video: 'video/SPSO.mp4',
        team_size: '5',
        role: 'Backend',
        key: [
            'Utilized OpenCV for image recognition to detect musical notes using color-coding',
            'Analyzed differences between chords and single notes',
            'Analyzed differences between chords and single notes',
            'Implemented Python multithreading for faster video processing, and integrated PostgreSQL for efficient data management.'
        ],
        description: 'QuickRead - Ứng dụng chussyển nhạc thành tab guitar',
    },
];

export default thumbnailData;