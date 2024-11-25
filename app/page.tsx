"use client";

import Title from "@/components/Title";
import menu from "@/data";
import { MenuItemType } from "@/types";
import { useState } from "react";
import Menu from "@/components/Menu";

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menuItems, setMenuItems] = useState<MenuItemType[]>(menu);
    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}
