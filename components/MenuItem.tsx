import { MenuItemType } from "@/types";
import Image from "next/image";

interface MenuItemProps {
    item: MenuItemType;
}

function MenuItem({ item }: MenuItemProps) {
    const { img, title, price, desc } = item;
    return (
        <article className="menu-item">
            <Image src={img} alt={title} className="img" />
            <div className="item-info">
                <header>
                    <h5>{title}</h5>
                    <span className="item-price">${price}</span>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </article>
    );
}
export default MenuItem;
