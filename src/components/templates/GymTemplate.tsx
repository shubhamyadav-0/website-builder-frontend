type Props = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;

  setHeroTitle: (value: string) => void;
};

export default function GymTemplate({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
  setHeroTitle,
}: Props) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-xl text-white p-10"
      style={{ backgroundColor: color }}
    >

      {logoUrl && (
        <img
          src={logoUrl}
          alt="logo"
          className="h-20 w-20 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-5xl font-extrabold uppercase">
        {companyName}
      </h1>

      <p className="mt-2 text-lg tracking-widest">
        FITNESS • STRENGTH • POWER
      </p>

      <input
        type="text"
        value={heroTitle}
        onChange={(e) => setHeroTitle(e.target.value)}
        className="text-4xl font-bold mt-8 bg-transparent outline-none w-full"
      />

      <p className="mt-4 text-lg">
        {heroDescription}
      </p>

      <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
}