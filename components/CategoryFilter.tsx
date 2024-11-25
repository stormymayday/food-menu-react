import { MenuItemType } from "@/types";
import menu from "@/data";

interface CategoryFilterProps {
    categories: string[];
    filterMenuItems: (category: string, menu: MenuItemType[]) => void;
}

function CategoryFilter({ categories, filterMenuItems }: CategoryFilterProps) {
    if (categories.length == 1 && categories[0] === "all") {
        return null;
    }
    return (
        <div className="btn-container">
            {categories.length > 0 &&
                categories.map((category) => {
                    return (
                        <button
                            type="button"
                            className="btn"
                            key={category}
                            onClick={() => filterMenuItems(category, menu)}
                        >
                            {category}
                        </button>
                    );
                })}
        </div>
    );
}
export default CategoryFilter;
