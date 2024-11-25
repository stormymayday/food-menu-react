"use client";

import Title from "@/components/Title";
import menu from "@/data";
import { MenuItemType } from "@/types";
import { useState } from "react";
import Menu from "@/components/Menu";

const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

export default function Home() {
    console.log(uniqueCategories);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menuItems, setMenuItems] = useState<MenuItemType[]>(menu);
    // const [categories, setCategories] = useState(uniqueCategories);
    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}
