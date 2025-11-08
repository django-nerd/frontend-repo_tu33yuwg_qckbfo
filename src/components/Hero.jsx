import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 sm:pt-24 pb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-orange-700 drop-shadow-sm">Selamat Datang, Pahlawan Digital!</h1>
        <p className="mt-4 text-lg sm:text-xl text-orange-800/80 max-w-2xl">
          Ayo belajar tetap aman di internet bersama Shai! Seru, interaktif, dan penuh tips cerdas.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#ask" className="px-5 py-3 rounded-full bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 transition">Tanya Shai</a>
          <a href="#adventure" className="px-5 py-3 rounded-full bg-white text-orange-700 font-semibold border border-orange-200 hover:bg-orange-50 transition">Petualangan Shai</a>
          <a href="#hoax" className="px-5 py-3 rounded-full bg-white text-orange-700 font-semibold border border-orange-200 hover:bg-orange-50 transition">Cek Pesan</a>
        </div>
      </div>
    </section>
  );
}
