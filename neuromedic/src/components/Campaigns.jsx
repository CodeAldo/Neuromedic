import { useState } from 'react';

const campaigns = [
  {
    icon: '🧠',
    title: 'Campaña de Detección de ACV',
    period: 'Mensual',
    desc: 'Evaluación gratuita de factores de riesgo cerebrovascular. Incluye revisión de presión arterial, glucosa y perfil lipídico.',
    color: '#ff5800',
    badge: 'Activa',
  },
  {
    icon: '💊',
    title: 'Campaña Antiepiléptica',
    period: 'Trimestral',
    desc: 'Consultas a precio social para pacientes con epilepsia. Educación a familiares sobre manejo de crisis convulsivas.',
    color: '#00489c',
    badge: 'Próxima',
  },
  {
    icon: '😴',
    title: 'Día Mundial del Sueño',
    period: 'Anual - Marzo',
    desc: 'Jornada de concientización sobre trastornos del sueño. Evaluaciones gratuitas de apnea del sueño e insomnio.',
    color: '#7c3aed',
    badge: 'Anual',
  },
  {
    icon: '🤕',
    title: 'Control de la Migraña',
    period: 'Bimestral',
    desc: 'Talleres educativos y consultas especializadas para pacientes con migraña crónica y cefalea resistente.',
    color: '#059669',
    badge: 'Próxima',
  },
  {
    icon: '🏃',
    title: 'Salud Neurológica en el Adulto Mayor',
    period: 'Semestral',
    desc: 'Evaluación cognitiva, detección temprana de demencia y Parkinson para adultos mayores de 60 años.',
    color: '#0891b2',
    badge: 'Activa',
  },
  {
    icon: '👶',
    title: 'Neurología Pediátrica',
    period: 'Trimestral',
    desc: 'Evaluación del neurodesarrollo infantil. Detección temprana de retrasos neurológicos en niños de 0-12 años.',
    color: '#d97706',
    badge: 'Próxima',
  },
];

const badgeColors = {
  'Activa': { bg: '#e8fff0', text: '#059669' },
  'Próxima': { bg: '#fff0e8', text: '#ff5800' },
  'Anual': { bg: '#e8f0ff', text: '#00489c' },
};

export default function Campaigns() {
  const [active, setActive] = useState(0);

  return (
    <section id="campanhas" className="py-24 overflow-hidden" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide" style={{color:'#00489c', backgroundColor:'#e8f0ff'}}>
            Compromisos con la comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Campañas <span style={{color:'#ff5800'}}>Médicas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Realizamos campañas periódicas para acercar la salud neurológica a toda la comunidad de Jaén y la región.
          </p>
        </div>

        {/* Featured (active campaign) */}
        <div className="reveal mb-10">
          <div className="rounded-3xl p-10 text-white relative overflow-hidden" style={{background:'linear-gradient(135deg, #001f4d, #00489c)'}}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white opacity-5" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white opacity-5" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                {campaigns[active].icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-400 text-white">
                    {campaigns[active].badge}
                  </span>
                  <span className="text-white/60 text-sm">{campaigns[active].period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{campaigns[active].title}</h3>
                <p className="text-white/75 text-base leading-relaxed">{campaigns[active].desc}</p>
              </div>
              <div className="flex-shrink-0">
                <a href="https://wa.me/51978516870?text=Hola,%20me%20interesa%20participar%20en%20la%20campaña%20de%20evaluación%20neurológica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                  style={{ backgroundColor: '#ff5800' }}>
                  Participar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((camp, i) => (
            <button
              key={camp.title}
              onClick={() => setActive(i)}
              className={`reveal-zoom text-left rounded-2xl p-6 border-2 transition-all duration-300 card-hover cursor-pointer delay-${Math.min((i + 1) * 100, 600)} ${
                active === i
                  ? 'shadow-lg'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
              style={active === i ? { borderColor: camp.color, backgroundColor: `${camp.color}08` } : {}}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${camp.color}15` }}>
                  {camp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: badgeColors[camp.badge].bg, color: badgeColors[camp.badge].text }}>
                      {camp.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{camp.title}</h4>
                  <p className="text-gray-500 text-xs">{camp.period}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
