import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, PenTool, MessageSquare, Download, ChevronRight, Monitor, Layout, Zap, ExternalLink, Star, CheckCircle } from 'lucide-react';
import './index.css'

// --- CUSTOM SCROLL REVEAL COMPONENT ---
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- PROJECT DATA ---
const projects = [
  {
    id: "01",
    title: "Institution Visual Identity System",
    client: "STKIP Muhammadiyah Pagar Alam",
    desc: "Merancang sistem identitas visual institusi pendidikan melalui desain publikasi, template digital, dokumentasi visual, dan penguatan branding media sosial.",
    role: "Visual Designer & Publication Specialist",
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Premiere Pro"
    ],
    impact: "Meningkatkan konsistensi visual publikasi institusi dan memperkuat citra digital kampus",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
    tag: "Visual Communication"
  },

  {
    id: "02",
    title: "Organization Profile Website",
    client: "Pemuda Muhammadiyah Pagar Alam",
    desc: "Mengembangkan website organisasi modern berbasis React dan Tailwind CSS dengan tampilan responsif, struktur modular, dan sistem publikasi yang mudah dikelola.",
    role: "Frontend Developer & UI Designer",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "VS Code"
    ],
    impact: "Meningkatkan profesionalitas digital organisasi dan memperluas akses informasi publik",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "#A855F7",
    tag: "Web Development"
  },

  {
    id: "03",
    title: "Digital Content Production System",
    client: "Institution & Community Publications",
    desc: "Memproduksi konten visual secara konsisten untuk kebutuhan publikasi digital: poster, dokumentasi foto, video cinematic, reels, dan media campaign.",
    role: "Creative Content Producer",
    tools: [
      "Photoshop",
      "Premiere Pro",
      "After Effects",
      "CapCut"
    ],
    impact: "Menghasilkan puluhan konten digital yang meningkatkan engagement dan kualitas branding visual",
    gradient: "from-orange-500/20 to-yellow-500/20",
    accent: "#F97316",
    tag: "Content Production"
  },

  {
    id: "04",
    title: "Legal Documentation Management System",
    client: "Kantor Notaris",
    desc: "Membangun sistem dokumentasi digital untuk administrasi legal melalui standardisasi file, template dokumen, dan workflow pengarsipan.",
    role: "Documentation System Coordinator",
    tools: [
      "Microsoft Excel",
      "Google Workspace",
      "Digital Archive System"
    ],
    impact: "Meningkatkan efisiensi administrasi dan meminimalisir kesalahan dokumentasi",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
    tag: "Systems & Operations"
  },

  {
    id: "05",
    title: "Event Documentation & Media Coverage",
    client: "Educational & Community Events",
    desc: "Melakukan dokumentasi visual untuk seminar, kegiatan organisasi, event komunitas, dan aktivitas institusi melalui pendekatan cinematic dan storytelling visual.",
    role: "Photographer & Videographer",
    tools: [
      "DSLR Camera",
      "Premiere Pro",
      "Lightroom",
      "OBS Studio"
    ],
    impact: "Menciptakan dokumentasi event yang lebih profesional dan engaging untuk publikasi digital",
    gradient: "from-rose-500/20 to-red-500/20",
    accent: "#F43F5E",
    tag: "Photography & Videography"
  },

  {
    id: "06",
    title: "Social Media Branding & Communication",
    client: "Organizations & Communities",
    desc: "Mengelola strategi media sosial, desain komunikasi visual, dan distribusi konten digital untuk meningkatkan engagement dan identitas brand organisasi.",
    role: "Social Media & Digital Branding",
    tools: [
      "Canva",
      "Photoshop",
      "Meta Business Suite",
      "Content Strategy"
    ],
    impact: "Membangun identitas digital yang lebih konsisten, aktif, dan profesional",
    gradient: "from-sky-500/20 to-indigo-500/20",
    accent: "#0EA5E9",
    tag: "Digital Strategy"
  }
];

