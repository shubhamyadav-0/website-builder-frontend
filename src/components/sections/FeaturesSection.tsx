type Feature = {
  title: string;
  description: string;
};

type Props = {
  features: Feature[];

  setFeatures: React.Dispatch<
    React.SetStateAction<Feature[]>
  >;

  isEditable?: boolean;
};

export default function FeaturesSection({
  features,
  setFeatures,
  isEditable = true,
}: Props) {

  return (
    <div className="p-6 sm:p-10 bg-white">

      <h2 className="text-3xl font-bold mb-8">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {features.map(
          (feature, index) => (

            <div
              key={index}
              className="p-6 rounded-2xl border shadow-sm"
            >

              {isEditable ? (
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => {

                    const updated =
                      [...features];

                    updated[index].title =
                      e.target.value;

                    setFeatures(
                      updated
                    );
                  }}
                  className="text-xl font-bold w-full outline-none"
                />
              ) : (
                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>
              )}

              {isEditable ? (
                <textarea
                  value={
                    feature.description
                  }
                  onChange={(e) => {

                    const updated =
                      [...features];

                    updated[index].description =
                      e.target.value;

                    setFeatures(
                      updated
                    );
                  }}
                  className="mt-4 w-full outline-none resize-none"
                />
              ) : (
                <p className="mt-4 text-gray-600">
                  {
                    feature.description
                  }
                </p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}