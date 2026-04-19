const conditionGroups = [
  {
    category: 'Trastornos del Movimiento',
    color: '#00489c',
    conditions: [
      'Enfermedad de Parkinson',
      'Temblor esencial',
      'Distonías',
      'Síndrome de piernas inquietas',
      'Corea de Huntington',
      'Ataxias',
    ],
  },
  {
    category: 'Enfermedades Cerebrovasculares',
    color: '#ff5800',
    conditions: [
      'Accidente Cerebrovascular (ACV)',
      'Isquemia cerebral transitoria (AIT)',
      'Hemorragia cerebral',
      'Aneurisma cerebral',
      'Malformaciones arteriovenosas',
      'Trombosis venosa cerebral',
    ],
  },
  {
    category: 'Epilepsia y Convulsiones',
    color: '#7c3aed',
    conditions: [
      'Epilepsia generalizada',
      'Epilepsia focal',
      'Síndrome de West',
      'Espasmos infantiles',
      'Status epiléptico',
      'Convulsiones febriles',
    ],
  },
  {
    category: 'Dolor Neurológico',
    color: '#059669',
    conditions: [
      'Migraña crónica',
      'Cefalea tensional',
      'Neuralgia del trigémino',
      'Neuropatía diabética',
      'Dolor neuropático',
      'Herpes zóster neurológico',
    ],
  },
  {
    category: 'Enfermedades Neurodegenerativas',
    color: '#0891b2',
    conditions: [
      'Alzheimer y demencia',
      'Esclerosis lateral amiotrófica (ELA)',
      'Esclerosis múltiple',
      'Enfermedad de Huntington',
      'Demencia frontotemporal',
      'Parálisis supranuclear progresiva',
    ],
  },
  {
    category: 'Otros Trastornos Neurológicos',
    color: '#d97706',
    conditions: [
      'Vértigo y mareos',
      'Síncope neurológico',
      'Trastornos del sueño',
      'Parálisis facial (Bell)',
      'Miastenia gravis',
      'Neuropatías periféricas',
    ],
  },
];

export default function Conditions() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide" style={{color:'#ff5800', backgroundColor:'#fff0e8'}}>
            Condiciones que tratamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Patologías <span style={{color:'#00489c'}}>Neurológicas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Diagnosticamos y tratamos una amplia gama de enfermedades del sistema nervioso con precisión clínica.
          </p>
        </div>

        {/* Condition groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditionGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal-zoom bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden card-hover delay-${Math.min((gi + 1) * 100, 600)}`}
            >
              {/* Category header */}
              <div className="px-6 py-5 text-white relative overflow-hidden"
                style={{ backgroundColor: group.color }}>
                <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white opacity-10" />
                <div className="absolute -right-2 top-4 w-12 h-12 rounded-full bg-white opacity-10" />
                <h3 className="font-bold text-base relative z-10">{group.category}</h3>
              </div>

              {/* Conditions list */}
              <div className="px-6 py-4">
                <ul className="space-y-2.5">
                  {group.conditions.map((cond) => (
                    <li key={cond} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${group.color}15` }}>
                        <svg className="w-3 h-3" fill={group.color} viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      {cond}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 reveal text-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 rounded-2xl px-8 py-5 border border-blue-100">
            <svg className="w-6 h-6 flex-shrink-0" fill="#00489c" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <p className="text-gray-700 text-sm">
              <strong style={{color:'#00489c'}}>¿No encuentras tu condición?</strong> Contáctanos — evaluamos todos los trastornos neurológicos con atención personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