// --- SKILL DATA ---
const skillCategories = [
  {
    label: "Visual & Creative Tools",
    icon: "🎨",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Audition",
      "CapCut",
      "Canva",
      "OBS Studio"
    ]
  },

  {
    label: "Web Development",
    icon: "⚡",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "Python",
      "Visual Studio Code"
    ]
  },

  {
    label: "Office & Productivity",
    icon: "🧩",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Digital Documentation",
      "Data Administration",
      "Presentation Design"
    ]
  },

  {
    label: "Creative Production",
    icon: "🎥",
    skills: [
      "Photography",
      "Videography",
      "Photo Editing",
      "Video Editing",
      "Camera Operation",
      "Audio Processing",
      "Content Production"
    ]
  },

  {
    label: "Digital Strategy & Communication",
    icon: "📡",
    skills: [
      "Digital Marketing",
      "Social Media Management",
      "Brand Communication",
      "Content Strategy",
      "Public Relations",
      "IT Consultation",
      "Digital Publication"
    ]
  },

  {
    label: "Technical & Operational",
    icon: "🛠",
    skills: [
      "PC Assembly",
      "LAN RJ45 Installation",
      "Printer & Photocopy Operation",
      "Basic Troubleshooting",
      "Hardware Maintenance"      
    ]
  },

  {
    label: "Soft Skills",
    icon: "🧠",
    skills: [
      "Problem Solving",
      "Leadership",
      "Time Management",
      "Communication",
      "Team Collaboration",
      "Adaptability",
      "Attention to Detail",
      "Public Speaking",
      "English (Intermediate)",
      "Pressure Handling"
    ]
  }
];

