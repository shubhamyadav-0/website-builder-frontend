import Navbar from "../Navbar";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  companyName: string;
  color: string;
  logoUrl: string;

  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  sections: string[];

  features: Feature[];

  setFeatures: React.Dispatch<
    React.SetStateAction<Feature[]>
  >;

  setHeroTitle: (value: string) => void;
  setHeroDescription: (
    value: string
  ) => void;

  setButtonText: (
    value: string
  ) => void;

  setCompanyName: (
    value: string
  ) => void;

  isEditable?: boolean;
};

export default function StartupTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  sections,
  features,
  setFeatures,
  setHeroTitle,
  setHeroDescription,
  setButtonText,
  setCompanyName,
  isEditable = true,
}: Props) {

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

      <Navbar
        companyName={companyName}
        setCompanyName={
          setCompanyName
        }
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
              isEditable={isEditable}
            />
          );
        }

        if (section === "features") {

          return (
           <FeaturesSection
              key="features"
              features={features}
              setFeatures={setFeatures}
              isEditable={isEditable}
            />
          );
        }

        return null;
      })}
    </div>
  );
}