import { useState } from "react";
import data from './data.js';
import Title from "./components/Title.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {

  const [menu, setMenu] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title text='our menu' />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
