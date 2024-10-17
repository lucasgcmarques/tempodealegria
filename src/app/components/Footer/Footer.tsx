export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-white text-2xl">Kalypso</h2>
          <p className="mt-4">Contact: +91-8010200666</p>
          <p>Email: help@kalypso.com</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
