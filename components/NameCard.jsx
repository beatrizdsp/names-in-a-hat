const NameCard = ({ name }) => {
  return (
    <li id={`card-${name.id}`} className="name-card">
      {name.name}
    </li>
  );
};

export default NameCard;
