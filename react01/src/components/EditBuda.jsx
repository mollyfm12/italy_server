import "./css/AddBuda.css";
import "./css/Dialog.css";
import React, { useState } from "react";

const EditBuda = ({ buda, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: buda.name,
    description: buda.description,
    rating: buda.rating,
    img: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const updateOnServer = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    if (!formData.name || formData.name.length < 3) {
      setStatus("Name must be at least 3 characters.");
      return;
    }

    if (!formData.description) {
      setStatus("Description is required.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("rating", formData.rating);
    if (formData.img) data.append("img", formData.img);

    try {
      const response = await fetch(`https://italy-backend.onrender.com/api/budas/${buda._id}`, {
        method: "PUT",
        body: data,
      });

      if (response.status === 200) {
        const updated = await response.json();
        setStatus("✅ Updated successfully");
        onSubmit(updated); // send to parent
      } else {
        setStatus("❌ Error updating item");
      }
    } catch (err) {
      console.error("Error updating buda:", err);
      setStatus("❌ Error submitting to server");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={onClose}
          >
            &times;
          </span>

          <form id="edit-property-form" onSubmit={updateOnServer}>
            <h3>Edit Buda</h3>

            <p>
              <label htmlFor="name">Activity Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="rating">Rating (1–10):</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                min="1"
                max="10"
                onChange={handleChange}
                required
              />
            </p>

            <p>
              <label htmlFor="img">Replace Image:</label>
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
              />
            </p>

            <p>
              <button type="submit">Update</button>
            </p>
            <p>{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBuda;
