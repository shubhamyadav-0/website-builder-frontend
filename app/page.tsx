"use client";

import { useState } from "react";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [color, setColor] = useState("#000000");
  const [logoUrl, setLogoUrl] = useState("");

  //  NEW FUNCTION (API CALL)
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          color,
          logoUrl,
        }),
      });

      const data = await response.json();
      console.log("Saved:", data);

      alert("Data saved successfully ");
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data ");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDE - FORM */}
      <div className="w-full md:w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Customize Website</h2>

        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 mb-4 border rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <input
          type="color"
          className="w-full h-12 mb-4"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Logo URL"
          className="w-full p-2 mb-4 border rounded"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />

        {/*  SAVE BUTTON */}
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Configuration
        </button>
      </div>

      {/* RIGHT SIDE - PREVIEW */}
      <div className="w-full md:w-1/2 p-6">
        <div className="border rounded shadow p-6">
          
          <div
            className="flex items-center gap-4 p-4"
            style={{ backgroundColor: color }}
          >
            {logoUrl && <img src={logoUrl} alt="logo" className="h-10" />}
            <h1 className="text-white text-xl font-bold">
              {companyName || "Your Company"}
            </h1>
          </div>

          <div className="p-4">
            <p>This is your dynamic website preview 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
}