import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Camera, 
  Video, 
  PenTool, 
  Mail, 
  Instagram, 
  Download, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  Monitor,
  Cpu,
  Phone,
  User
} from 'lucide-react';

// --- DATA CONTENT (MODULAR) ---
// Ganti teks di sini untuk update konten dengan mudah tanpa merusak layout.

const CONTENT = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      portfolio: "Portofolio",
      experience: "Pengalaman",
      contact: "Kontak"
    },
    hero: {
      role: "Creative Designer & Multimedia Specialist",
      desc: "Menyediakan solusi visual melalui desain, fotografi, dan videografi yang komunikatif dan strategis.",
      cta_portfolio: "Lihat Portofolio",
      cta_contact: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      p1: "Saya adalah seorang Creative Designer & Multimedia Specialist dengan latar belakang desain grafis, fotografi, dan videografi. Terbiasa bekerja di lingkungan formal maupun kreatif, saya mengutamakan ketepatan pesan visual, konsistensi brand, serta kualitas hasil akhir.",
      p2: "Dengan pengalaman di bidang pendidikan, pemerintahan, percetakan, dan sektor profesional, saya mampu menyesuaikan gaya kerja sesuai kebutuhan institusi maupun klien. Selain kemampuan kreatif, saya juga memiliki pemahaman teknis dan komunikasi digital yang mendukung proses kerja secara menyeluruh."
    },
    services: {
      title: "Layanan",
      note: "Layanan dapat disesuaikan dengan kebutuhan dan skala proyek.",
      items: [
        { title: "Desain Grafis & Visual Branding", icon: "design" },
        { title: "Fotografi & Videografi Dokumentasi", icon: "camera" },
        { title: "Editing Video & Motion Content", icon: "video" },
        { title: "Produksi Konten Media Sosial", icon: "social" }
      ]
    },
    experience: {
      title: "Pengalaman Profesional",
      list: [
        {
          year: "2023 – Sekarang",
          role: "Staf Administrasi & Lapangan",
          company: "Kantor Notaris",
          desc: "Mendukung kegiatan administrasi dan lapangan seperti meninjau lokasi serta berkomunikasi dengan klien."
        },
        {
          year: "2022 – Sekarang",
          role: "Humas (Public Relations)",
          company: "STKIP Muhammadiyah Pagar Alam",
          desc: "Menangani publikasi, dokumentasi kegiatan, desain konten visual, fotografi, videografi, serta media sosial institusi."
        },
        {
          year: "2022 – Sekarang",
          role: "Freelance Designer & Multimedia",
          company: "Self-Employed",
          desc: "Menangani berbagai proyek desain grafis, fotografi, dan videografi."
        },
        {
          year: "2022",
          role: "Magang Mengajar",
          company: "SMK Muhammadiyah Pagar Alam",
          desc: "Membantu proses pembelajaran dan kegiatan pendukung pendidikan."
        },
        {
          year: "2020 – 2022",
          role: "Graphic Designer",
          company: "Percetakan – Pagar Alam",
          desc: "Mengelola desain grafis, layout, serta kebutuhan cetak klien."
        },
        {
          year: "2019 – 2020",
          role: "Production & Design",
          company: "Percetakan – Tangerang",
          desc: "Bertanggung jawab dalam desain, produksi cetak, dan pengoperasian mesin."
        },
        {
          year: "2017",
          role: "Magang Divisi Pemasaran",
          company: "Dinas Pariwisata",
          desc: "Terlibat dalam kegiatan promosi dan dokumentasi pariwisata."
        }
      ]
    },
    skills: {
      title: "Keahlian & Alat",
      categories: {
        software: "Software & Tools",
        technical: "Technical Skills",
        soft: "Soft Skills"
      },
      software_list: "CorelDRAW, Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Audition, Canva, CapCut, OBS Studio, Ms. Office, HTML, CSS, VS Code.",
      technical_list: [
        "Pengoperasian kamera foto dan video",
        "Perakitan PC dan instalasi jaringan LAN",
        "Pengoperasian mesin fotokopi dan printer",
        "Troubleshooting komputer dan perangkat"
      ],
      soft_list: "Komunikasi, manajemen waktu, problem solving, ketelitian, ketahanan terhadap tekanan, kejujuran, kerja keras, kemandirian & kerjasama tim."
    },
    portfolio: {
      title: "Portofolio Pilihan",
      categories: {
        all: "Semua",
        graphic: "Pelatihan",
        photo: "Fotografi",
        video: "Videografi",
        social: "Media Sosial"
      }
    },
    contact: {
      title: "Hubungi Saya",
      desc: "Tertarik bekerja sama? Silakan hubungi saya melalui email atau media sosial.",
      download_cv: "Unduh CV (PDF)"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      role: "Creative Designer & Multimedia Specialist",
      desc: "Delivering visual solutions through strategic design, photography, and videography.",
      cta_portfolio: "View Portfolio",
      cta_contact: "Contact Me"
    },
    about: {
      title: "About Me",
      p1: "I am a Creative Designer & Multimedia Specialist with a background in graphic design, photography, and videography. Accustomed to working in both formal and creative environments, I prioritize visual clarity, brand consistency, and high-quality outcomes.",
      p2: "With experience across education, government, printing services, and professional sectors, I am able to adapt my working approach to meet institutional and client needs. In addition to creative skills, I possess technical knowledge and digital communication capabilities that support a comprehensive workflow."
    },
    services: {
      title: "Services",
      note: "Services can be adjusted based on project requirements and scope.",
      items: [
        { title: "Graphic Design & Visual Branding", icon: "design" },
        { title: "Photography & Videography Documentation", icon: "camera" },
        { title: "Video Editing & Motion Content", icon: "video" },
        { title: "Social Media Content Production", icon: "social" }
      ]
    },
    experience: {
      title: "Professional Experience",
      list: [
        {
          year: "2023 – Present",
          role: "Administrative & Documentation Staff",
          company: "Notary Office",
          desc: "Supporting administrative and documentation processes in a formal professional environment."
        },
        {
          year: "2022 – Present",
          role: "Public Relations",
          company: "STKIP Muhammadiyah Pagar Alam",
          desc: "Responsible for publications, event documentation, visual content design, photography, videography, and institutional social media."
        },
        {
          year: "2022 – Present",
          role: "Freelance Designer & Multimedia Specialist",
          company: "Self-Employed",
          desc: "Handling various graphic design, photography, and videography projects."
        },
        {
          year: "2022",
          role: "Teaching Internship",
          company: "SMK Muhammadiyah Pagar Alam",
          desc: "Assisted teaching activities and educational support programs."
        },
        {
          year: "2020 – 2022",
          role: "Graphic Designer",
          company: "Printing Company – Pagar Alam",
          desc: "Managed graphic design, layout, and client printing needs."
        },
        {
          year: "2019 – 2020",
          role: "Production & Design",
          company: "Printing Company – Tangerang",
          desc: "Responsible for design, print production, and machine operation."
        },
        {
          year: "2017",
          role: "Marketing Division Internship",
          company: "Department of Tourism",
          desc: "Involved in tourism promotion and documentation activities."
        }
      ]
    },
    skills: {
      title: "Skills & Tools",
      categories: {
        software: "Software & Tools",
        technical: "Technical Skills",
        soft: "Soft Skills"
      },
      software_list: "CorelDRAW, Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Audition, Canva, CapCut, OBS Studio, Ms. Office, HTML, CSS, VS Code.",
      technical_list: [
        "Camera operation (photo & video)",
        "PC assembly and LAN installation",
        "Photocopy and printer operation",
        "Basic civil engineering knowledge",
        "Computer and device troubleshooting"
      ],
      soft_list: "Communication, time management, problem solving, attention to detail, ability to work under pressure, integrity, strong work ethic, and ability to work independently or in a team."
    },
    portfolio: {
      title: "Selected Works",
      categories: {
        all: "All",
        graphic: "Graphic Design",
        photo: "Photography",
        video: "Videography",
        social: "Social Media"
      }
    },
    contact: {
      title: "Contact Me",
      desc: "Interested in collaboration? Please contact me via email or social media.",
      download_cv: "Download CV (PDF)"
    }
  }
};

