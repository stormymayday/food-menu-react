import { useState } from "react";
import data from './data.js';
import Title from "./components/Title.jsx";
import Menu from "./components/Menu.jsx";

// Getting unique item categories
const uniqueItemCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title text='our menu' />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
