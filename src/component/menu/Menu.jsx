import { Pizza } from "../pizza/Pizza";
import { pizzaData } from "../../data";

export const Menu = () => {
  return (
    <main className="menu">
      <h3>Our Menu</h3>
      {pizzaData.map((pizza) => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </main>
  );
};
