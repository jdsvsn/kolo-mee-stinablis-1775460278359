"use client";

import { useState } from 'react';

const basePath = '/kolo-mee-stinablis-1775460278359';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e: any) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/0142899656?text=${msg}`, '_blank');
  };

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const products = [{ n: 'mee kolo putih', d: 'Our signature mee kolo putih is a traditional Sarawakian dish made with tender noodles, savory sauce, and carefully selected ingredients. It\'s a must-try for anyone looking to experience the authentic taste of kolo mee.', i: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80', icon: 'domain' }, { n: 'mee kolo merah', d: 'For those who prefer a bit of spice, our mee kolo merah offers a bold and flavorful twist on the classic dish, with a special blend of herbs and spices that will leave you craving for more.', i: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1200&q=80', icon: 'architecture' }, { n: 'mee kolo kicap', d: 'Our mee kolo kicap is a unique variation that combines the richness of soy sauce with the traditional kolo mee flavors, creating a deliciously balanced taste experience that will satisfy your cravings.', i: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80', icon: 'chair' }, { n: 'wantan', d: 'Complement your kolo mee meal with our delicious wantan, made with tender wrappers and filled with savory ingredients that will add a new dimension to your dining experience.', i: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80', icon: 'eco' }, { n: 'mee pok', d: 'Our mee pok is a flavorful and satisfying dish, featuring springy noodles tossed in a mixture of sauces and topped with a variety of ingredients, making it a great alternative or addition to our kolo mee options.', i: 'https://images.unsplash.com/photo-1617196034738-26a2d4b41a1b?w=1200&q=80', icon: 'precision_manufacturing' }];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-accent/30 selection:text-primary">
      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            
            <span className="text-2xl font-black tracking-tighter text-primary font-headline">Kolo mee stinablis</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, i) => (
              <button
                key={item}
                onClick={() => scroll(item.toLowerCase())}
                className={`font-headline tracking-tight font-bold text-sm uppercase transition-all duration-300 ${i === 0 ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href={`https://wa.me/0142899656`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-md font-label text-sm font-bold hover:bg-secondary transition-colors uppercase tracking-wider"
          >
            WhatsApp
          </a>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined text-primary">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-8 pb-4 flex flex-col gap-2 bg-white/95 backdrop-blur-xl">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scroll(item.toLowerCase())} className="py-2 text-left font-headline font-bold text-sm uppercase text-on-surface/70 hover:text-primary">{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1569718212347-ce54b3bbc37d?w=1200&q=80" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-surface"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-[0.3em] text-accent font-bold mb-4 text-sm">Established Excellence</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              best kolo me <span className="text-accent">Excellence.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Kolo mee stinablis delivers visionary solutions through sustainable design and uncompromising excellence.
            </p>
            <a
              href={`https://wa.me/0142899656`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-10 py-5 rounded-md font-bold tracking-tight text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Connect via WhatsApp
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Grid */}
      <section id="about" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Our Legacy</span>
                <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tighter">Architects of Excellence and Innovation.</h2>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Kolo mee stinablis is a food establishment dedicated to serving the best kolo mee dishes with a focus on quality and customer satisfaction. Our mission is to provide a welcoming atmosphere where customers can enjoy their favorite kolo mee meals. With a variety of options to choose from, we cater to diverse tastes and preferences.
              </p>
              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="font-headline font-bold text-primary">Vision</h4>
                  <p className="text-sm text-on-surface-variant">To become the leading kolo mee destination, renowned for our commitment to quality, customer first approach, and exceptional dining experience.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline font-bold text-primary">Mission</h4>
                  <p className="text-sm text-on-surface-variant">To deliver high-quality kolo mee products, prioritize customer needs, and foster a community that shares our passion for great food and excellent service.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline font-bold text-primary">Customer First</h4>
                  <p className="text-sm text-on-surface-variant"> Customer First: We prioritize our customers\' needs, ensuring that every individual who walks through our doors feels valued and appreciated.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline font-bold text-primary">Quality</h4>
                  <p className="text-sm text-on-surface-variant">Quality: We are dedicated to serving the highest quality kolo mee dishes, using only the freshest ingredients and adhering to strict culinary standards.</p>
                </div>
              </div>
            </div>
            {/* Asymmetric Image Gallery */}
            <div className="lg:col-span-7 grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
              <div className="col-span-8 row-span-4 overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80" alt="About 1" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-4 row-span-3 overflow-hidden rounded-xl bg-surface-container">
                <img src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1200&q=80" alt="About 2" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-2 overflow-hidden rounded-xl mt-4">
                <img src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1200&q=80" alt="About 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services - Bento Grid */}
      <section id="services" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Core Solutions</span>
            <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tighter">Engineered for Performance.</h2>
            <p className="text-on-surface-variant">Tailored services that bridge the gap between conceptual design and reality.</p>
          </div>
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Item 1 - Large */}
            <div className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-outline/10 flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">{products[0]?.icon}</span>
                <h3 className="text-2xl font-bold font-headline">{products[0]?.n}</h3>
                <p className="text-on-surface-variant">{products[0]?.d}</p>
              </div>
              <div className="flex-1 w-full h-64 overflow-hidden rounded-lg">
                <img src={products[0]?.i} alt={products[0]?.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            {/* Item 2 - Featured */}
            <div className="md:col-span-2 bg-primary text-white p-8 rounded-xl shadow-xl flex flex-col justify-between group overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="material-symbols-outlined text-accent text-4xl">{products[1]?.icon}</span>
                <h3 className="text-xl font-bold font-headline">{products[1]?.n}</h3>
                <p className="text-white/70 text-sm">{products[1]?.d}</p>
              </div>
              <div className="mt-8 relative z-10">
                <img src={products[1]?.i} alt={products[1]?.n} className="w-full h-32 object-cover rounded opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {/* Items 3-5 - Standard */}
            {products.slice(2).map((p, i) => (
              <div key={i} className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-outline/10 group">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img src={p.i} alt={p.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{p.icon}</span>
                <h3 className="text-xl font-bold font-headline mb-2">{p.n}</h3>
                <p className="text-on-surface-variant text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Premium Dark Card */}
      <section id="contact" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="flex-1 p-12 lg:p-20 bg-secondary">
              <h2 className="font-headline text-4xl font-extrabold mb-8 tracking-tighter">Initiate a Project.</h2>
              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-accent font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border-none focus:ring-1 focus:ring-accent rounded px-4 py-3 text-white placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-accent font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border-none focus:ring-1 focus:ring-accent rounded px-4 py-3 text-white placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-accent font-bold">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border-none focus:ring-1 focus:ring-accent rounded px-4 py-3 text-white placeholder:text-white/20"
                    placeholder="Describe your vision..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-primary py-4 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-2"
                >
                  Send to WhatsApp
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
            {/* Business Info */}
            <div className="lg:w-1/3 p-12 lg:p-20 flex flex-col justify-between border-l border-white/5">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-accent text-3xl">location_on</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">Location</h4>
                    <p className="text-white/60 text-sm leading-relaxed">123 Main St</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-accent text-3xl">mail</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">Email</h4>
                    <p className="text-white/60 text-sm">judeparu123@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-accent text-3xl">call</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">Direct Line</h4>
                    <p className="text-white/60 text-sm">0142899656</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary w-full py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center text-center md:text-left">
          <div>
            <div className="text-xl font-bold text-white mb-4">Kolo mee stinablis</div>
            <p className="text-white/60 text-sm leading-relaxed">best kolo me</p>
          </div>
          <div className="flex justify-center md:justify-center gap-6">
            
            
            <a href={`https://wa.me/0142899656`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">WhatsApp</a>
          </div>
          <div className="md:text-right">
            <p className="text-white/60 text-sm leading-relaxed">
              &copy; {new Date().getFullYear()} Kolo mee stinablis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
