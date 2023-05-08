import { useState, useEffect } from "react";
import HeadsetsService from "../../services/headsets.service";
import "./HeadsetsList.css";

function HeadsetsList() {
  const [Headsets, Setheadsets] = useState([]);
  const [query, setQuery] = useState("");

  const getheadsets = () => {
    const allheadsets = HeadsetsService.Getheadsets();
    Setheadsets(allheadsets);
  }

  const Showheadsets = () => {
    return (
      Headsets.filter(c =>
        c.price.toString().toLowerCase().includes(query.toLowerCase()) ||
        c.model.toLowerCase().includes(query.toLowerCase()))
        .map(c => {
          return (
            <div className="headsets-list-item">
              <div className="headsets-list-img">
                <img src={`/assets/img/${c.img}`} alt="c.model" />
              </div>
              <p>{c.model} - {c.price}</p>
            </div>
          );
        })
    );
  }

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  }

  useEffect(() => {
    getheadsets();
  }, []);

  return (
    <>
      <div className="searchHeadset">
        <h2>Busqueda:</h2>
        <input type="search" onChange={handleChange} />
      </div>
      <div className="main-container">
        <div className="headsets-list-container">
          {Showheadsets()}
        </div>

      </div>
    </>
  );
}

export default HeadsetsList;