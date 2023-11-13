export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let openMessage = "";

  if (hour > openHour && hour < closeHour) {
    openMessage = "We're currently open!";
  } else {
    openMessage = "We're currently closed!";
  }
  return (
    <div>
      <footer className="footer">
        {new Date().toLocaleTimeString()}: {openMessage}
      </footer>
    </div>
  );
};
