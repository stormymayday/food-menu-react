import { MenuItemType } from "@/types";
import MenuItem from "./MenuItem";

interface MenuProps {
    items: MenuItemType[];
}

function Menu({ items }: MenuProps) {
    if (items.length === 0) {
        return <div className="section-center">No menu items found</div>;
    }

    return (
        <div className="section-center">
            {items.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
}
export default Menu;
