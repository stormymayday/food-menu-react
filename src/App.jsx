import { useState } from "react";
import data from './data.js';
import Title from "./components/Title.jsx";
import Menu from "./components/Menu.jsx";
import Categories from "./components/Categories.jsx";

// Getting unique item categories
const uniqueItemCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(uniqueItemCategories);

  // Filter Functionality
  const filterItems = (category) => {

    if (category === 'all') {
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => {

      return item.category === category;

    })

    setMenuItems(newItems);

  };

  return (
    <main>
      <section className="menu">
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