// --- EXPERIENCE DATA ---
const experiences = [
  {
    role: "Magang Bidang Pemasaran",
    org: "Dinas Pariwisata",
    period: "2017",
    bullets: [
      "Membantu proses promosi dan publikasi kegiatan pariwisata daerah",
      "Berpartisipasi dalam pengelolaan media informasi dan dokumentasi kegiatan",
      "Mempelajari dasar komunikasi publik dan strategi pemasaran institusi",
    ],
    impact: "Membangun fondasi awal dalam dunia komunikasi visual dan publikasi"
  },

  {
    role: "Graphic Production Staff",
    org: "Percetakan Tangerang",
    period: "2019 – 2020",
    bullets: [
      "Mengoperasikan mesin percetakan, fotocopy, dan produksi desain cetak",
      "Mengerjakan desain banner, brosur, kartu nama, dan media promosi",
      "Berkoordinasi langsung dengan klien untuk revisi dan finalisasi desain",
    ],
    impact: "Memperkuat kemampuan produksi visual dan workflow industri percetakan"
  },

  {
    role: "Design & Printing Specialist",
    org: "Percetakan Pagar Alam",
    period: "2020 – 2022",
    bullets: [
      "Menangani produksi desain dan percetakan untuk kebutuhan instansi dan UMKM",
      "Mengelola proses editing, layout, dan final artwork sebelum produksi",
      "Melakukan troubleshooting dasar perangkat komputer dan mesin produksi",
    ],
    impact: "Meningkatkan efisiensi proses produksi dan kualitas visual hasil cetak"
  },

  {
    role: "Magang Pengajar",
    org: "SMK Muhammadiyah Pagar Alam",
    period: "2022",
    bullets: [
      "Membantu proses pembelajaran dan pendampingan siswa",
      "Mengembangkan kemampuan komunikasi dan penyampaian materi",
      "Beradaptasi dalam lingkungan pendidikan dan manajemen kelas",
    ],
    impact: "Meningkatkan kemampuan public speaking dan leadership"
  },

  {
    role: "Staff Humas & Divisi Publikasi Dokumentasi",
    org: "STKIP Muhammadiyah Pagar Alam",
    period: "2022 – Sekarang",
    bullets: [
      "Mengelola publikasi digital institusi melalui desain, video, dan dokumentasi visual",
      "Memproduksi konten media sosial, poster kegiatan, dan video promosi kampus",
      "Melakukan dokumentasi event akademik, seminar, dan kegiatan institusi",
      "Berkoordinasi dalam strategi branding dan komunikasi publik kampus",
    ],
    impact: "Membangun citra visual institusi yang lebih modern dan profesional"
  },

  {
    role: "Freelance Creative Specialist",
    org: "Independent Freelance",
    period: "2022 – Sekarang",
    bullets: [
      "Mengerjakan proyek desain grafis, fotografi, dan videografi untuk berbagai klien",
      "Membangun website dan landing page modern menggunakan React dan Tailwind CSS",
      "Mengelola proses editing video, branding visual, dan digital content production",
      "Membantu UMKM dan organisasi meningkatkan identitas digital mereka",
    ],
    impact: "Menggabungkan kreativitas visual dan teknologi dalam solusi digital modern"
  },

  {
    role: "Koordinator Administrasi & Dokumentasi Legal",
    org: "Kantor Notaris",
    period: "2023 – Sekarang",
    bullets: [
      "Mengelola administrasi dan dokumentasi legal secara sistematis",
      "Menyusun arsip digital dan template dokumen resmi institusi",
      "Menangani proses pengecekan dan validasi dokumen penting",
      "Membantu optimalisasi efisiensi workflow administrasi kantor",
    ],
    impact: "Meningkatkan ketelitian, tanggung jawab, dan manajemen dokumen profesional"
  },

  {
    role: "Petugas KPPS & Ketua KPPS",
    org: "Pemilu & Pilkada 2024",
    period: "2024",
    bullets: [
      "Bertanggung jawab dalam proses administrasi dan operasional pemilu",
      "Memimpin koordinasi tim KPPS selama proses pemungutan suara",
      "Menjaga akurasi data, ketepatan proses, dan komunikasi tim lapangan",
    ],
    impact: "Mengembangkan kemampuan leadership dan problem solving dalam tekanan tinggi"
  },

  {
    role: "Petugas Pantarlih",
    org: "Pemilu 2024",
    period: "2024",
    bullets: [
      "Melakukan pendataan dan verifikasi data pemilih secara langsung",
      "Berinteraksi dengan masyarakat dalam proses validasi data",
      "Menjaga akurasi dan ketelitian administrasi lapangan",
    ],
    impact: "Memperkuat kemampuan komunikasi publik dan manajemen data"
  },

  {
  role: "Dokumenter & Video Editor",
  org: "Study Tour",
  period: "2024",
  bullets: [
    "Mengelola dokumentasi perjalanan dalam bentuk video dan konten vlog secara end-to-end",
    "Memproduksi dan mengedit video berdurasi ±90 menit secara mandiri dengan pendekatan storytelling dan cinematic",
    "Mendistribusikan konten ke Instagram dengan performa rata-rata 5.000+ views per part, melampaui jumlah audiens (1.000+ followers)"
  ],
  impact: "Terbiasa menghasilkan konten video dokumenter yang terstruktur, engaging, dan memiliki nilai visual sinematik"
},

  {
    role: "Sekretariat Informasi & Media",
    org: "PDM Muhammadiyah",
    period: "2025 – Sekarang",
    bullets: [
      "Mengelola publikasi informasi dan media sosial organisasi",
      "Membantu produksi desain komunikasi visual dan dokumentasi kegiatan",
      "Berpartisipasi dalam pengelolaan branding digital organisasi",
    ],
    impact: "Meningkatkan konsistensi komunikasi visual organisasi"
  },

  {
    role: "PDD (Publikasi & Dokumentasi)",
    org: "Pagar Alam Book Party",
    period: "2025 – Sekarang",
    bullets: [
      "Mendokumentasikan kegiatan komunitas melalui foto dan video",
      "Membuat desain publikasi digital untuk event dan campaign komunitas",
      "Mengelola distribusi konten media sosial komunitas",
    ],
    impact: "Membantu membangun identitas visual komunitas yang lebih aktif dan engaging"
  },

  {
    role: "Ketua Bidang Komunikasi IT",
    org: "Pemuda Muhammadiyah Pagar Alam",
    period: "2025 – Sekarang",
    bullets: [
      "Memimpin pengelolaan komunikasi digital dan media organisasi",
      "Mengembangkan desain komunikasi visual untuk event dan publikasi",
      "Mengelola strategi branding digital dan dokumentasi organisasi",
      "Mengembangkan website dan sistem digital berbasis React dan Firebase",
    ],
    impact: "Mendorong transformasi digital organisasi melalui visual dan teknologi"
  }
];

