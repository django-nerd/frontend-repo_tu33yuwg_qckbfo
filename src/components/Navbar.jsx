import { Home, MessageCircle, ShieldCheck, Swords } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://cdn.jsdelivr.net/gh/hkokee/assets@main/redpanda-shai.png"
            alt="Shai Panda Merah"
            className="w-9 h-9 rounded-full ring-2 ring-orange-300"
          />
          <div>
            <p className="font-extrabold text-xl text-orange-600 leading-none">Shai</p>
            <p className="text-xs text-orange-500/80">AI Guardian</p>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#home" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-orange-50 text-orange-700"><Home size={16}/> Beranda</a>
          <a href="#ask" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-orange-50 text-orange-700"><MessageCircle size={16}/> Tanya Shai</a>
          <a href="#adventure" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-orange-50 text-orange-700"><Swords size={16}/> Petualangan</a>
          <a href="#hoax" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-orange-50 text-orange-700"><ShieldCheck size={16}/> Cek Pesan</a>
        </nav>
        <a href="#ask" className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 active:scale-[0.98] transition">Mulai</a>
      </div>
    </header>
  );
}
