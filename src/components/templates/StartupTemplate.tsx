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
}: Props) {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden">
      <div className="p-10 text-white" style={{ backgroundColor: color }}>
        {logoUrl && (
          <img
            src={logoUrl}
            alt="logo"
            className="h-20 w-20 object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-5xl font-bold">{companyName}</h1>

        <input
          type="text"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          className="text-3xl mt-6 bg-transparent outline-none w-full font-semibold"
        />

        <textarea
          value={heroDescription}
          onChange={(e) => setHeroDescription(e.target.value)}
          className="mt-4 text-lg bg-transparent outline-none w-full resize-none"
        />
        <input
          type="text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          className="bg-white text-black px-6 py-3 rounded-lg mt-6 outline-none"
        />
      </div>
    </div>
  );
}
