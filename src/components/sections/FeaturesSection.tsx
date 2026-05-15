export default function FeaturesSection() {
  return (
    <div className="bg-white p-6 sm:p-10 lg:p-16 border-t">

      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold">
            Fast Performance
          </h3>

          <p className="mt-3 text-gray-600">
            Optimized for speed and modern web experience.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold">
            Responsive Design
          </h3>

          <p className="mt-3 text-gray-600">
            Looks perfect on mobile, tablet, and desktop.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold">
            Easy Customization
          </h3>

          <p className="mt-3 text-gray-600">
            Edit content directly from the live preview.
          </p>
        </div>

      </div>
    </div>
  );
}