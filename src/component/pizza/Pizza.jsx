export const Pizza = ({ pizza }) => {
  const { name, photoName, ingredients, price } = pizza;

  return (
    <div className="pizza">
      <img src={photoName} alt={`${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};
