import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";

function App() {
  const [phonebook, setPhonebook] = useState(Array(10).fill(null));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const addContact = () => {
    if (position < 0 || position >= phonebook.length) {
      alert("Position out of range. Must be between 0 and 9.");
      return;
    }

    if (name && phone && position !== "") {
      let newPhonebook = [...phonebook];
      newPhonebook[parseInt(position)] = { name, phone };
      setPhonebook(newPhonebook);
      setName("");
      setPhone("");
      setPosition("");
    } else {
      alert("All fields are required.");
    }
  };

  const deleteContact = (index) => {
    let newPhonebook = [...phonebook];
    newPhonebook[index] = null;
    setPhonebook(newPhonebook);
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center">Phonebook</h1>

      <div className="input-container mb-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Position (0-9)"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={addContact}>
          Add Contact
        </button>
      </div>

      <div className="phonebook">
        <h2>Phonebook Contacts</h2>
        <ul className="list-group">
          {phonebook.map((contact, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Position {index}:</strong>{" "}
              {contact ? (
                <>
                  Name: {contact.name}, Phone: {contact.phone}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteContact(index)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <span className="text-muted">Empty</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
