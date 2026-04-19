const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Excelencia',
    desc: 'Atención de la más alta calidad con tecnología de vanguardia.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Humanidad',
    desc: 'Tratamos a cada paciente con empatía, respeto y dignidad.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Confianza',
    desc: 'Transparencia absoluta en diagnóstico y tratamiento.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovación',
    desc: 'Adoptamos los últimos avances de la medicina neurológica.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-blue-50 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide" style={{color:'#00489c'}}>
            ¿Quiénes somos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Sobre <span style={{color:'#00489c'}}>NEUROMEDIC JAÉN</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Somos una clínica neurológica privada comprometida con la salud del sistema nervioso de nuestros pacientes.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image / Visual */}
          <div className="reveal-left">
            <div className="relative">
              {/* Main visual block */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-blue-700 p-10 text-white relative" style={{background:'linear-gradient(135deg, #001f4d, #00489c)'}}>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white opacity-5 translate-y-1/3 -translate-x-1/3" />
                <div className="relative z-10">
                  {/* Brain SVG */}
                  <div className="flex justify-center mb-6">
                    <svg viewBox="0 0 120 100" className="w-40 h-32" fill="none">
                      {/* Simplified brain */}
                      <ellipse cx="60" cy="50" rx="45" ry="35" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M30 35 Q35 20 50 25 Q55 15 65 20 Q75 15 80 25 Q90 22 92 35" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M25 50 Q22 40 30 35" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
                      <path d="M95 50 Q98 40 92 35" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
                      <path d="M30 55 Q28 65 35 70 Q45 80 60 78 Q75 80 85 70 Q92 65 90 55" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
                      <path d="M45 50 Q50 45 55 50 Q60 55 65 50 Q70 45 75 50" stroke="rgba(255,88,0,0.8)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M40 40 Q45 35 50 38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
                      <path d="M70 38 Q75 35 80 40" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
                      <circle cx="60" cy="85" r="4" fill="rgba(255,88,0,0.8)"/>
                      <line x1="60" y1="78" x2="60" y2="81" stroke="rgba(255,88,0,0.8)" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-white">10+</p>
                    <p className="text-white/70 text-sm mt-1">Años cuidando tu salud neurológica</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                      <p className="text-2xl font-bold text-orange-300">5,000+</p>
                      <p className="text-white/70 text-xs mt-1">Pacientes atendidos</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                      <p className="text-2xl font-bold text-orange-300">98%</p>
                      <p className="text-white/70 text-xs mt-1">Nivel de satisfacción</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor:'#fff0e8'}}>
                    <svg className="w-6 h-6" fill="#ff5800" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Tecnología avanzada</p>
                    <p className="text-gray-500 text-xs">Diagnóstico de precisión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal-right">
            {/* Mission */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor:'#e8f0ff'}}>
                  <svg className="w-5 h-5" fill="#00489c" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{color:'#00489c'}}>Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-13 text-base">
                Somos un equipo multidisciplinario altamente especializado que brinda atención a pacientes con enfermedades neurológicas y patologías asociadas, prevención, atención y rehabilitación de la salud, desarrolla el talento humano, cuida el medio ambiente, con responsabilidad social.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor:'#fff0e8'}}>
                  <svg className="w-5 h-5" fill="#ff5800" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{color:'#ff5800'}}>Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                Debe contribuir a extender la atención integral altamente especializada, cumpliendo la normativa de salud en condiciones que asegure el pleno respeto de los derechos ciudadanos y contribuya al desarrollo humano.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-primary" style={{borderColor:'#00489c'}}>
              <p className="text-gray-700 italic text-base leading-relaxed">
                "En NEUROMEDIC JAÉN, cada paciente es una persona única que merece atención personalizada y de la más alta calidad."
              </p>
              <p className="text-primary font-semibold text-sm mt-3" style={{color:'#00489c'}}>— Dr. Herbert Capuñay Quiñones</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={val.title}
              className={`reveal bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 card-hover delay-${(i + 1) * 100}`}
            >
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{backgroundColor:'#e8f0ff', color:'#00489c'}}>
                {val.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-2">{val.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
