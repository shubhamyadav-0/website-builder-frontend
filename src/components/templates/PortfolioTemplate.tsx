type Props = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  setHeroTitle: (value: string) => void;
};

export default function PortfolioTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  setHeroTitle,
}: Props) {
  return (
    <div className="border rounded-xl p-10 bg-white shadow-lg">

      {logoUrl && (
        <img
          src={logoUrl}
          alt="logo"
          className="h-20 w-20 object-cover rounded-lg mb-6"
        />
      )}

      <h1
        className="text-5xl font-light"
        style={{ color }}
      >
        {companyName}
      </h1>

      <div
        className="mt-8 border-l-4 pl-6"
        style={{ borderColor: color }}
      >

        <input
          type="text"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          className="text-3xl font-semibold bg-transparent outline-none w-full"
        />

        <p className="mt-4 text-gray-600">
          {heroDescription}
        </p>
      </div>

      <button
        className="mt-8 px-6 py-3 rounded-lg text-white"
        style={{ backgroundColor: color }}
      >
        {buttonText}
      </button>
    </div>
  );
}