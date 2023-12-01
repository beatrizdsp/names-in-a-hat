import { useState } from "react";
import NamesAdder from "../components/NameAdder";
import NameCard from "../components/NameCard";
import RandomNameSelect from "./RandomNameSelecter";

const NamesList = () => {
  const [names, setNamesList] = useState([]);
  return (
    <>
      <div className="names-wrapper">
        <h2>Your Names</h2>
        <div className="names-list-wrapper">
          {names.map((name) => {
              return <NameCard key={name.id} name={name} />;
            })}

        </div>
      </div>
      <NamesAdder names={names} setNamesList={setNamesList} />
      <RandomNameSelect names={names} />
    </>
  );
};

export default NamesList;
