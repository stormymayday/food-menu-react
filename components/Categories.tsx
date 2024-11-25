interface CategoriesProps {
    categories: string[];
}

function Categories({ categories }: CategoriesProps) {
    return (
        <div className="btn-container">
            {categories.length > 0 &&
                categories.map((category) => {
                    return (
                        <button type="button" className="btn" key={category}>
                            {category}
                        </button>
                    );
                })}
        </div>
    );
}
export default Categories;
