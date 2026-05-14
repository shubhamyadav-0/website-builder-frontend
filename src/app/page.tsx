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

  useEffect(() => {
    localStorage.setItem(
      "websiteDraft",
      JSON.stringify({
        companyName,
        heroTitle,
        heroDescription,
        buttonText,
        color,
        template,
      }),
    );
  }, [companyName, heroTitle, heroDescription, buttonText, color, template]);

  useEffect(() => {
    const savedDraft = localStorage.getItem("websiteDraft");

    if (savedDraft) {
      const draft = JSON.parse(savedDraft);

      setCompanyName(draft.companyName || "");
      setHeroTitle(draft.heroTitle || "");
      setHeroDescription(draft.heroDescription || "");
      setButtonText(draft.buttonText || "");
      setColor(draft.color || "#000000");
      setTemplate(draft.template || "startup");
    }
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
  <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
    
    {/* LEFT SIDEBAR */}
    <div className="w-full lg:w-[320px]">
      <ConfigForm
        color={color}
        setColor={setColor}
        logoUrl={logoUrl}
        setLogoUrl={setLogoUrl}
        template={template}
        setTemplate={setTemplate}
        handleSave={handleSave}
      />
    </div>

    {/* RIGHT PREVIEW AREA */}
    <div className="flex-1 flex items-start justify-center p-4 sm:p-6 lg:p-10 overflow-auto">
      <div className="w-full max-w-6xl">
        <PreviewCard
          companyName={companyName}
          color={color}
          logoUrl={logoUrl}
          heroTitle={heroTitle}
          heroDescription={heroDescription}
          buttonText={buttonText}
          template={template}
          setHeroTitle={setHeroTitle}
          setHeroDescription={setHeroDescription}
          setButtonText={setButtonText}
          setCompanyName={setCompanyName}
        />
      </div>
    </div>
  </div>
);
}
