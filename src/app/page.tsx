import NavigationMenu from "../components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between animated-gradient text-center p-8">
      {/* Navigation */}
      <header className="flex justify-between w-full max-w-4xl py-2">
        <NavigationMenu />
      </header>

      <main className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-64 h-64 rounded-t-full overflow-hidden shadow-xl">
            <img
              src="../../public/vv.png"
              alt="Beautiful Wife"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-[4px] border-white rounded-t-full"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">NOSIKOVA VERONIKA</h1>
      </main>

      <footer className="py">
        <a className="text-sm text-white">©2025 Nosikow's Family</a>
      </footer>
    </div>
  );
}
