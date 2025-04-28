import React, { useState, useEffect } from "react";
import axios from "axios";

console.log("Component rendered");

const Budas = () => {
  const [budas, setBudas] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    console.log("👀 useEffect running...");
    (async () => {
      try {
        const response = await axios.get("https://italy-backend.onrender.com/api/budas");
        console.log("✅ Fetched budas:", response.data);
        setBudas(response.data);
      } catch (err) {
        console.error("❌ Fetch failed:", err);
        setError("Error loading budas. See console.");
      }
    })();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Budapest Activities</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {budas.length === 0 ? (
        <p>⏳ Loading or no data...</p>
      ) : (
        budas.map((buda) => (
          <div key={buda._id} style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            backgroundColor: "#f7f7f7"
          }}>
            <h3>{buda.name}</h3>
            <p>{buda.description}</p>
            <p>Rating: {buda.rating}</p>
            <img
              src={`https://italy-backend.onrender.com/${buda.main_image}`}
              alt={buda.name}
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
        ))
      )}
    </main>
  );
};

export default Budas;

/*
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
      try {
        const response = await axios.get("https://italy-backend.onrender.com/api/budas");
        console.log("✅ API responded:", response.data);
        setBudas(response.data);
      } catch (err) {
        console.error("❌ API fetch failed:", err);
      }
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
*/