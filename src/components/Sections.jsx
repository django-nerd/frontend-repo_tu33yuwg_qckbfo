import { useEffect, useRef, useState } from 'react';

const avatar = 'https://cdn.jsdelivr.net/gh/hkokee/assets@main/redpanda-shai.png';

export function AskSection() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo Sobat Digital! Shai siap bantu kamu belajar aman di internet. Apa yang ingin kamu tanyakan?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.reply || 'Maaf, Shai kesulitan menjawab sekarang.' }]);
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Ups, jaringan bermasalah. Coba lagi ya!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-extrabold text-orange-700 mb-4">Tanya Shai</h2>
      <div className="rounded-2xl border border-orange-100 bg-white shadow-sm overflow-hidden">
        <div className="h-[380px] overflow-y-auto p-4 space-y-3 bg-orange-50/40">
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${m.role === 'assistant' ? '' : 'justify-end'}`}>
              {m.role === 'assistant' && (
                <img src={avatar} alt="Shai" className="w-8 h-8 rounded-full ring-2 ring-orange-300" />
              )}
              <div className={`${m.role === 'assistant' ? 'bg-white text-orange-900' : 'bg-orange-600 text-white'} px-4 py-2 rounded-2xl max-w-[80%] shadow`}>
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-orange-200" />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-start gap-3">
              <img src={avatar} alt="Shai" className="w-8 h-8 rounded-full ring-2 ring-orange-300" />
              <div className="px-4 py-2 rounded-2xl bg-white text-orange-900 animate-pulse">Shai sedang mengetik...</div>
            </div>
          )}
          <div ref={endRef} />
        </div>
        <div className="p-3 border-t border-orange-100 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Tulis pertanyaanmu di sini..."
            className="flex-1 px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button onClick={send} className="px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700">Kirim</button>
        </div>
      </div>
    </section>
  );
}

export function AdventureSection() {
  const scenarios = [
    {
      id: 1,
      narasi: 'Kamu dapat DM dari orang asing yang bilang kamu menang hadiah. Dia minta kamu klik link untuk klaim. Apa yang kamu lakukan?',
      pilihan: [
        { teks: 'Klik link!', benar: false, feedback: 'Wah, hati-hati! Itu bisa jadi link phishing (penipuan)!' },
        { teks: 'Jangan balas / Blokir', benar: true, feedback: 'Bagus! Itu tindakan yang paling aman.' },
      ],
    },
    {
      id: 2,
      narasi: 'Teman barumu di game minta nomor HP dan alamat rumah supaya bisa kirim hadiah.',
      pilihan: [
        { teks: 'Berikan saja, kan teman baik', benar: false, feedback: 'Jangan ya! Data pribadi tidak boleh dibagikan.' },
        { teks: 'Tolak dengan sopan', benar: true, feedback: 'Pintar! Jaga privasi itu penting.' },
      ],
    },
    {
      id: 3,
      narasi: 'Ada challenge viral menyuruh menyebarkan pesan ke 20 teman agar dapat hadiah.',
      pilihan: [
        { teks: 'Sebarkan cepat!', benar: false, feedback: 'Itu ciri hoax. Jangan sebar info belum jelas.' },
        { teks: 'Abaikan dan cek sumber', benar: true, feedback: 'Mantap! Cek dulu kebenarannya.' },
      ],
    },
  ];

  const [idx, setIdx] = useState(0);
  const curr = scenarios[idx];
  const [feedback, setFeedback] = useState('');

  const choose = (p) => {
    setFeedback(p.feedback + (p.benar ? ' ✅' : ' ⚠️'));
  };

  const next = () => {
    setFeedback('');
    setIdx((i) => (i + 1) % scenarios.length);
  };

  return (
    <section id="adventure" className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-orange-700 mb-4">Petualangan Shai</h2>
        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 grid sm:grid-cols-2 gap-6 items-center">
          <img src="https://cdn.jsdelivr.net/gh/hkokee/assets@main/shai-adventure.png" alt="Petualangan Shai" className="w-full rounded-xl shadow" />
          <div>
            <p className="text-orange-900 font-medium">{curr.narasi}</p>
            <div className="mt-4 grid gap-3">
              {curr.pilihan.map((p, i) => (
                <button key={i} onClick={() => choose(p)} className="text-left px-4 py-3 rounded-xl bg-white hover:bg-orange-100 border border-orange-200">
                  {p.teks}
                </button>
              ))}
            </div>
            {feedback && (
              <div className="mt-4 p-4 rounded-xl bg-white border border-orange-200 text-orange-900">{feedback}</div>
            )}
            <button onClick={next} className="mt-4 px-4 py-2 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700">Lanjut</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HoaxSection() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/checkHoax', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data.analysis || 'Maaf, Shai tidak bisa menganalisis sekarang.');
    } catch (e) {
      setResult('Ups, ada gangguan jaringan. Coba lagi ya!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hoax" className="bg-orange-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-orange-700 mb-4">Cek Pesan</h2>
        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <label className="block text-sm font-semibold text-orange-800 mb-2">Tempel pesan mencurigakan di sini</label>
          <textarea
            className="w-full h-40 p-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Tulis atau tempel pesan..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={analyze} disabled={loading} className="mt-4 px-5 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 disabled:opacity-60">
            {loading ? 'Menganalisis...' : 'Analisis Sekarang!'}
          </button>
          {result && (
            <div className="mt-4 p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-900">
              <strong>Hasil Analisis Shai:</strong> {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
