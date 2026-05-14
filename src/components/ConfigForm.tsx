type ConfigFormProps = {
  color: string;
  setColor: (value: string) => void;

  logoUrl: string;
  setLogoUrl: (value: string) => void;

  template: string;
  setTemplate: (value: string) => void;

  handleSave: () => void;
};

export default function ConfigForm({
  color,
  setColor,
  logoUrl,
  setLogoUrl,
  template,
  setTemplate,
  handleSave,
}: ConfigFormProps) {
return (
  <div className="h-full lg:min-h-screen bg-white border-r shadow-sm p-5 sm:p-6">
    
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Website Settings
    </h2>

    {/* COLOR PICKER */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Theme Color
      </label>

      <input
        type="color"
        className="w-full h-12 rounded cursor-pointer border"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>

    {/* FILE UPLOAD */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Upload Logo
      </label>

      <input
        type="file"
        accept="image/*"
        className="w-full border rounded-lg p-2 bg-gray-50"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
              setLogoUrl(reader.result as string);
            };

            reader.readAsDataURL(file);
          }
        }}
      />
    </div>

    {/* TEMPLATE SELECT */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Choose Template
      </label>

      <select
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="w-full border rounded-lg p-3 bg-white"
      >
        <option value="startup">Startup</option>
        <option value="gym">Gym</option>
        <option value="portfolio">Portfolio</option>
      </select>
    </div>

    {/* BUTTON */}
    <button
      onClick={handleSave}
      className="w-full bg-black hover:bg-gray-800 transition text-white py-3 rounded-xl font-semibold"
    >
      Publish Website
    </button>
  </div>
);
}
