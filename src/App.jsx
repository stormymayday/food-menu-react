import { useState } from "react";
import Title from "./components/Title.jsx";
import data from './data.js';

const App = () => {

  const [menu, setMenu] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title text='our menu' />
      </section>
    </main>
  );
};
export default App;
