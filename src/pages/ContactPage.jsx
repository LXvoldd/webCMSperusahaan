import PageHeader from '../components/shared/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import MapLocation from '../components/contact/MapLocation'

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami."
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Kirim Pesan</h2>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <MapLocation />
      
      <section className="py-12 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Butuh Bantuan Cepat?</h3>
          <p className="text-gray-600">Hubungi kami melalui WhatsApp di <strong>+62 812 3456 7890</strong></p>
        </div>
      </section>
    </main>
  )
}