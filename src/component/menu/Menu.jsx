import { Pizza } from "../pizza/Pizza";
import { pizzaData } from "../../data";

export const Menu = () => {
  return (
    <main className="menu">
      <h3>Our Menu</h3>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </main>
  );
};
