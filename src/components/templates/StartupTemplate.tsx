import Navbar from "../Navbar";
import HeroSection from "../sections/HeroSection";

type Props = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  setHeroTitle: (value: string) => void;
  setHeroDescription: (value: string) => void;
  setButtonText: (value: string) => void;
  setCompanyName: (value: string) => void;
};

export default function StartupTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
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

      <HeroSection
        color={color}
        logoUrl={logoUrl}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        buttonText={buttonText}
        setHeroTitle={setHeroTitle}
        setHeroDescription={setHeroDescription}
        setButtonText={setButtonText}
      />
    </div>
  );
}