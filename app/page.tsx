"use client";

import menu from "@/data";
import { MenuItemType } from "@/types";
import { useState } from "react";
import Title from "@/components/Title";
import Menu from "@/components/Menu";
import CategoryFilter from "@/components/CategoryFilter";

const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

export default function Home() {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>(menu);

    const categories = uniqueCategories;

    const filterMenuItems = (category: string, menu: MenuItemType[]) => {
        if (category === "all") {
            setMenuItems(menu);
            return;
        }
        const newItems = menu.filter((menuItem) => {
            return menuItem.category === category;
        });
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <CategoryFilter
                    categories={categories}
                    filterMenuItems={filterMenuItems}
                />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}
