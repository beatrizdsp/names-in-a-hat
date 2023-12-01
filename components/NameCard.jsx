const NameCard = ({ name }) => {
  return (
    <div id={`card-${name.id}`} className="name-card">
      {name.name}
    </div>
  );
};

export default NameCard;
