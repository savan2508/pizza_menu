export const Pizza = ({ pizza }) => {
  const { name, photoName, ingredients, price, soldOut } = pizza;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={`${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : "$" + price}</span>
      </div>
    </li>
  );
};
