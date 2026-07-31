import React, { useState, useEffect } from 'react';
import { 
  FaHardHat, 
  FaTractor, 
  FaTools, 
  FaHome, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaCheckCircle,
  FaBoxes,
  FaTruckMonster,
  FaDraftingCompass,
  FaBuilding,
  FaIndustry,
  FaWater
} from 'react-icons/fa';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Hero Section Background Image Carousel State & Data
  const heroImages = [
    "/images/howo-tippers.jpg",
    "/images/civil and construction1.png",
    "/images/civil and construction 2.png",
    "images/borehole drilling wallpaper.png",
    "/images/roofing and timber.png"
  ];

  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Construction Services Data (Updated with image paths and icons for each card)
  const constructionServices = [
    { 
      title: "Building Construction", 
      desc: "Full residential, commercial, and industrial structural building construction from foundation to finish.",
      img: "/images/civil and construction1.png"
    },
    { 
      title: "Driveway & Commercial Paving", 
      desc: "Heavy-duty paving blocks, interlocking stone, tarring, and concrete paving for high load capacities.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Structural Designs", 
      desc: "Detailed structural calculations and engineering plans for residential & commercial builds.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Architectural Designs", 
      desc: "Modern architectural drafting, 3D renderings, and local council approvals.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Project Management", 
      desc: "Professional site oversight, timeline tracking, material auditing, and quality control.",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Structural Assessments", 
      desc: "Safety audits, integrity inspections, and structural integrity reports for existing builds.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Road Design & Construction", 
      desc: "Sub-grade preparation, surfacing, bridge construction, and civil road infrastructure.",
      img: "/images/civil and construction 2.png"
    },
    { 
      title: "Renovations & Alterations", 
      desc: "Full structural remodeling, extension works, roofing, and interior transformations.",
      img: "/images/roofing and timber.png"
    },
    { 
      title: "Sewer Reticulation", 
      desc: "Main sewer line installations, manholes, drainage networks, and civil waste management.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Water Reticulation", 
      desc: "Municipal & commercial water piping, pump station setup, and bulk distribution systems.",
      img: "images/storage pumps2.png"
    }
  ];

  // Earthmovers Fleet Data (Exact local image paths preserved)
  const earthmoverFleet = [
    {
      title: "Sinotruk HOWO Tipper Trucks (10-Wheeler Fleet)",
      status: "Available for Hire & Site Haulage",
      specs: ["Heavy Duty Tipper Capacity", "High-Torque Euro II/III Engine", "Aggregated Gravel & Earth Haulage", "Reinforced Chassis for Rough Terrain"],
      img: "/images/howo-tippers.jpg",
      tag: "Site Haulage"
    },
    {
      title: "Heavy Tracked Excavators & Dozers",
      status: "Plant Hire",
      specs: ["30-Ton Bucket Capacity", "Site Clearing & Bulk Excavation", "Trenching & Deep Foundation Digging", "Operator Provided"],
      img: "images/Heavy Tracked Excavators & Dozers.png",
      tag: "Earthmoving"
    },
    {
      title: "Mobile Hydraulic Cranes & Rigging",
      status: "Available for Hire",
      specs: ["Heavy Lifting & Structural Rigging", "Multi-Ton Boom Reach Capacity", "Pre-cast Concrete & Steel Placement", "Certified Rigging Crew Included"],
      img: "images/hyrolic cranes.png",
      tag: "Heavy Lifting"
    },
    {
      title: "Articulated Heavy Dump Trucks",
      status: "Site Earthmoving Hire",
      specs: ["High Volumetric Capacity", "All-Terrain 6x6 Off-Road Drive", "Bulk Soil & Quarry Haulage", "Rugged Mining & Construction Ready"],
      img: "/images/dump trucks1.png",
      tag: "Bulk Haulage"
    },
    {
      title: "CASE 570 4x4 Backhoe Loader",
      status: "For Sale / Plant Hire (4,200 Hrs)",
      specs: ["4x4 Drive for Maximum Traction", "Work Ready - No Repairs Required", "Ideal for Earthworks, Farming & Trenching", "Includes Front Bucket & Rear Digging Boom"],
      img: "/images/CASE 570 4x4 Backhoe Loader.png",
      tag: "Featured Machinery"
    }
  ];

  // Borehole Drilling Services Data (Exact local image paths preserved)
  const boreholeServices = [
    { 
      title: "Geological Siting & Surveying", 
      desc: "Advanced hydro-geological survey to identify high-yield underground water aquifers accurately.",
      img: "images/geological surveying and siting.png"
    },
    { 
      title: "Deep Hole Rig Drilling", 
      desc: "Heavy-duty rotary percussion drilling rigs capable of penetrating hard granite rock formations.",
      img: "images/deep rig drilling.png"
    },
    { 
      title: "Borehole Casing & Screening", 
      desc: "High-grade PVC / Steel casing installation to prevent shaft collapse and ensure water purity.",
      img: "images/borehole casing and screening.png"
    },
    { 
      title: "Capacity & Yield Testing", 
      desc: "Rigorous drawdown and pumping tests to determine water flow rate and sustainable daily yields.",
      img: "images/capacity and yield testing.png"
    },
    { 
      title: "Submersible Pump Installation", 
      desc: "Solar-powered and electric submersible pumps fitted with automatic level control switches.",
      img: "images/submersible pump installation.png"
    },
    { 
      title: "Storage Tank & Tower Setup", 
      desc: "5,000L – 10,000L JoJo water tank installation on heavy steel elevated tank stands.",
      img: "images/storage pumps2.png"
    }
  ];

  // Hardware Summary Categories Data (Exact local image paths preserved)
  const hardwareSupplies = [
    {
      category: "Ceiling & Drywall Materials",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      items: ["Gypsum Boards", "Rhinocornice", "Rhinoset Plaster", "Cornerbeads", "Brandering & Ceiling Grid Supplies"]
    },
    {
      category: "Roofing, Timber & Structure",
      img: "/images/roofing and timber.png",
      items: ["IBR Roofing Sheets", "Roofing Nails & Bolts", "Structural Timber Trusses", "Aluminium Doors & Windows", "Partitioning Frames"]
    },
    {
      category: "Power, Solar & Processing",
      img: "/images/solar panels and power.png",
      items: ["Tier-1 Solar Panels", "Lithium Batteries & Inverters", "Grinding Mills", "Hammer Mills", "Maize Shellers", "Metal Fabrication Services"]
    }
  ];

  // Detailed Hardware Breakdown Items Array (Exact local image paths preserved)
  const hardwareDetailedItems = [
    {
      name: "Gypsum Boards",
      category: "Ceiling & Drywall Materials",
      desc: "High-density standard and moisture-resistant gypsum boards ideal for interior drywall partition systems, suspended ceilings, and smooth wall finishes.",
      specs: ["Standard & Moisture-Resistant Types", "Seamless Smooth Finish", "Fire-Retardant Core Properties"],
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rhinocornice",
      category: "Ceiling & Drywall Materials",
      desc: "Decorative plaster decorative cornice mouldings designed to create clean transitions between interior wall linings and finished ceilings.",
      specs: ["75mm & 100mm Sizes Available", "Smooth Plaster Finish", "Easy Glue & Screw Mounting"],
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rhinoset Plaster",
      category: "Ceiling & Drywall Materials",
      desc: "Premium gypsum-based finishing plaster formulated for ultra-smooth skim coating over brickwork, concrete, and gypsum drywall boards.",
      specs: ["Ultra-Smooth Surface Finish", "Fast Drying Time", "High Crack Resistance"],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cornerbeads & Trims",
      category: "Ceiling & Drywall Materials",
      desc: "Galvanized steel and PVC corner beads designed to reinforce 90-degree drywall external corners against impact damage.",
      specs: ["Galvanized Anti-Rust Steel", "Impact Resistant PVC Options", "Straight Edge Alignment"],
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Brandering & Ceiling Grid Supplies",
      category: "Ceiling & Drywall Materials",
      desc: "Treated timber brandering battens and metal suspended ceiling T-grid profiles for sturdy structural ceiling installation.",
      specs: ["SABS Grade Treated Timber", "Lightweight Steel T-Bars", "Heavy Load Suspension Wire"],
      img: "/images/roofing and timber.png"
    },

    {
      name: "IBR Roofing Sheets",
      category: "Roofing, Timber & Structure",
      desc: "Inverted Box Rib (IBR) profile chromadek and galvanized steel roofing sheets engineered for high strength-to-weight ratios on commercial and domestic roofs.",
      specs: ["Chromadek & Galvanized Options", "Custom Cut Lengths Available", "High Water Discharge Capacity"],
      img: "/images/roofing and timber.png"
    },
    {
      name: "Roofing Nails & Heavy Bolts",
      category: "Roofing, Timber & Structure",
      desc: "Weatherproof self-drilling TEK screws with EPDM rubber washers and heavy-duty structural timber anchor bolts.",
      specs: ["EPDM Rubber Leak-Proof Washers", "Corrosion-Resistant Zinc Coating", "Self-Tapping Steel Threads"],
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Structural Timber Trusses",
      category: "Roofing, Timber & Structure",
      desc: "Kiln-dried, CCA-treated structural timber timber trusses engineered to carry heavy roofing tiles, corrugated iron, and solar arrays safely.",
      specs: ["CCA Pressure Treated Against Termites", "Kiln-Dried Structural Strength", "Gang-Nail Metal Plate Connectors"],
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Aluminium Doors & Windows",
      category: "Roofing, Timber & Structure",
      desc: "Anodized aluminium sliding patio doors, folding stacker doors, and casement windows fitted with toughened safety glass.",
      specs: ["Toughened Safety Glass", "Anodized Anti-Fade Powder Coating", "Multi-Point Security Locks"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Partitioning Frames",
      category: "Roofing, Timber & Structure",
      desc: "Lightweight architectural aluminium and galvanized steel drywall stud framing systems for office partitioning.",
      specs: ["Precision Interlocking Studs", "Soundproofing Insulation Space", "Modular Wall Layouts"],
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },

    {
      name: "Tier-1 Monocrystalline Solar Panels",
      category: "Power, Solar & Processing",
      desc: "High-efficiency monocrystalline PERC solar panels built for max solar conversion, ideal for residential homes, farms, and borehole pumping.",
      specs: ["High Efficiency PERC Cells", "Heavy Anti-Reflective Glass", "25-Year Linear Power Warranty"],
      img: "/images/solar panels and power.png"
    },
    {
      name: "Lithium Batteries & Smart Inverters",
      category: "Power, Solar & Processing",
      desc: "Long-life LiFePO4 solar lithium storage batteries paired with pure sine wave hybrid inverters for uninterrupted power.",
      specs: ["6,000+ Deep Cycle Life", "Pure Sine Wave Hybrid Output", "Built-In Battery Management System"],
      img: "/images/solar panels and power.png"
    },
    {
      name: "Commercial Grinding Mills",
      category: "Power, Solar & Processing",
      desc: "Heavy-duty electric and diesel mealie grinding mills manufactured for rural grain processing and agricultural food production.",
      specs: ["High-Output Milling Chamber", "Diesel & Electric Motor Options", "Hardened Steel Blades"],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Heavy Duty Hammer Mills",
      category: "Power, Solar & Processing",
      desc: "High-speed hammer mills engineered for crushing grains, stockfeed processing, and industrial material pulverization.",
      specs: ["Multi-Screen Sizing Mesh", "High RPM Pulverizing Rotor", "Reinforced Steel Housing"],
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Maize Shellers",
      category: "Power, Solar & Processing",
      desc: "High-capacity mechanized maize threshing and shelling machinery designed to separate kernels from cobs efficiently.",
      specs: ["High Tonnage Output Per Hour", "Minimal Grain Damage Mechanism", "Portable Trailer Base Options"],
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Custom Metal Fabrication Services",
      category: "Power, Solar & Processing",
      desc: "Custom structural steel fabrication including elevated tank stands, security gates, warehouse trusses, and site trailers.",
      specs: ["Precision MIG & Arc Welding", "Custom Engineering Blueprints", "Anti-Corrosion Primer & Paint Coating"],
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-nagDark text-gray-100 flex flex-col font-sans">
      
      {/* Navigation Header */}
      <header className="bg-gradient-to-b from-blue-900 via-blue-700 to-sky-600 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-white text-blue-950 font-black text-2xl px-3 py-1 rounded-lg shadow-md tracking-wider">
              JOETOM
            </div>
            <div>
              <h1 className="text-xl font-extrabold uppercase tracking-wider leading-none">Joetom Engineers</h1>
              <p className="text-xs text-sky-200 italic mt-0.5">Building Excellence & Plant Hire</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <nav className="flex items-center space-x-1 sm:space-x-2 mt-3 sm:mt-0 flex-wrap">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${activeTab === 'home' ? 'bg-nagAccentBlue text-white shadow-lg border border-sky-300/30' : 'hover:bg-white/10 text-sky-100'}`}
            >
              <FaHome /> Home
            </button>
            <button 
              onClick={() => setActiveTab('construction')}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${activeTab === 'construction' ? 'bg-nagAccentBlue text-white shadow-lg border border-sky-300/30' : 'hover:bg-white/10 text-sky-100'}`}
            >
              <FaHardHat /> Construction
            </button>
            <button 
              onClick={() => setActiveTab('earthmovers')}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${activeTab === 'earthmovers' ? 'bg-nagAccentBlue text-white shadow-lg border border-sky-300/30' : 'hover:bg-white/10 text-sky-100'}`}
            >
              <FaTractor /> Earthmovers
            </button>
            <button 
              onClick={() => setActiveTab('borehole')}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${activeTab === 'borehole' ? 'bg-sky-500 text-white shadow-lg border border-sky-200/50' : 'hover:bg-white/10 text-sky-100'}`}
            >
              <FaWater /> Borehole Drilling
            </button>
            <button 
              onClick={() => setActiveTab('hardware')}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${activeTab === 'hardware' ? 'bg-nagAccentBlue text-white shadow-lg border border-sky-300/30' : 'hover:bg-white/10 text-sky-100'}`}
            >
              <FaTools /> Hardware
            </button>
          </nav>

        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        
        {/* ==================== HOME TAB ==================== */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            
            {/* Animated Hero Banner with Fading Background Images */}
<section className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-900/50 min-h-[440px] flex flex-col justify-center">
  
  {/* Background Slideshow Images */}
  <div className="absolute inset-0 z-0 bg-slate-950">
    {heroImages.map((imgSrc, idx) => (
      <div
        key={idx}
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          idx === currentHeroIdx 
            ? 'opacity-85 scale-105 duration-[5000ms]' 
            : 'opacity-0 scale-100 duration-1000'
        }`}
      >
        <img 
          src={imgSrc} 
          alt={`Hero Slide ${idx + 1}`} 
          className="w-full h-full object-cover"
        />
      </div>
    ))}
    
    {/* Balanced Dark Gradient: Deep dark left for text, transparent right for clear imagery */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20 z-10"></div>
    {/* Vignette overlay to ground top & bottom edges */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 z-10"></div>
  </div>

  {/* Hero Banner Text Content */}
  <div className="relative z-20 p-8 sm:p-12 md:p-16 max-w-3xl">
    <span className="bg-sky-500/30 text-sky-200 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-sky-400/40 uppercase tracking-widest backdrop-blur-md shadow-sm">
      One-Stop Engineering & Materials Hub
    </span>
    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 leading-tight drop-shadow-lg">
      Precision Engineering, Earthmoving & Borehole Drilling
    </h2>
    <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed drop-shadow-md max-w-2xl">
      Delivering premier architectural designs, heavy equipment plant hire, borehole siting & drilling, and structural supplies under one roof.
    </p>

    <div className="flex flex-wrap gap-4">
      <button 
        onClick={() => setActiveTab('construction')} 
        className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-95"
      >
        <FaHardHat /> Construction & Paving
      </button>
      <button 
        onClick={() => setActiveTab('earthmovers')} 
        className="bg-nagGold hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-95"
      >
        <FaTractor /> Cranes & Excavators
      </button>
      <button 
        onClick={() => setActiveTab('borehole')} 
        className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-95"
      >
        <FaWater /> Borehole Drilling
      </button>
      <button 
        onClick={() => setActiveTab('hardware')} 
        className="bg-slate-900/90 hover:bg-slate-800 text-sky-300 border border-sky-500/40 font-semibold px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm sm:text-base backdrop-blur-md hover:scale-105 active:scale-95"
      >
        <FaTools /> Hardware Supplies
      </button>
    </div>
  </div>

  {/* Slide Indicator Dots */}
  <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center items-center gap-2">
    {heroImages.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentHeroIdx(idx)}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          idx === currentHeroIdx 
            ? 'w-8 bg-amber-500 shadow-md ring-2 ring-amber-400/30' 
            : 'w-2.5 bg-white/40 hover:bg-white/70 backdrop-blur-sm'
        }`}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>

</section>

            {/* Division Visual Showcase */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Construction Card */}
              <div 
                onClick={() => setActiveTab('construction')}
                className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src="/images/civil and construction1.png"
                    alt="Engineers on Site" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                    Building & Paving
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition">Construction & Paving</h3>
                  <p className="text-gray-400 text-xs mb-4">Building construction, driveway paving, bridge works, structural engineering, and drainage systems.</p>
                  <span className="text-sky-400 font-semibold text-xs flex items-center gap-1">Explore Services →</span>
                </div>
              </div>

              {/* Earthmovers Card */}
              <div 
                onClick={() => setActiveTab('earthmovers')}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src="/images/howo-tippers.jpg" 
                    alt="Earthmovers Fleet" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-nagGold text-white text-xs font-bold px-2.5 py-1 rounded">
                    Plant Hire
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition">Earthmovers & Heavy Plant</h3>
                  <p className="text-gray-400 text-xs mb-4">Hydraulic cranes, heavy dump trucks, tracked excavators, HOWO tippers, and CASE 570 backhoes.</p>
                  <span className="text-amber-400 font-semibold text-xs flex items-center gap-1">View Machinery →</span>
                </div>
              </div>

              {/* Borehole Card */}
              <div 
                onClick={() => setActiveTab('borehole')}
                className="bg-slate-900 border border-slate-800 hover:border-sky-400/50 rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src="images/borehole drilling wallpaper.png" 
                    alt="Borehole Rig" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-cyan-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                    Water Solutions
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition">Borehole Drilling</h3>
                  <p className="text-gray-400 text-xs mb-4">Siting, deep rotary drilling, casing, yield capacity testing, and solar submersible pump setups.</p>
                  <span className="text-cyan-400 font-semibold text-xs flex items-center gap-1">View Water Rigs →</span>
                </div>
              </div>

              {/* Hardware Card */}
              <div 
                onClick={() => setActiveTab('hardware')}
                className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src="/images/roofing and timber.png" 
                    alt="Hardware & Supplies" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                    Direct Supplies
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition">Hardware Supplies</h3>
                  <p className="text-gray-400 text-xs mb-4">Solar panels, lithium batteries, timber trusses, IBR roofing sheets, and ceiling drywall kits.</p>
                  <span className="text-sky-400 font-semibold text-xs flex items-center gap-1">View Hardware →</span>
                </div>
              </div>

            </section>
          </div>
        )}

        {/* ==================== CONSTRUCTION TAB ==================== */}
        {activeTab === 'construction' && (
          <div className="space-y-10">
            <div className="border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <FaHardHat className="text-sky-400" /> Building, Paving & Civil Engineering Division
              </h2>
              <p className="text-gray-400 mt-1">Specialized building construction, heavy-duty paving, and civil infrastructure delivery.</p>
            </div>

            {/* Featured Visual Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-800 h-64 group">
                <img 
                  src="/images/civil and construction 2.png" 
                  alt="Civil Infrastructure Bridge Works" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">Civil & Infrastructure</span>
                  <h3 className="text-xl font-bold text-white">Bridge Construction & Civil Works</h3>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-800 h-64 group">
                <img 
                  src="/images/civil and construction1.png" 
                  alt="Building & Paving Works" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">Building & Paving</span>
                  <h3 className="text-xl font-bold text-white">Commercial Paving & Building Development</h3>
                </div>
              </div>
            </div>

            {/* Service Directory Grid (Updated with Card Images & Direct Contacts) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-2xl overflow-hidden shadow-xl transition flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                      
                      {/* Checkmark Badge */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-sky-600/90 text-white flex items-center justify-center text-lg shadow-md backdrop-blur-sm">
                        <FaCheckCircle />
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-sky-400 transition">{service.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="p-6 pt-0 flex flex-col gap-2">
                    <a 
                      href="https://wa.me/" 
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow transition"
                    >
                      <FaWhatsapp className="text-base" /> Inquire via WhatsApp
                    </a>
                    <a 
                      href="tel:0776156749" 
                      className="w-full bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition"
                    >
                      <FaPhoneAlt /> Call 077 615 6749
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== EARTHMOVERS TAB ==================== */}
        {activeTab === 'earthmovers' && (
          <div className="space-y-10">
            <div className="border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <FaTractor className="text-nagGold" /> Earthmovers, Cranes, Dump Trucks & Fleet
              </h2>
              <p className="text-gray-400 mt-1">Heavy equipment hire: Excavators, Hydraulic Cranes, Off-road Dump Trucks, and Tippers.</p>
            </div>

            {/* Machinery Showcase List */}
            <div className="space-y-8">
              {earthmoverFleet.map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 h-64 md:h-auto relative overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-nagGold text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {item.tag}
                    </span>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{item.title}</h3>
                      <p className="text-amber-400 font-semibold text-sm mb-4">{item.status}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 mb-6">
                        {item.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs text-gray-400">Maintained and certified for heavy industrial works</span>
                      <a href="https://wa.me/" className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow transition">
                        <FaWhatsapp className="text-lg" /> Inquire Availability
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== BOREHOLE DRILLING TAB ==================== */}
        {activeTab === 'borehole' && (
          <div className="space-y-10">
            <div className="border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <FaWater className="text-sky-400" /> Borehole Drilling & Water Systems
              </h2>
              <p className="text-gray-400 mt-1">Complete groundwater solutions: Geological siting, heavy rotary drilling, capacity testing, and solar pumps.</p>
            </div>

            {/* Banner Callout */}
            <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 border border-sky-500/40 rounded-3xl p-8 shadow-2xl grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30 uppercase tracking-widest">
                  High-Yield Guarantee
                </span>
                <h3 className="text-3xl font-black text-white mt-4 mb-3">Professional Water Drilling Rigs</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We utilize specialized high-pressure air rotary drilling rigs capable of penetrating deep underground water aquifers through hard rock formations.
                </p>
                <a href="https://wa.me/" className="inline-flex bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl gap-2 shadow transition items-center text-sm">
                  <FaWhatsapp className="text-lg" /> Request Borehole Quotation
                </a>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-900/50 flex items-start gap-3">
                  <FaCheckCircle className="text-sky-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Geological Siting</h4>
                    <p className="text-xs text-gray-400">Scientific aquifer mapping before drilling to minimize dry holes.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-900/50 flex items-start gap-3">
                  <FaCheckCircle className="text-sky-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Solar Pump Integration</h4>
                    <p className="text-xs text-gray-400">Off-grid solar submersible pumps with zero electricity running costs.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-900/50 flex items-start gap-3">
                  <FaCheckCircle className="text-sky-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Steel / PVC Casing</h4>
                    <p className="text-xs text-gray-400">Heavy-duty casing installed to seal clean water & prevent contamination.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Grid with Images */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boreholeServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-2xl overflow-hidden shadow-lg transition flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image Header */}
                    <div className="h-44 overflow-hidden relative">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                      
                      {/* Water Icon Badge */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-sky-600/90 text-white flex items-center justify-center text-lg shadow-md backdrop-blur-sm">
                        <FaWater />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-white mb-2">{service.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== HARDWARE TAB ==================== */}
        {activeTab === 'hardware' && (
          <div className="space-y-14">
            
            {/* Header */}
            <div className="border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <FaTools className="text-sky-400" /> Structural Hardware, Roofing & Solar Supplies
              </h2>
              <p className="text-gray-400 mt-1">One-stop supply shop for solar systems, structural timber, IBR roofing, and drywall kits.</p>
            </div>

            {/* SECTION 1: Summary Cards Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaBoxes className="text-sky-400" /> Supply Categories Overview
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hardwareSupplies.map((group, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="h-44 overflow-hidden relative">
                        <img 
                          src={group.img} 
                          alt={group.category} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-sky-400 mb-4 pb-2 border-b border-gray-800">
                          {group.category}
                        </h3>
                        <ul className="space-y-2">
                          {group.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-300">
                              <FaCheckCircle className="text-sky-500 text-xs flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                      <a href="tel:0776156749" className="w-full bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition">
                        <FaPhoneAlt /> Order Supplies
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: Detailed Hardware Items Array */}
            <div className="pt-6 border-t border-gray-800/80">
              <div className="mb-8">
                <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30 uppercase tracking-widest">
                  Comprehensive Catalogue
                </span>
                <h3 className="text-2xl font-black text-white mt-3">Individual Hardware & Equipment Specs</h3>
                <p className="text-sm text-gray-400 mt-1">Detailed descriptions, technical specifications, and direct contact options for each supply item.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hardwareDetailedItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden shadow-xl transition flex flex-col justify-between group"
                  >
                    <div>
                      {/* Individual Item Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                        <span className="absolute top-3 left-3 bg-sky-950/80 text-sky-300 border border-sky-500/30 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Item Details */}
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition">{item.name}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                        
                        <div className="space-y-1.5 pt-3 border-t border-gray-800">
                          {item.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                              <FaCheckCircle className="text-sky-400 text-xs flex-shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Us Buttons */}
                    <div className="p-6 pt-0 flex flex-col gap-2">
                      <a 
                        href="https://wa.me/" 
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow transition"
                      >
                        <FaWhatsapp className="text-base" /> Contact Us via WhatsApp
                      </a>
                      <a 
                        href="tel:0776156749" 
                        className="w-full bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition"
                      >
                        <FaPhoneAlt /> Call 077 615 6749
                      </a>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Banner */}
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-sky-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Need a detailed site quotation?</h4>
                <p className="text-sm text-gray-400">Get bulk pricing on roofing sheets, solar systems, borehole drilling, or earthmoving haulage.</p>
              </div>
              <div className="flex gap-4">
                <a href="tel:0776156749" className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition">
                  <FaPhoneAlt /> 077 615 6749
                </a>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Joetom Engineers. Building Excellence, Earthmoving, Borehole Drilling & Supplies.</p>
        </div>
      </footer>

    </div>
  );
}