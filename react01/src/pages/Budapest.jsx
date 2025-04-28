import { useState, useEffect } from "react";
import axios from "axios";
import AddBuda from "../components/AddBuda";
import EditBuda from "../components/EditBuda";
import Buda from "../components/Buda";
import "./css/Budapest.css";

function Budapest() {
  const [budas, setBudas] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editBuda, setEditBuda] = useState(null); // currently editing

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

  const handleEdit = (id) => {
    const selected = budas.find((buda) => buda._id === id);
    setEditBuda(selected);
  };

  const handleEditSubmit = (updated) => {
    setBudas((prev) =>
      prev.map((buda) => (buda._id === updated._id ? updated : buda))
    );
    setEditBuda(null);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://italy-backend.onrender.com/api/budas/${id}`);
      if (response.status === 200) {
        setBudas((prev) => prev.filter((buda) => buda._id !== id));
      }
    } catch (err) {
      console.error("Error deleting buda:", err);
    }
  };

  return (
    <>
      <button id="add-buda" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddBuda closeAddDialog={closeAddDialog} updateBudas={updateBudas} />
      )}

      {editBuda && (
        <EditBuda buda={editBuda} onClose={() => setEditBuda(null)} onSubmit={handleEditSubmit} />
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
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default Budapest;
