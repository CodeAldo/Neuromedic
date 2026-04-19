const specialties = [
  {
    icon: '🧠',
    title: 'Neurología General',
    desc: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
  },
  {
    icon: '💊',
    title: 'Epileptología',
    desc: 'Manejo especializado de epilepsia y trastornos convulsivos en todas las edades.',
  },
  {
    icon: '😴',
    title: 'Medicina del Sueño',
    desc: 'Diagnóstico y tratamiento de insomnio, apnea del sueño y narcolepsia.',
  },
  {
    icon: '🤕',
    title: 'Cefaleas y Migraña',
    desc: 'Tratamiento especializado para jaquecas crónicas y dolores de cabeza recurrentes.',
  },
  {
    icon: '🧬',
    title: 'Neurología Vascular',
    desc: 'Prevención y tratamiento de accidentes cerebrovasculares (ACV) e ictus.',
  },
  {
    icon: '🤲',
    title: 'Neurología Periférica',
    desc: 'Diagnóstico de neuropatías, polineuropatías y enfermedades neuromusculares.',
  },
  {
    icon: '🎯',
    title: 'Neurología Cognitiva',
    desc: 'Evaluación y tratamiento del deterioro cognitivo, demencia y Alzheimer.',
  },
  {
    icon: '⚡',
    title: 'Electroencefalografía',
    desc: 'Registro y análisis de la actividad eléctrica cerebral para diagnóstico preciso.',
  },
  {
    icon: '🦋',
    title: 'Neuroinfectología',
    desc: 'Manejo de infecciones del sistema nervioso como meningitis y encefalitis.',
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Nuestras especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Áreas de <span style={{color:'#00489c'}}>Especialización</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Contamos con especialistas altamente calificados en diversas ramas de la neurología moderna.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((sp, i) => (
            <div
              key={sp.title}
              className={`reveal-zoom group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover cursor-default delay-${Math.min((i + 1) * 100, 600)}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #e8f0ff, #cce0ff)' }}>
                  {sp.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-primary transition-colors duration-200" style={{}}>
                    {sp.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{sp.desc}</p>
                </div>
              </div>
              {/* Bottom accent */}
              <div className="h-1 mt-5 rounded-full overflow-hidden bg-gray-100">
                <div className="h-full w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #00489c, #ff5800)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 reveal rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #001f4d, #00489c)' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white opacity-5" />
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-3">¿Necesitas orientación sobre tu condición?</h3>
            <p className="text-white/70 mb-6">Agenda una consulta y nuestro especialista evaluará tu caso personalmente.</p>
            <a
              href="https://wa.me/51978516870?text=Hola,%20necesito%20orientación%20sobre%20mi%20condición%20neurológica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: '#ff5800' }}
            >
              Solicitar Evaluación Neurológica
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
