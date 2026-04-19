import doctorPhoto from '../assets/doctor-capunay.png';

const credentials = [
  { label: 'Colegio Médico', value: 'CMP: 34118' },
  { label: 'Registro Especialista', value: 'RNE: 30533' },
  { label: 'Especialidad', value: 'Neurología Clínica' },
  { label: 'Experiencia', value: '+10 años' },
];

const achievements = [
  'Médico Neurólogo egresado de la UNMSM',
  'Fellow en Neurología Vascular',
  'Especialista en Electroencefalografía',
  'Miembro de la Sociedad Peruana de Neurología',
  'Capacitación en Epilepsia avanzada',
  'Ponente en congresos nacionales de Neurología',
];

export default function Doctor() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide" style={{color:'#ff5800', backgroundColor:'#fff0e8'}}>
            Nuestro especialista
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            El <span style={{color:'#00489c'}}>Médico</span> Detrás de NEUROMEDIC
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Doctor visual */}
          <div className="reveal-left flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl relative"
                style={{ background: 'linear-gradient(160deg, #001f4d 0%, #00489c 100%)' }}>

                {/* Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="white"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="relative p-10 text-center">
                  {/* Avatar with doctor photo */}
                  <div className="w-48 h-56 mx-auto mb-6 flex items-center justify-center relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={doctorPhoto} 
                      alt="Dr. Herbert Capuñay Quiñones" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-white text-2xl font-extrabold mb-1">Dr. Herbert Capuñay</h3>
                  <p className="text-orange-300 font-semibold text-base mb-1">Quiñones</p>
                  <p className="text-white/60 text-sm mb-6">Neurólogo Especialista</p>

                  {/* Credentials badges */}
                  <div className="grid grid-cols-2 gap-3">
                    {credentials.map((c) => (
                      <div key={c.label} className="bg-white/10 rounded-xl p-3 border border-white/10 text-center">
                        <p className="text-orange-300 font-bold text-sm">{c.value}</p>
                        <p className="text-white/50 text-xs mt-0.5">{c.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-xs">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-serif leading-none" style={{color:'#ff5800'}}>"</span>
                  <p className="text-gray-700 text-xs italic leading-relaxed">Mi misión es devolverte la calidad de vida que mereces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="reveal-right">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              Dr. Herbert Capuñay Quiñones
            </h3>
            <p className="text-xl font-semibold mb-6" style={{color:'#ff5800'}}>Neurólogo Clínico Especialista</p>

            <p className="text-gray-600 leading-relaxed text-base mb-6">
              Con más de una década de experiencia en neurología clínica, el Dr. Capuñay Quiñones ha dedicado su carrera al diagnóstico y tratamiento de enfermedades complejas del sistema nervioso, brindando atención integral y personalizada a sus pacientes en la región de Jaén y el norte del Perú.
            </p>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Su formación académica de excelencia, combinada con una profunda vocación de servicio, lo convierten en una referencia indiscutible de la neurología en la región Cajamarca.
            </p>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-bold text-base mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="#00489c" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
                Formación y Logros
              </h4>
              <ul className="space-y-3">
                {achievements.map((ach) => (
                  <li key={ach} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{backgroundColor:'#e8f0ff'}}>
                      <svg className="w-3 h-3" fill="#00489c" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/51978516870?text=Hola%20Dr.%20Capuñay,%20me%20gustaría%20agendar%20una%20consulta%20neurológica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ backgroundColor: '#ff5800' }}>
                Agenda tu Cita
              </a>
              <a href="https://wa.me/51978516870?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ borderColor: '#00489c', color: '#00489c' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
