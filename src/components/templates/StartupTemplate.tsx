type Props = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  setHeroTitle: (value: string) => void;
};

export default function StartupTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  setHeroTitle,
}: Props) {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden">
      <div
        className="p-10 text-white"
        style={{ backgroundColor: color }}
      >

        {logoUrl && (
          <img
            src={logoUrl}
            alt="logo"
            className="h-20 w-20 object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-5xl font-bold">
          {companyName}
        </h1>

        <h2 className="text-3xl mt-6">
          {heroTitle}
        </h2>

        <p className="mt-4 text-lg">
          {heroDescription}
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-lg mt-6">
          {buttonText}
        </button>
      </div>
    </div>
  );
}