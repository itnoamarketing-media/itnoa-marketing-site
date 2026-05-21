'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Content Creation", desc: "Cinematic short-form content built to stop the scroll and make your business look impossible to ignore." },
  { title: "Paid Advertising", desc: "Campaigns built around attention, offer clarity, and qualified lead flow — not random boosted posts." },
  { title: "Brand Positioning", desc: "Make your business feel premium before the customer ever speaks to you." },
  { title: "Social Media Management", desc: "Consistent posting, clean messaging, and a presence that makes your brand feel active daily." },
  { title: "Video Production", desc: "Modern visuals, reels, ads, and edits that separate you from low-level competitors." },
  { title: "Local Growth Strategy", desc: "Built for high-value California businesses that need visibility, not vanity metrics." },
];

const typeWords = ["attention", "clients", "visibility", "momentum"];

export default function ITNOAHomepage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    const word = typeWords[wordIndex];
    let i = 0;
    const typing = setInterval(() => {
      setTypedWord(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(typing);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % typeWords.length);
          setTypedWord("");
        }, 1200);
      }
    }, 90);
    return () => clearInterval(typing);
  }, [wordIndex]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/65 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/itnoa-horizontal.png" alt="ITNOA Marketing" className="h-10 md:h-12 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/65">
            <a href="#problem" className="hover:text-white transition">Problem</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#showcase" className="hover:text-white transition">Video</a>
            <a href="#why" className="hover:text-white transition">Why ITNOA</a>
            <a href="#cta" className="bg-blue-500 hover:bg-blue-400 transition px-5 py-2 rounded-full text-white font-medium shadow-lg shadow-blue-500/25">Book Call</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-25">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.16),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.35),#000_90%)]" />
        <motion.div className="absolute top-28 right-10 md:right-24 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full" animate={{ y: [0, 30, 0], opacity: [0.35, 0.7, 0.35] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-24 left-10 md:left-24 w-80 h-80 bg-white/10 blur-[120px] rounded-full" animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 border border-blue-500/25 bg-blue-500/10 px-4 py-2 rounded-full text-sm text-blue-200 mb-8 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span></span>
              California-Based Marketing Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">Your Competitors Are Taking Clients You Should Already Own.</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">Most businesses don’t lose because they’re bad. They lose because nobody sees them before the competition.</p>
            <div className="text-2xl md:text-3xl font-semibold mb-10 text-white/90">We build <span className="text-blue-400">{typedWord}</span><span className="text-blue-400 animate-pulse">|</span></div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="group bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-blue-500/25 text-center">Book Strategy Call<span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span></a>
              <a href="#showcase" className="border border-white/20 hover:border-blue-400/50 hover:bg-white/5 transition px-8 py-4 rounded-full text-lg text-white/80 text-center">Add Your Videos Here</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-500/20 blur-[90px] rounded-full" />
            <motion.img src="/itnoa-icon.png" alt="ITNOA icon" className="relative w-[420px] mx-auto drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]" animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute top-8 -left-6 bg-white/10 border border-white/15 backdrop-blur-xl rounded-3xl p-5 shadow-2xl" animate={{ y: [0, 16, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><div className="text-sm text-white/50">Problem</div><div className="text-xl font-bold">Invisible Online</div></motion.div>
            <motion.div className="absolute bottom-12 -right-4 bg-blue-500/15 border border-blue-400/20 backdrop-blur-xl rounded-3xl p-5 shadow-2xl shadow-blue-500/10" animate={{ y: [0, -18, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><div className="text-sm text-blue-200/70">Result</div><div className="text-xl font-bold">More Attention</div></motion.div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="py-28 px-6 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">The Problem</div><h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Good Businesses Are Losing To Better Marketing.</h2></motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-6 text-white/70 text-lg leading-relaxed"><p>You already provide a solid service.</p><p>But if your business looks outdated, invisible, or inconsistent online, customers assume your competitors are the better option.</p><p className="text-white text-2xl font-semibold">Even when they’re not.</p></motion.div>
        </div>
      </section>

      <section className="py-28 px-6 bg-gradient-to-b from-[#050505] to-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,140,255,0.14),transparent_35%)]" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Attention Wins</div><h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">Attention Is The New Currency.</h2><p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-14">Most companies waste money on random ads, inconsistent posting, and agencies with no real positioning strategy. Meanwhile, their competitors dominate attention daily.</p>
          <div className="grid md:grid-cols-3 gap-6">{["Weak Branding", "Inconsistent Content", "Invisible Online Presence"].map((item, index) => (<motion.div key={item} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }} whileHover={{ y: -10, scale: 1.02 }} className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition"><div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6 group-hover:bg-blue-500/20 transition" /><div className="text-2xl font-semibold text-left">{item}</div></motion.div>))}</div>
        </div>
      </section>

      <section id="services" className="py-28 px-6"><div className="max-w-7xl mx-auto"><div className="mb-16 text-center"><div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Services</div><h2 className="text-4xl md:text-6xl font-bold">Marketing People Actually Remember.</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (<motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} whileHover={{ y: -12 }} className="group relative bg-white/[0.045] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition"><div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_45%)]" /><div className="relative z-10"><h3 className="text-2xl font-semibold mb-4">{service.title}</h3><p className="text-white/70 leading-relaxed">{service.desc}</p></div></motion.div>))}</div></div></section>

      <section id="showcase" className="py-28 px-6 bg-[#050505] border-y border-white/10"><div className="max-w-7xl mx-auto"><div className="mb-16 text-center"><div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Video Ready</div><h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Your Videos Go Here.</h2><p className="text-white/70 text-lg max-w-3xl mx-auto">Hero videos, reels, client work, cinematic edits, interviews, ads, and proof clips can all be dropped into these blocks.</p></div><div className="grid lg:grid-cols-2 gap-8">{["Hero Reel", "Client Showcase"].map((label) => (<motion.div key={label} whileHover={{ scale: 1.02 }} className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black relative group"><video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"><source src="/showcase-video.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /><div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm">{label}</div></motion.div>))}</div></div></section>

      <section id="why" className="py-28 px-6"><div className="max-w-6xl mx-auto text-center"><div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Why ITNOA</div><h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">Built For Businesses That Expect More.</h2><div className="grid md:grid-cols-2 gap-8 text-left mt-16">{["Modern premium positioning", "Fast communication", "Content built for attention", "California market understanding", "Conversion-focused strategy", "Visual identity that stands out"].map((point, index) => (<motion.div key={point} initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.07 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 text-lg text-white/80 hover:border-blue-400/35 hover:bg-blue-500/5 transition"><span className="text-blue-400 mr-2">✓</span>{point}</motion.div>))}</div></div></section>

      <section id="cta" className="py-32 px-6 border-t border-white/10 text-center relative overflow-hidden bg-gradient-to-b from-black to-[#050505]"><motion.div className="absolute inset-0 bg-blue-500/10 blur-[180px]" animate={{ opacity: [0.25, 0.65, 0.25] }} transition={{ duration: 5, repeat: Infinity }} /><div className="relative z-10 max-w-5xl mx-auto"><h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">If Your Business Looks Invisible Online, <span className="text-blue-400">Your Competitors Already Won.</span></h2><p className="text-white/70 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">Let’s build a brand people notice immediately.</p><a href="mailto:hello@itnoamarketing.com" className="inline-block bg-blue-500 hover:bg-blue-400 transition px-10 py-5 rounded-full text-xl font-semibold shadow-2xl shadow-blue-500/25">Start The Conversation</a></div></section>
    </div>
  );
}
