type ConfigFormProps = {
  companyName: string;
  setCompanyName: (value: string) => void;

  color: string;
  setColor: (value: string) => void;

  logoUrl: string;
  setLogoUrl: (value: string) => void;

  heroTitle: string;
  setHeroTitle: (value: string) => void;

  heroDescription: string;
  setHeroDescription: (value: string) => void;

  buttonText: string;
  setButtonText: (value: string) => void;

  template: string;
  setTemplate: (value: string) => void;

  handleSave: () => void;
};

export default function ConfigForm({
  companyName,
  setCompanyName,
  color,
  setColor,
  logoUrl,
  setLogoUrl,
  heroTitle,
  setHeroTitle,
  heroDescription,
  setHeroDescription,
  buttonText,
  setButtonText,
  template,
  setTemplate,
  handleSave,
}: ConfigFormProps) {
  return (
    <div className="w-full md:w-1/2 p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">
        Customize Website
      </h2>

      <input
        type="text"
        placeholder="Company Name"
        className="w-full p-2 mb-4 border rounded"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="color"
        className="w-full h-12 mb-4"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Logo URL"
        className="w-full p-2 mb-4 border rounded"
        value={logoUrl}
        onChange={(e) => setLogoUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Hero Title"
        className="w-full p-2 mb-4 border rounded"
        value={heroTitle}
        onChange={(e) => setHeroTitle(e.target.value)}
      />

      <textarea
        placeholder="Hero Description"
        className="w-full p-2 mb-4 border rounded"
        value={heroDescription}
        onChange={(e) => setHeroDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Button Text"
        className="w-full p-2 mb-4 border rounded"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
      />

      <select
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="startup">Startup</option>
        <option value="gym">Gym</option>
        <option value="portfolio">Portfolio</option>
      </select>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Configuration
      </button>
    </div>
  );
}