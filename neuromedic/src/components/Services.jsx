const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Emergencias Neurológicas',
    desc: 'Atención inmediata para emergencias del sistema nervioso: ACV, convulsiones, traumatismo craneal y otros.',
    tag: 'Urgente',
    tagColor: '#ff5800',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Electroencefalograma (EEG)',
    desc: 'Registro de la actividad eléctrica cerebral para diagnóstico de epilepsia y otros trastornos.',
    tag: 'Diagnóstico',
    tagColor: '#00489c',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Neuroimagen',
    desc: 'Tomografía y resonancia magnética para visualización detallada del cerebro y médula espinal.',
    tag: 'Imagen',
    tagColor: '#6366f1',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Consulta Neurológica',
    desc: 'Evaluación clínica completa, historial médico detallado y plan de tratamiento personalizado.',
    tag: 'Consulta',
    tagColor: '#059669',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Toxina Botulínica',
    desc: 'Aplicación terapéutica de Botox para migraña crónica, espasticidad y trastornos del movimiento.',
    tag: 'Terapia',
    tagColor: '#7c3aed',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electromiografía (EMG)',
    desc: 'Estudio de conducción nerviosa y músculo para diagnóstico de neuropatías y miopatías.',
    tag: 'Diagnóstico',
    tagColor: '#00489c',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 overflow-hidden" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-blue-50 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide" style={{color:'#00489c', backgroundColor:'#e8f0ff'}}>
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nuestros <span style={{color:'#ff5800'}}>Servicios</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios neurológicos con equipamiento moderno y personal altamente capacitado.
          </p>
        </div>

        {/* Alternating layout */}
        <div className="space-y-8">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal group flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-6 items-center bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 delay-${Math.min((i + 1) * 100, 500)}`}
            >
              {/* Icon side */}
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${svc.tagColor}15, ${svc.tagColor}30)`, color: svc.tagColor }}>
                {svc.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">{svc.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: svc.tagColor }}>
                    {svc.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-base leading-relaxed">{svc.desc}</p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a
                  href={`https://wa.me/51978516870?text=${encodeURIComponent(`Hola, quisiera consultar sobre el servicio de ${svc.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full border-2 transition-all duration-200 hover:text-white hover:scale-105"
                  style={{ borderColor: svc.tagColor, color: svc.tagColor }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = svc.tagColor}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  Consultar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
