import { MenuItemType } from "@/types";
import MenuItem from "./MenuItem";

interface MenuProps {
    items: MenuItemType[];
}

function Menu({ items }: MenuProps) {
    return (
        <div className="section-center">
            {items.length > 0 &&
                items.map((item) => <MenuItem key={item.id} item={item} />)}
        </div>
    );
}
export default Menu;
