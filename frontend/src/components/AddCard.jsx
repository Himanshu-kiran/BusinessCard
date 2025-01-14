import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const AddCard = () => {
  // State variables for user inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([]);
  const [currentInterest, setCurrentInterest] = useState("");
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Card object structure
  const card = {
    name,
    description,
    interests,
    linkedinUsername,
    twitterUsername,
  };

  // Function to submit card data
  const submitCard = async () => {
    // Validation: Check if all fields are filled
    if (
      name === "" ||
      description === "" ||
      interests.length === 0 ||
      linkedinUsername === "" ||
      twitterUsername === ""
    ) {
      alert("Please enter all details!");
      return;
    }

    // POST request to server
    await fetch("/api/user/card", {
      method: "POST",
      body: JSON.stringify(card),
      headers: { "Content-type": "application/json" },
    });

    // Reset form fields
    setLinkedinUsername("");
    setTwitterUsername("");
    // Navigate user back to homepage
    navigate("/");
  };

  // Function to add interest
  const addInterest = () => {
    // Check if interest is entered and not already present
    if (currentInterest && !interests.includes(currentInterest)) {
      setInterests(interests.concat(currentInterest));
      setCurrentInterest("");
    }
  };

  // Function to remove interest
  const removeInterest = () => {
    // Check if there are interests to remove
    if (interests.length > 0) {
      const updatedInterests = [...interests];
      updatedInterests.pop();
      setInterests(updatedInterests);
      setCurrentInterest("");
    } else {
      alert("You don't have any interests! So boring.");
    }
  };

  return (
    <div className="grid grid-cols-2">
      {/* Left side: Input fields */}
      <div className="w-full flex container mx-auto mt-10">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md w-full">
          <div className="p-6">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-gray-800">Add your card</h1>
            {/* Name input field */}
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Description input field */}
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Interests input field */}
            <div className="mt-4 ">
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded mr-2"
                type="text"
                placeholder="Interests"
                value={currentInterest}
                onChange={(e) => setCurrentInterest(e.target.value)}
              />
              {/* Add and remove buttons */}
              <div className="pt-4">
                <span className="flex justify-between">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600"
                    onClick={addInterest}
                    type="button"
                  >
                    Add
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600  focus:bg-red-600"
                    onClick={removeInterest}
                    type="button"
                  >
                    Remove
                  </button>
                </span>
              </div>
            </div>
            {/* LinkedIn Username input field */}
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="LinkedIn Username"
                value={linkedinUsername}
                onChange={(e) => setLinkedinUsername(e.target.value)}
              />
            </div>
            {/* Twitter Username input field */}
            <div className="mt-4">
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Twitter Username"
                value={twitterUsername}
                onChange={(e) => setTwitterUsername(e.target.value)}
              />
            </div>
            {/* Submit button */}
            <div className="mt-6">
              <button
                onClick={() => submitCard()}
                type="button"
                className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Add Your E-Card
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Right side: Preview */}
      <div className="w-full p-10 bg-gray-100 shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Preview</h1>
        <Card card={card} />
      </div>
    </div>
  );
};

export default AddCard;
