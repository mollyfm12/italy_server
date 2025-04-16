import { useState, useEffect } from "react";
import axios from "axios";
import AddBuda from "../components/AddBuda";
import Buda from "../components/Buda";
import "./css/Budapest.css";

function Budapest() {
  const [budas, setBudas] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://italy-backend.onrender.com/api/budas");
      setBudas(response.data);
    })();
  }, []);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const updateBudas = (newBuda) => {
    setBudas((prev) => [...prev, newBuda]);
  };

  return (
    <>
      <button id="add-buda" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddBuda closeAddDialog={closeAddDialog} updateBudas={updateBudas} />
      )}

      <div id="buda-plans" className="columns">
        {budas.map((buda) => (
          <Buda
            key={buda._id}
            _id={buda._id}
            name={buda.name}
            description={buda.description}
            rating={buda.rating}
            main_image={buda.main_image}
          />
        ))}
      </div>
    </>
  );
}

export default Budapest;
