import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-800">
      <Navbar />
      
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">Tentang KopiSenja</h1>
        
        {/* Section Cerita */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="md:w-1/2 relative h-64 w-full">
             <Image 
               src="https://images.unsplash.com/photo-1442512595367-4273250983a6?auto=format&fit=crop&w=800&q=80" 
               alt="Barista brewing coffee" 
               fill
               className="rounded-lg object-cover shadow-lg"
             />
          </div>
          <div className="md:w-1/2 space-y-4 text-lg text-stone-600 leading-relaxed">
            <p>
              Berdiri sejak 2024, <strong>KopiSenja</strong> lahir dari kecintaan kami terhadap aroma kopi di sore hari. Kami percaya bahwa secangkir kopi bukan hanya minuman, tapi teman bercerita.
            </p>
            <p>
              Kami bekerja sama langsung dengan petani lokal di Aceh dan Toraja untuk memastikan setiap biji kopi yang kami sangrai memiliki kualitas terbaik dan rasa yang otentik.
            </p>
          </div>
        </div>

        {/* Section Fasilitas / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-amber-600 mb-2">Locally Sourced</h3>
                <p>Mendukung petani kopi lokal Indonesia.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-amber-600 mb-2">Cozy Space</h3>
                <p>Tempat nyaman dengan WiFi kecepatan tinggi.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-amber-600 mb-2">Expert Barista</h3>
                <p>Disajikan oleh tangan ahli yang bersertifikat.</p>
            </div>
        </div>
      </main>
      
      {/* Copy paste footer dari page.tsx utama atau buat Komponen Footer terpisah */}
    </div>
  );
}   