type Feature = {
  title: string;
  description: string;
};

type Props = {
  features: Feature[];

  setFeatures: React.Dispatch<
    React.SetStateAction<Feature[]>
  >;
};

export default function FeaturesSection({
  features,
  setFeatures,
}: Props) {

  const updateFeature = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {

    const updatedFeatures = [...features];

    updatedFeatures[index][field] = value;

    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([
      ...features,
      {
        title: "New Feature",
        description:
          "Describe your feature here.",
      },
    ]);
  };

  const removeFeature = (index: number) => {
    const updatedFeatures =
      features.filter(
        (_, i) => i !== index
      );

    setFeatures(updatedFeatures);
  };

  return (
    <div className="bg-white p-6 sm:p-10 lg:p-16 border-t">

      <div className="flex items-center justify-between gap-4 flex-wrap">

        <h2 className="text-3xl sm:text-4xl font-bold">
          Features
        </h2>

        <button
          onClick={addFeature}
          className="bg-black text-white px-5 py-2 rounded-xl"
        >
          Add Feature
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md border bg-gray-50"
          >

            <input
              type="text"
              value={feature.title}
              onChange={(e) =>
                updateFeature(
                  index,
                  "title",
                  e.target.value
                )
              }
              className="text-xl font-semibold w-full outline-none bg-transparent"
            />

            <textarea
              value={feature.description}
              onChange={(e) =>
                updateFeature(
                  index,
                  "description",
                  e.target.value
                )
              }
              className="mt-3 text-gray-600 w-full outline-none resize-none bg-transparent"
            />

            <button
              onClick={() =>
                removeFeature(index)
              }
              className="mt-4 bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}