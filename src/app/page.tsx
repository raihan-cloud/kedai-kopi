import Navbar from '@/components/Navbar';
import { products } from '@/data/products';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-800">
      <Navbar />

      {/* HERO SECTION */}
      <header className="relative h-[500px] flex items-center justify-center text-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image 
             src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80"
             alt="Coffee Background"
             fill
             style={{ objectFit: 'cover' }}
           />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-4 drop-shadow-lg">
            Rasakan Kehangatan <br/> <span className="text-amber-400">Setiap Tegukan</span>
          </h1>
          <a href="/about" className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition shadow-lg inline-block mt-4">
            Tentang Kami
          </a>
        </div>
      </header>

      {/* MENU SECTION */}
      <section id="menu" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-stone-900 mb-12 uppercase tracking-wide">
          Menu Favorit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-amber-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}