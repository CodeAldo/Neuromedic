import { useEffect, useState } from 'react';
import doctorPhoto from '../assets/doctor-capunay-2.png';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001f4d 0%, #00489c 50%, #0066cc 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-white" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 bg-white" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 bg-white" />
        {/* Medical cross pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cross" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="35" y="20" width="10" height="40" fill="white"/>
              <rect x="20" y="35" width="40" height="10" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cross)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Atención Neurológica Especializada</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              NEUROMEDIC
              <span className="block text-orange-400">JAÉN</span>
            </h1>

            <p className={`text-xl sm:text-2xl text-white/80 font-light italic mb-6 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              "Cuidando lo más valioso que tienes: TU CEREBRO"
            </p>

            {/* Doctor info */}
            <div className={`flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-white/20 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor:'#ff5800'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base">Dr. Herbert Capuñay Quiñones</p>
                <p className="text-orange-300 font-semibold text-sm">Neurólogo Especialista</p>
                <div className="flex gap-3 mt-1">
                  <span className="text-white/70 text-xs">CMP: 34118</span>
                  <span className="text-white/40 text-xs">|</span>
                  <span className="text-white/70 text-xs">RNE: 30533</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="https://wa.me/51978516870?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20neurológica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40 active:scale-95"
                style={{ backgroundColor: '#ff5800' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agenda tu Cita
              </a>
              <a
                href="https://wa.me/51978516870?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios%20neurológicos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/50 hover:bg-white/10 transition-all duration-300 hover:border-white hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contáctanos
              </a>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 mt-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { value: '10+', label: 'Años de exp.' },
                { value: '5,000+', label: 'Pacientes' },
                { value: '98%', label: 'Satisfacción' },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white/10 rounded-xl py-3 px-2 border border-white/10">
                  <p className="text-white font-extrabold text-xl">{stat.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className={`hidden lg:flex flex-col items-center justify-center relative transition-all duration-1200 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Doctor illustration */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-110" />
              {/* Doctor card */}
              <div className="relative bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl animate-float">
                <div className="text-center">
                  {/* Large medical icon */}
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden border-4 border-white/20 shadow-xl"
                    style={{ background: 'linear-gradient(135deg, rgba(255,88,0,0.3), rgba(0,72,156,0.5))' }}>
                    <img
                      src={doctorPhoto}
                      alt="Dr. Herbert Capuñay Quiñones"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-bold text-xl">Dr. Herbert Capuñay Q.</p>
                  <p className="text-orange-300 font-medium text-sm mt-1">Neurólogo Especialista</p>

                  {/* Certification badges */}
                  <div className="flex justify-center gap-3 mt-4">
                    <div className="bg-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold border border-white/30">
                      CMP 34118
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold border border-white/30">
                      RNE 30533
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -left-16 top-8 bg-white rounded-xl p-3 shadow-xl border border-gray-100 animate-float" style={{animationDelay:'0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 text-xs font-bold">Certificado</p>
                    <p className="text-gray-500 text-xs">Neurólogo</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-14 bottom-12 bg-white rounded-xl p-3 shadow-xl border border-gray-100 animate-float" style={{animationDelay:'1s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor:'#fff0e8'}}>
                    <svg className="w-4 h-4" fill="#ff5800" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 text-xs font-bold">5.0 ★ Rating</p>
                    <p className="text-gray-500 text-xs">Pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
