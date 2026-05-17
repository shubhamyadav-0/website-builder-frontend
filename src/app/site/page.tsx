"use client";

import { useEffect, useState } from "react";

import { getConfig } from "../../services/api";

import StartupTemplate from "../../components/templates/StartupTemplate";
import GymTemplate from "../../components/templates/GymTemplate";
import PortfolioTemplate from "../../components/templates/PortfolioTemplate";

type Feature = {
  title: string;
  description: string;
};

type WebsiteConfig = {
  companyName: string;

  color: string;

  logoUrl: string;

  heroTitle: string;

  heroDescription: string;

  buttonText: string;

  template: string;

  sections: string[];

  features: Feature[];
};

export default function SitePage() {
  const [websiteConfig, setWebsiteConfig] = useState<WebsiteConfig | null>(
    null,
  );

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const data = await getConfig();

        setWebsiteConfig({
          companyName: data.company_name || "",

          color: data.theme_color || "#000000",

          logoUrl: data.logo_url || "",

          heroTitle: data.hero_title || "",

          heroDescription: data.hero_description || "",

          buttonText: data.button_text || "",

          template: data.template || "startup",

          sections: data.sections || ["hero"],

          features: data.features || [],
        });
      } catch (error) {
        console.error("Error loading website:", error);
      }
    };

    fetchWebsite();
  }, []);

  if (!websiteConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Website...
      </div>
    );
  }

  const commonProps = {
    companyName: websiteConfig.companyName,

    color: websiteConfig.color,

    logoUrl: websiteConfig.logoUrl,

    heroTitle: websiteConfig.heroTitle,

    heroDescription: websiteConfig.heroDescription,

    buttonText: websiteConfig.buttonText,

    sections: websiteConfig.sections,

    features: websiteConfig.features,
    isEditable: false,

    setFeatures: () => {},

    setHeroTitle: () => {},

    setHeroDescription: () => {},

    setButtonText: () => {},

    setCompanyName: () => {},
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {websiteConfig.template === "startup" && (
          <StartupTemplate {...commonProps} />
        )}

        {websiteConfig.template === "gym" && <GymTemplate {...commonProps} />}

        {websiteConfig.template === "portfolio" && (
          <PortfolioTemplate {...commonProps} />
        )}
      </div>
    </div>
  );
}
