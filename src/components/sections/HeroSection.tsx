type Props = {
  color: string;
  logoUrl: string;

  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  setHeroTitle: (value: string) => void;
  setHeroDescription: (value: string) => void;
  setButtonText: (value: string) => void;

  isEditable?: boolean;
};

export default function HeroSection({
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  setHeroTitle,
  setHeroDescription,
  setButtonText,
  isEditable = true,
}: Props) {
  return (
    <div
      className="p-6 sm:p-10 lg:p-16"
      style={{ backgroundColor: color }}
    >

      {logoUrl && (
        <img
          src={logoUrl}
          alt="logo"
          className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-2xl mb-8 shadow-lg"
        />
      )}

      {/* HERO TITLE */}

      {isEditable ? (
        <input
          type="text"
          value={heroTitle}
          onChange={(e) =>
            setHeroTitle(e.target.value)
          }
          className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-transparent outline-none w-full text-white leading-tight"
        />
      ) : (
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {heroTitle}
        </h1>
      )}

      {/* HERO DESCRIPTION */}

      {isEditable ? (
        <textarea
          value={heroDescription}
          onChange={(e) =>
            setHeroDescription(
              e.target.value
            )
          }
          className="mt-6 text-base sm:text-lg lg:text-xl bg-transparent outline-none w-full resize-none text-white/90 leading-relaxed"
        />
      ) : (
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
          {heroDescription}
        </p>
      )}

      {/* BUTTON */}

      {isEditable ? (
        <input
          type="text"
          value={buttonText}
          onChange={(e) =>
            setButtonText(
              e.target.value
            )
          }
          className="mt-8 bg-white text-black px-6 py-4 rounded-xl outline-none font-medium shadow-lg w-full sm:w-fit"
        />
      ) : (
        <button className="mt-8 bg-white text-black px-6 py-4 rounded-xl font-medium shadow-lg">
          {buttonText}
        </button>
      )}
    </div>
  );
}