// --- TESTIMONIALS ---
const testimonials = [
  {
    quote: "Kerja detail, cepat tanggap, dan hasil desainnya selalu melebihi ekspektasi. Tim kami sangat terbantu.",
    name: "Serlly Putri Anggriani, S.H., M.Kn",
    role: "Kepala Humas, STKIP Muhammadiyah Pagar Alam",
    initial: "S"
  },
];

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E5E7EB] font-sans selection:bg-[#3B82F6] selection:text-white relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #3B82F6; }
        .bg-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        }
        .skill-pill {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-size: 13px;
          color: #9CA3AF;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .skill-pill:hover {
          border-color: #3B82F6;
          color: #E5E7EB;
          background: rgba(59,130,246,0.08);
        }
        .project-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-4px);
        }
        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, #3B82F6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* CURSOR */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 bg-[#3B82F6] rounded-full mix-blend-screen pointer-events-none blur-[12px] transform -translate-x-1/2 -translate-y-1/2 z-[100] transition-transform duration-75 ease-out hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[100] hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0A0A0F]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-wider text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
            SYS.ARCH
          </div>
          <div className="hidden md:flex gap-8 text-sm text-[#9CA3AF] tracking-wide">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6] text-white text-sm font-semibold font-display hover:bg-cyan-500 transition-colors">
            Hire Me <ChevronRight size={14} />
          </a>
          <button className="md:hidden text-white">
            <Layout size={24} />
          </button>
        </div>
      </nav>

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Reveal>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111118] border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-mono mb-8 rounded-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Available for new projects — Let's talk
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-tight leading-[1.05] text-white">
              Saya membangun sistem digital yang menggabungkan<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">desain, teknologi, dan komunikasi </span><br />
             untuk menciptakan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5E7EB] to-[#9CA3AF]">impact nyata</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-8 text-lg md:text-xl text-[#9CA3AF] max-w-2xl font-light leading-relaxed">
              Brand yang kuat. Website yang cepat. Konten yang convert. — Untuk bisnis, organisasi, dan institusi yang serius membangun identitas digital mereka.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 border-l-2 border-[#3B82F6] pl-4 flex gap-8 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-white font-display">350+</p>
                <p className="text-xs text-[#6B7280] mt-1">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">7+</p>
                <p className="text-xs text-[#6B7280] mt-1">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-display">100%</p>
                <p className="text-xs text-[#6B7280] mt-1">Client Satisfaction</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={550}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A0A0F] font-bold font-display tracking-wide overflow-hidden transition-all hover:bg-[#E5E7EB]">
                <span className="relative z-10 flex items-center gap-2">Lihat Karya Saya <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
              </a>
              <a href="https://wa.me/6283177652388?text=Halo,%20saya%20ingin%20diskusi%20project!" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-semibold font-display tracking-wide transition-all hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <span className="relative z-10 flex items-center gap-2">Diskusi Gratis <Zap size={18} className="text-[#3B82F6]" /></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 2. ABOUT ─── */}
<section id="about" className="py-32 relative border-t border-white/5 overflow-hidden">
  <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      {/* FOTO */}
      <Reveal className="lg:col-span-4">
        <div className="relative mx-auto lg:mx-0 w-fit">
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#3B82F6] z-10"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#3B82F6] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/20 to-transparent rounded-sm blur-2xl scale-110 pointer-events-none"></div>

          <div className="relative overflow-hidden" style={{ width: '280px', height: '380px' }}>
            <img
              src="/me.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top transition-all duration-700"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#111118] border border-[#3B82F6]/40 px-5 py-2 flex items-center gap-2 z-20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></span>
            <span className="text-xs font-mono text-[#E5E7EB] tracking-wider">Available for Work</span>
          </div>
        </div>
      </Reveal>

      {/* TEXT */}
      <div className="lg:col-span-8 space-y-8">
        <Reveal>
          <div>
            <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Creative Technologist.<br/>
              <span className="text-[#9CA3AF]">Satu orang.</span>{' '}
              <span className="text-[#3B82F6]">Banyak solusi.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-5 text-[#9CA3AF] font-light leading-relaxed">
            {/* isi teks about kamu di sini */}
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="p-5 bg-[#111118] border-l-2 border-[#3B82F6]">
            <p className="font-mono text-sm text-[#3B82F6] leading-relaxed">
              "I build systems, not just visuals.<br/>From concept to deployment — I handle it all."
            </p>
          </div>
        </Reveal>
      </div>

    </div>
  </div>
</section>

      {/* ─── 3. IMPACT STATS ─── */}
      <section className="py-20 relative bg-[#050508] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Konten Diproduksi" },
              { num: "10+", label: "Proyek Desain" },
              { num: "3+", label: "Website Dibangun" },
              { num: "2×", label: "Rata-rata Peningkatan Engagement" },
            ].map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="p-6 border border-white/5 bg-[#111118] hover:border-[#3B82F6]/30 transition-colors">
                  <p className="stat-number">{stat.num}</p>
                  <p className="text-[#6B7280] text-sm mt-2 font-light">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PROJECTS ─── */}
      <section id="projects" className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">Selected Works</p>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Proyek Nyata. Hasil Nyata.</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent hidden md:block"></div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className={`project-card p-8 bg-[#111118] border border-white/5 hover:border-white/20 bg-gradient-to-br ${project.gradient} relative`}>
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono px-3 py-1 border rounded-sm" style={{ borderColor: project.accent + '60', color: project.accent }}>
                      {project.tag}
                    </span>
                    <span className="font-display text-3xl font-bold text-white/5">{project.id}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white/5 text-[#9CA3AF] border border-white/5 rounded-sm">{tool}</span>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#6B7280] mb-1 uppercase tracking-wider">Role</p>
                      <p className="text-sm text-[#E5E7EB]">{project.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#6B7280] mb-1 uppercase tracking-wider">Impact</p>
                      <p className="text-xs text-emerald-400">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-12 text-center">
              <p className="text-[#9CA3AF] text-sm mb-6">Ingin melihat lebih banyak atau diskusi project serupa?</p>
              <a href="https://wa.me/6283177652388?text=Halo,%20saya%20ingin%20diskusi%20project!" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold font-display tracking-wide hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all">
                Diskusi Project Kamu <ChevronRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 5. SKILLS ─── */}
      <section id="skills" className="py-32 relative bg-[#050508] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">Toolkit</p>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Skill Stack</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent hidden md:block"></div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="p-8 bg-[#111118] border border-white/5 hover:border-[#3B82F6]/30 transition-colors h-full">
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-6">{cat.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. EXPERIENCE ─── */}
      <section id="experience" className="py-32 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">Track Record</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Pengalaman Kerja</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="p-8 bg-[#111118] border border-white/5 hover:border-white/15 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">{exp.role}</h3>
                      <p className="text-[#9CA3AF] text-sm mt-1">{exp.org}</p>
                    </div>
                    <span className="text-xs font-mono text-[#6B7280] border border-white/10 px-3 py-1 rounded-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                        <ChevronRight size={14} className="text-[#3B82F6] flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium border-t border-white/5 pt-4">
                    <Zap size={14} />
                    {exp.impact}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. FRAMEWORK ─── */}
      <section id="framework" className="py-32 relative bg-[#050508] border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">How I Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-6">My Framework</h2>
            <p className="text-[#9CA3AF] mb-16">Setiap proyek dibangun di atas 3 prinsip ini:</p>
          </Reveal>

          <div className="space-y-6 text-left">
            {[
              { num: "01", title: "Structure First", desc: "Sistem yang stabil, terorganisir, dan scalable. Bukan hanya tampak bagus hari ini — tapi bisa tumbuh besok." },
              { num: "02", title: "Design for Experience", desc: "Visual yang imersif, berkarakter, dan strategis. Desain bukan dekorasi — desain adalah komunikasi." },
              { num: "03", title: "Measure the Impact", desc: "Solusi yang tidak hanya terlihat bagus, tapi bisa diukur hasilnya. Engagement, load time, conversion — semua punya angka." }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="flex flex-col md:flex-row md:items-start gap-6 p-8 bg-[#111118] border border-white/5 hover:bg-[#111118] hover:border-[#3B82F6]/30 transition-colors group">
                  <div className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3B82F6] to-cyan-400 flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display uppercase tracking-wide group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS ─── */}
      <section className="py-32 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">Social Proof</p>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">What They Say</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent hidden md:block"></div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="p-8 bg-[#111118] border border-white/5 hover:border-white/15 transition-colors h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed flex-1 mb-8 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-cyan-500 flex items-center justify-center text-white font-bold font-display flex-shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-[#6B7280] text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CLOSING STATEMENT ─── */}
      <section className="py-40 relative border-t border-white/5 bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0F]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <div className="space-y-4 font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest">
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Design is <span className="text-white">intention.</span></p>
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Code is <span className="text-white">structure.</span></p>
              <p className="text-[#3B82F6]">Results are <span className="text-white">proof.</span></p>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-12 text-xl md:text-2xl text-[#9CA3AF] font-display border-t border-white/10 pt-12 inline-block">
              I connect them all — for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 10. CONTACT ─── */}
      <section id="contact" className="py-24 relative border-t border-white/5 bg-[#111118]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[#3B82F6] text-sm font-mono tracking-widest mb-4 uppercase">Let's Work Together</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Bangun Identitas Digital Kamu?
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-12">
              Satu diskusi cukup untuk tahu apakah kita match. Gratis, tanpa komitmen. Ceritakan proyek kamu, dan kita mulai dari sana.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="https://wa.me/6283177652388?text=Halo,%20saya%20ingin%20diskusi%20project%20dan%20mulai%20kerja%20sama!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#3B82F6] text-white font-bold font-display tracking-wide hover:bg-cyan-500 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <span className="flex items-center gap-2">
                  Mulai Diskusi Gratis <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
              </a>
              <a
                href="https://drive.google.com/your-cv-link"
                target="_blank"
                rel="noopener noreferrer" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-semibold font-display tracking-wide hover:border-white hover:bg-white/5 transition-all"
              >
                <span className="flex items-center gap-2">Download CV <Download size={18} /></span>
              </a>
            </div>

            {/* Alternative contacts */}
            <div className="flex items-center justify-center gap-8 text-sm text-[#6B7280]">
              <a href="mailto:Revaltri06812@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span>
                Revaltri06812@gmail.com
              </a>              
              <a href="https://www.instagram.com/revaltrialfajri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span>
                revaltrialpajri
              </a>
            </div>
          </Reveal>
        </div>
        
        <div className="mt-16 border-t border-white/5 pt-8 w-full text-center">
          <p className="text-[#9CA3AF] text-xs font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} RevDev — I build systems, not just visuals.
          </p>
        </div>
      </section>
    </div>
  );
}