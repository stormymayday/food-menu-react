import { StaticImageData } from "next/image";

export type MenuItemType = {
    id: number;
    title: string;
    category: string;
    price: number;
    img: StaticImageData;
    desc: string;
};