// --- MOCK PORTFOLIO DATA ---
const PROJECTS = [
  { id: 1, category: 'graphic', title: 'Pemateri Desain Grafis', year: '2023', image: '/pelatihan.jpeg' },
  { id: 2, category: 'photo', title: 'Graduation Event Documentation', year: '2023', image: 'dokumentasi.jpeg' },
  { id: 3, category: 'social', title: 'Instagram Feeds', year: '2024', image: '/feedpb.jpg' },
  { id: 4, category: 'video', type: 'video', title: 'Teaser', year: '2023', media: '/vid.mp4' },
  { id: 5, category: 'graphic', title: 'Event Poster Series', year: '2022', image: '/desain.jpg' },
  { id: 6, category: 'photo', title: 'Product Photography', year: '2023', image: '/foto.jpeg' }
];

const App = () => {
  const [lang, setLang] = useState('id'); // 'id' or 'en'
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id');
    setIsMenuOpen(false);
  };

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const renderIcon = (type) => {
    switch(type) {
      case 'design': return <PenTool className="w-8 h-8 text-slate-800" />;
      case 'camera': return <Camera className="w-8 h-8 text-slate-800" />;
      case 'video': return <Video className="w-8 h-8 text-slate-800" />;
      case 'social': return <Briefcase className="w-8 h-8 text-slate-800" />;
      default: return <Briefcase className="w-8 h-8 text-slate-800" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-slate-900 border-2 border-slate-900 px-2 py-1">
            PORTFOLIO.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-slate-500 transition-colors">{t.nav.home}</a>
            <a href="#about" className="text-sm font-medium hover:text-slate-500 transition-colors">{t.nav.about}</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-slate-500 transition-colors">{t.nav.portfolio}</a>
            <a href="#experience" className="text-sm font-medium hover:text-slate-500 transition-colors">{t.nav.experience}</a>
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-1 text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-slate-700 transition"
            >
              <Globe size={14} /> {lang === 'id' ? 'EN' : 'ID'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t.nav.portfolio}</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>{t.nav.experience}</a>
            <div className="pt-2 border-t border-slate-100">
              <button onClick={toggleLang} className="font-bold flex items-center gap-2">
                <Globe size={16} /> Switch to {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
            Available for Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {t.hero.role}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="px-8 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition">
              {t.hero.cta_portfolio}
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-300 text-slate-900 font-semibold rounded hover:bg-slate-100 transition">
              {t.hero.cta_contact}
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden relative">
              <img src="https://files.catbox.moe/dr9pk8.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 border-l-4 border-slate-900 pl-4">{t.about.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                {t.about.p1}
              </p>
              <p className="text-slate-600 leading-relaxed text-justify">
                {t.about.p2}
              </p>
              
              {/* Quick Services Grid inside About */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {t.services.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
                    <div className="text-slate-700">{renderIcon(item.icon)}</div>
                    <span className="text-sm font-medium text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">{t.services.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t.experience.title}</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-300">
            {t.experience.list.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon/Dot on Timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-lg">{exp.company}</h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">{exp.year}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mb-2">{exp.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{t.skills.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Software */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="text-slate-700" />
                <h3 className="font-bold text-lg">{t.skills.categories.software}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.skills.software_list}
              </p>
            </div>

            {/* Technical */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-slate-700" />
                <h3 className="font-bold text-lg">{t.skills.categories.technical}</h3>
              </div>
              <ul className="space-y-2">
                {t.skills.technical_list.map((skill, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-slate-700" />
                <h3 className="font-bold text-lg">{t.skills.categories.soft}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {t.skills.soft_list}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{t.portfolio.title}</h2>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {['all', 'graphic', 'photo', 'video', 'social'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    activeTab === cat 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {t.portfolio.categories[cat]}
                </button>
              ))}
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                  {project.category === 'video' ? (
  <video 
    src={project.media} 
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    muted
    loop
    playsInline
    onMouseEnter={(e) => e.currentTarget.play()}
    onMouseLeave={(e) => {
      e.currentTarget.pause();
      e.currentTarget.currentTime = 0;
    }}
  />
) : (
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
  />
)}
                  <div className="absolute inset-0 pointer-events-none bg-slate-900/0 group-hover:bg-slate-900/40 transition flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                    {t.portfolio.categories[project.category]} • {project.year}
                  </div>
                  <h3 className="font-bold text-slate-900">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.contact.title}</h2>
          <p className="text-slate-600 mb-10">{t.contact.desc}</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:revaltri06812@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition">
              <Mail size={20} /> revaltri06812@gmail.com
            </a>
            <a href="https://www.instagram.com/revaltrialfajri/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition">
              <Instagram size={20} /> @revaltrialfajri
            </a>
            <a 
              href="https://wa.me/6283177652388" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition"
            >
              <Phone size={20} /> WhatsApp
            </a>
          </div>

          {/* Tombol Download CV dipindah ke dalam container agar rapi */}
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
            <Download size={18} /> {t.contact.download_cv}
          </a>
        </div>
      </section>

{/* --- FOOTER --- */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Creative Designer & Multimedia Specialist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;