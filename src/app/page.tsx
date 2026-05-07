"use client";

import { useEffect, useState } from "react";

import PreviewCard from "../components/PreviewCard";
import { saveConfig, getConfig } from "../services/api";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [color, setColor] = useState("#000000");
  const [logoUrl, setLogoUrl] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const data = await getConfig();

        if (data) {
          setCompanyName(data.company_name || "");
          setColor(data.theme_color || "#000000");
          setLogoUrl(data.logo_url || "");
          setHeroTitle(data.hero_title || "");
          setHeroDescription(data.hero_description || "");
          setButtonText(data.button_text || "");
        }
      } catch (error) {
        console.error("Error fetching config:", error);
      }
    };

    fetchConfig();
  }, []);

  const handleSave = async () => {
    try {
      const data = await saveConfig({
        companyName,
        color,
        logoUrl,
        heroTitle,
        heroDescription,
        buttonText,
      });

      console.log("Saved:", data);

      alert("Data saved successfully");
    } catch (error) {
      console.error("Error:", error);

      alert("Error saving data");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE - FORM */}
      <div className="w-full md:w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">
          Customize Website
        </h2>

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

        <input
          type="text"
          placeholder="Hero Title"
          className="w-full p-2 mb-4 border rounded"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
        />

        <textarea
          placeholder="Hero Description"
          className="w-full p-2 mb-4 border rounded"
          value={heroDescription}
          onChange={(e) => setHeroDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Button Text"
          className="w-full p-2 mb-4 border rounded"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Configuration
        </button>
      </div>

      {/* RIGHT SIDE - PREVIEW */}
      <div className="w-full md:w-1/2 p-6">
        <PreviewCard
          companyName={companyName}
          color={color}
          logoUrl={logoUrl}
          heroTitle={heroTitle}
          heroDescription={heroDescription}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}