const statistics = [
  { value: "16,000kg", description: "We donate over 16 tons of food" },
  {
    value: "2mln l.",
    description: "Every year, we clean over 2,000,000 liters of water",
  },
  { value: "1,694", description: "Volunteers help realize our help" },
  { value: "830", description: "Volunteer teachers spread education" },
];

export default function StatisticsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statistics.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
