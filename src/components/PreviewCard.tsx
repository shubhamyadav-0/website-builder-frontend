type PreviewProps = {
  companyName: string;
  color: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
};

export default function PreviewCard({
  companyName,
  color,
  logoUrl,
  heroTitle,
  heroDescription,
  buttonText,
}: PreviewProps) {
  return (
    <div className="border rounded shadow p-6">
      <div
        className="flex items-center gap-4 p-4"
        style={{ backgroundColor: color }}
      >
        {logoUrl && (
          <img src={logoUrl} alt="logo" className="h-10" />
        )}

        <h1 className="text-white text-xl font-bold">
          {companyName || "Your Company"}
        </h1>
      </div>

      <div className="p-4">
        <h1 className="text-3xl font-bold mt-4">
          {heroTitle || "Welcome"}
        </h1>

        <p className="mt-2 text-gray-700">
          {heroDescription || "Dynamic website preview"}
        </p>

        <button
          className="mt-4 px-4 py-2 text-white rounded"
          style={{ backgroundColor: color }}
        >
          {buttonText || "Get Started"}
        </button>
      </div>
    </div>
  );
}