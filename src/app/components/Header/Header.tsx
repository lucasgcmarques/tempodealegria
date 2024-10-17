import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-transparent py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="#">
            <Image
              src="/images/tempo_de_alegria.png"
              width={200}
              height={100}
              alt="Tempo de Alegria"
            />
          </a>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600">
              Sobre nós
            </a>
            <a href="#" className="text-gray-600">
              Descubra
            </a>
            <a href="#" className="text-gray-600">
              Galeria
            </a>
            <a href="#" className="text-gray-600">
              Contato
            </a>
          </nav>
        </div>
        <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
          Fale conosco
        </button>
      </div>
    </header>
  );
}
