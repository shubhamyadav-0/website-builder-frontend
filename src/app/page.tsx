"use client";

import { useEffect, useState } from "react";
import PreviewCard from "../components/PreviewCard";
import { saveConfig, getConfig } from "../services/api";
import ConfigForm from "../components/ConfigForm";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [color, setColor] = useState("#000000");
  const [logoUrl, setLogoUrl] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [template, setTemplate] = useState("startup");

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
          setTemplate(data.template || "startup");
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
        template,
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
      <ConfigForm
        companyName={companyName}
        setCompanyName={setCompanyName}
        color={color}
        setColor={setColor}
        logoUrl={logoUrl}
        setLogoUrl={setLogoUrl}
        heroTitle={heroTitle}
        setHeroTitle={setHeroTitle}
        heroDescription={heroDescription}
        setHeroDescription={setHeroDescription}
        buttonText={buttonText}
        setButtonText={setButtonText}
        handleSave={handleSave}
        template={template}
        setTemplate={setTemplate}
      />

      {/* RIGHT SIDE - PREVIEW */}
      <div className="w-full md:w-1/2 p-6">
        <PreviewCard
          companyName={companyName}
          color={color}
          logoUrl={logoUrl}
          heroTitle={heroTitle}
          heroDescription={heroDescription}
          buttonText={buttonText}
          template={template}
        />
      </div>
    </div>
  );
}
