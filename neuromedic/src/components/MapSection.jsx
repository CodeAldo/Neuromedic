export default function MapSection() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="reveal rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          {/* Map header */}
          <div className="flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-100">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor:'#e8f0ff'}}>
              <svg className="w-5 h-5" fill="#00489c" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm">NEUROMEDIC JAÉN</p>
              <p className="text-gray-500 text-xs">Av. Pakamuros, Jaén 06801 | Tel: 978 516 870</p>
            </div>
            <a
              href="https://maps.app.goo.gl/TgcAhyBXcKnK6exWA"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all hover:text-white"
              style={{ borderColor: '#00489c', color: '#00489c' }}
            >
              Abrir en Maps
            </a>
          </div>

          {/* Embedded Map */}
          <div className="relative w-full h-80 sm:h-96 bg-gray-100">
            <iframe
              title="NEUROMEDIC JAÉN Mapa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.234567890!2d-78.8051!3d-5.7069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16.1!3m3!1m2!1s0x91b98d8b0f2c5e5f%3A0x1234567890abcdef!2zQXYuIFBha2FtdXJvcywgSmHDqW4gMDY4MDEsIENhamFtYXJjYSwgUGVyw7o!5e0!3m2!1ses!2spe!4v1699999999999!5m2!1ses!2spe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
