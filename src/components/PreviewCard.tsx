import StartupTemplate from "./templates/StartupTemplate";
import GymTemplate from "./templates/GymTemplate";
import PortfolioTemplate from "./templates/PortfolioTemplate";

type PreviewProps = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  template: string;

  setHeroTitle: (value: string) => void;
  setHeroDescription: (value: string) => void;
  setButtonText: (value: string) => void;
  setCompanyName: (value: string) => void;
};

export default function PreviewCard({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  template,
  setHeroTitle,
  setHeroDescription,
  setButtonText,
  setCompanyName,
}: PreviewProps) {

  if (template === "startup") {
    return (
  <StartupTemplate
  companyName={companyName}
  color={color}
  heroTitle={heroTitle}
  heroDescription={heroDescription}
  buttonText={buttonText}
  logoUrl={logoUrl}
  setHeroTitle={setHeroTitle}
  setHeroDescription={setHeroDescription}
  setButtonText={setButtonText}
  setCompanyName={setCompanyName}
/>
    );
  }

  if (template === "gym") {
    return (
      <GymTemplate
        companyName={companyName}
        color={color}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        buttonText={buttonText}
        logoUrl={logoUrl}
        setHeroTitle={setHeroTitle}
        setCompanyName={setCompanyName}
      />
    );
  }

  if (template === "portfolio") {
    return (
      <PortfolioTemplate
        companyName={companyName}
        color={color}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        buttonText={buttonText}
        logoUrl={logoUrl}
        setHeroTitle={setHeroTitle}
        setCompanyName={setCompanyName}
      />
    );
  }

  return (
    <div>
      Template not found
    </div>
  );
}