import Image from "next/image";

const features = [
  {
    title: "Healthy Food",
    description: "Lorem ipsum dolor sit amet...",
    icon: "/icons/plano-de-saude.png",
  },
  {
    title: "Education",
    description: "Lorem ipsum dolor sit amet...",
    icon: "/icons/abra-o-livro.png",
  },
  {
    title: "Pure Water",
    description: "Lorem ipsum dolor sit amet...",
    icon: "/icons/ajudando.png",
  },
  {
    title: "Medical",
    description: "Lorem ipsum dolor sit amet...",
    icon: "/icons/ajudando.png",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto flex justify-center gap-6">
        {features.map((feature, index) => (
          <div key={index} className="max-w-48 bg-green-50 space-y-2">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
            />

            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
