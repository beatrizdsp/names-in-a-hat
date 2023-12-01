import { useState } from "react";

const RandomNameSelect = ({ names }) => {
  const [randomName, setRandomName] = useState();

  const namesLength = names.length;
  const randomNum = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const selectRandomName = () => {
    const num = randomNum(namesLength);
    return names.find((name) => name.id === num);
  };

  const handleDisplayName = () => {
    const currentName = selectRandomName();
    const currentCardId = currentName.id;
    const currentNameCard = document.getElementById(`card-${currentCardId}`);
    console.log(currentNameCard, "CURRENT NAME CARD");

    if (randomName) {
      const lastCardId = randomName.id;
      const lastNameCard = document.getElementById(`card-${lastCardId}`);

      lastNameCard.classList.remove("selected-name");

      setRandomName(currentName);
      currentNameCard.classList.add("selected-name");
    } else {
      setRandomName(currentName);
      currentNameCard.classList.add("selected-name");
    }
  };

  return (
    <button onClick={handleDisplayName} id="random-button">
      Shuffle The Hat
    </button>
  );
};

export default RandomNameSelect;
