import Image from "next/image";

const sidebarItems = [
    {
        id: 1,
        name: "Home",
        path: "/app",
        icon: <Image src="/home.svg" alt="home icon" width={20} height={20} />,
    },
    {
        id: 2,
        name: "Metro Pass",
        path: "/app/metro-pass",
        icon: <Image src="/home.svg" alt="home icon" width={20} height={20} />,
    },
    {
        id: 3,
        name: "Recent Travel",
        path: "/app/recent-travel",
        icon: <Image src="/home.svg" alt="home icon" width={20} height={20} />,
    },
    {
        id: 4,
        name: "Recharge",
        path: "/app/recharge",
        icon: <Image src="/home.svg" alt="home icon" width={20} height={20} />,
    },
    {
        id: 5,
        name: "Others",
        path: "/app/others",
        icon: <Image src="/home.svg" alt="home icon" width={20} height={20} />,
    },
];

export default sidebarItems;