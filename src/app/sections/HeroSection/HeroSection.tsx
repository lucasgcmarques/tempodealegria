export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto flex items-center h-[500px]">
        <div>
          <h1 className="text-5xl font-bold">
            Educação com amor <br />{" "}
            <span className="text-yellow-600"> transformando</span> o amanhã.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Every five seconds one child dies in Africa due to malnutrition
            <br /> and related diseases, and you can help!
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-yellow-600 text-white px-6 py-3 ">
              Faça parte
            </button>
            <button className="border border-yellow-600 text-yellow-600 px-6 py-3">
              Descubra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
