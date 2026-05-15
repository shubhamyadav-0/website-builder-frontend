import Navbar from "../Navbar";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";

type Props = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  sections: string[];

  setHeroTitle: (value: string) => void;
  setHeroDescription: (value: string) => void;
  setButtonText: (value: string) => void;
  setCompanyName: (value: string) => void;
};

export default function PortfolioTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  sections,
  setHeroTitle,
  setHeroDescription,
  setButtonText,
  setCompanyName,
}: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

      <Navbar
        companyName={companyName}
        setCompanyName={setCompanyName}
      />

     {sections.map((section) => {
  if (section === "hero") {
    return (
      <HeroSection
        key="hero"
        color={color}
        logoUrl={logoUrl}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        buttonText={buttonText}
        setHeroTitle={setHeroTitle}
        setHeroDescription={setHeroDescription}
        setButtonText={setButtonText}
      />
    );
  }

  if (section === "features") {
    return (
      <FeaturesSection key="features" />
    );
  }

  return null;
})}
    </div>
  );
}