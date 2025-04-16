import "./css/AddBuda.css";
import React, { useState } from "react";

const AddBuda = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://italy-backend.onrender.com/api/budas", {
      method: "POST",
      body: formData
    });

    if (response.status === 200) {
      const newBuda = await response.json();
      setResult("✅ Buda added successfully");
      event.target.reset();
      setPrevSrc("");
      props.closeAddDialog();
      props.updateBudas(newBuda);
    } else {
      setResult("❌ Error adding Buda");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeAddDialog}
          >
            &times;
          </span>

          <form id="add-property-form" onSubmit={addToServer}>
            <h3>Create New Activity</h3>

            <p>
              <label htmlFor="name">Activity Name:</label>
              <input type="text" id="name" name="name" required minLength={3} />
            </p>

            <p>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" required />
            </p>

            <p>
              <label htmlFor="rating">Rating (1–10):</label>
              <input type="number" id="rating" name="rating" min="1" max="10" required />
            </p>

            <section className="columns">
              <div>
                {prevSrc && (
                  <img id="img-prev" src={prevSrc} alt="Preview" />
                )}
              </div>

              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBuda;
