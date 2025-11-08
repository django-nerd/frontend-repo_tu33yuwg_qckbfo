import { MessageCircle, Swords, ShieldCheck } from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Tanya Shai',
      desc: 'Chat langsung dengan Shai untuk tanya apa pun soal keamanan digital.',
      icon: MessageCircle,
      href: '#ask',
    },
    {
      title: 'Petualangan Shai',
      desc: 'Ikuti skenario seru seperti komik interaktif dan pilih tindakan yang aman.',
      icon: Swords,
      href: '#adventure',
    },
    {
      title: 'Cek Pesan',
      desc: 'Tempel pesan mencurigakan dan minta Shai analisis tingkat bahayanya.',
      icon: ShieldCheck,
      href: '#hoax',
    },
  ];

  return (
    <section className="bg-orange-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon, href }) => (
            <a key={title} href={href} className="group rounded-2xl bg-white border border-orange-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-orange-700">{title}</h3>
              <p className="text-sm text-orange-800/80 mt-2">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
