import React, {useEffect, useState } from "react";
import "./card.styles.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Model from '../model/Model'

const Card = ({ id,name, url, imgUrl }) => {
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [visible, setVisible] = useState(false);

  const fetchPokemonDetail = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result);
      setStats(result.stats);
      setTypes(result.types);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetail()
  }, []);


  const titleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  return (
    <div className="card-container">
      <div className="pokemon-detail">
        <div className="pokemon-heading-group">
          <h1>{titleCase(name)}</h1>
          <span>##{id}</span>
        </div>
        <div className="image-type-group">
          <div className="pokemon-type">
            {types.map((obj, index) => (
              <span key={index}>{titleCase(obj.type.name)}</span>
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
        className="model-dialog-box"
          header={<b>{titleCase(name)}</b>}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <Model stats={stats} />
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
