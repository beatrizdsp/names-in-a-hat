import { useState } from "react";

const NamesAdder = ({ names, setNamesList }) => {
  const [input, setInput] = useState("");

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      //   console.log("YOU CAN'T DO THAT");
    } else {
      //   console.log(`Submitting ${input}`);
      setNamesList(() => {
        return [...names, { id: names.length + 1, name: input.toUpperCase() }];
      });
      setInput("");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input" />
        <input
          type="text"
          placeholder="ENTER NAME HERE..."
          id="name-input"
          value={input}
          onChange={updateInput}
        />
        <input type="submit" value="Add Name" />
      </form>
    </div>
  );
};

export default NamesAdder;
