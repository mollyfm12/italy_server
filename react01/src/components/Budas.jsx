import { useState, useEffect } from "react";
import "./css/Budas.css";
import axios from "axios";
import Buda from "./Buda";
import AddBuda from "./AddBuda";
import EditBuda from "./EditBuda";

const Budas = () => {
  const [budas, setBudas] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);

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

  const handleDelete = async (id) => {
    const res = await fetch(`https://italy-backend.onrender.com/api/budas/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setBudas((prev) => prev.filter((b) => b._id !== id));
      console.log("Loaded budas:", response.data);

    } else {
      console.error("Failed to delete Buda");
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const closeEdit = () => {
    setEditingId(null);
  };

  const applyEdit = (updatedBuda) => {
    setBudas((prev) =>
      prev.map((b) => (b._id === updatedBuda._id ? updatedBuda : b))
    );
    closeEdit();
  };

  return (
    <>
      <button id="add-buda" onClick={openAddDialog}>+</button>

      {showAddDialog && (
        <AddBuda closeAddDialog={closeAddDialog} updateBudas={updateBudas} />
      )}

      {editingId && (
        <EditBuda
          buda={budas.find((b) => b._id === editingId)}
          onClose={closeEdit}
          onSubmit={applyEdit}
        />
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
};

export default Budas;
