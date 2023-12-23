import React, { useEffect, useState } from "react";
import "./card-list.styles.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Card = ({ name, url, imgUrl }) => {
  const [stats, setSats] = useState([]);
  const [types, setTypes] = useState([]);
  const [visible, setVisible] = useState(false);

  const fetchPokemonDetail = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setSats(result.stats);
    setTypes(result.types);
    console.log(result);
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  const titleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="card-container">
      <div className="pokemon-detail">
        <h1>{titleCase(name)}</h1>
        <div className="image-type-group">
          <div className="pokemon-type">
            {types.map((obj, index) => (
              <span>{titleCase(obj.type.name)}</span>
            ))}
          </div>
          <img className="pokemon-image" src={imgUrl} alt={`${name}`} />
        </div>
      </div>
      <div className="card flex justify-content-center">
        <Button
          className="btn"         
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header={name}
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
