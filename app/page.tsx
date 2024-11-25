"use client";

import menu from "@/data";
import { MenuItemType } from "@/types";
import { useState } from "react";
import Title from "@/components/Title";
import Menu from "@/components/Menu";
import Categories from "@/components/Categories";

const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

export default function Home() {
    console.log(uniqueCategories);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menuItems, setMenuItems] = useState<MenuItemType[]>(menu);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categories, setCategories] = useState(uniqueCategories);
    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <Categories categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}
