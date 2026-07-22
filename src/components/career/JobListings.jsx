import { useState } from 'react'
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa'

const jobs = [
  {
    id: 1,
    title: 'Site Engineer (Struktur & Sipil)',
    department: 'Engineering',
    location: 'Cikarang, Jawa Barat',
    type: 'Full-time',
    salary: 'Kompetitif',
    description: 'Kami mencari Site Engineer berpengalaman dalam proyek konstruksi struktur baja dan sipil pabrik.',
    requirements: [
      'Pendidikan S1 Teknik Sipil / Konstruksi',
      'Min. 3 tahun pengalaman di lokasi proyek industri',
      'Memahami AutoCad & SAP2000',
      'Memiliki sertifikasi SKA / K3'
    ]
  },
  {
    id: 2,
    title: 'HSE Officer (K3L)',
    department: 'Safety / K3',
    location: 'Karawang, Jawa Barat',
    type: 'Full-time',
    salary: 'Kompetitif',
    description: 'HSE Officer untuk memastikan seluruh pekerjaan di lapangan sesuai prosedur K3 berstandar ISO.',
    requirements: [
      'Sertifikat Ahli K3 Umum Kemenaker aktif',
      'Min. 2 tahun pengalaman di proyek EPC',
      'Memahami JSA & Risk Assessment',
      'Ketegasan dan komunikasi yang baik'
    ]
  },
  {
    id: 3,
    title: 'Procurement Specialist',
    department: 'Logistik',
    location: 'Jakarta Head Office',
    type: 'Full-time',
    salary: 'Kompetitif',
    description: 'Procurement Specialist untuk mengelola rantai pasok material baja dan komponen mesin.',
    requirements: [
      'Pendidikan S1 Teknik / Manajemen',
      'Jaringan supplier material baja yang luas',
      'Keahlian negosiasi dan analisis harga',
      'Min. 2 tahun pengalaman di EPC'
    ]
  },
  {
    id: 4,
    title: 'Project Manager (EPC)',
    department: 'Management',
    location: 'Jakarta / On-site',
    type: 'Full-time',
    salary: 'Kompetitif',
    description: 'Project Manager senior untuk memimpin keseluruhan siklus proyek EPC hingga penyerahan.',
    requirements: [
      'Min. 5 tahun pengalaman sebagai Project Manager',
      'Sertifikasi PMP / Ahli Manajemen Proyek',
      'Rekam jejak sukses eksekusi proyek industri',
      'Kepemimpinan & manajemen risiko yang kuat'
    ]
  }
]

const departments = ['Semua', 'Engineering', 'Safety / K3', 'Logistik', 'Management']

export default function JobListings() {
  const [activeDepartment, setActiveDepartment] = useState('Semua')
  const [selectedJob, setSelectedJob] = useState(null)

  const filteredJobs = activeDepartment === 'Semua'
    ? jobs
    : jobs.filter(job => job.department === activeDepartment)

  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Lowongan Pekerjaan
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Bergabunglah dengan tim profesional PT AKMI KARYA GLOBAL dan kembangkan karir industri Anda.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeDepartment === dept
                  ? 'bg-[#ff6b00] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-orange-50 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job List */}
        <div className="space-y-3 max-w-3xl mx-auto text-left">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-orange-400" /> {job.location}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1 text-orange-400" /> {job.type}
                    </span>
                    <span className="flex items-center">
                      <FaMoneyBillWave className="mr-1 text-orange-400" /> {job.salary}
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-auto inline-block px-3 py-1 bg-orange-50 text-[#ff6b00] rounded-lg text-xs font-bold">
                  {job.department}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)}>
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 text-left shadow-xl" onClick={e => e.stopPropagation()}>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">{selectedJob.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4 text-xs font-semibold">
                <span className="px-2.5 py-1 bg-orange-100 text-[#ff6b00] rounded-md">{selectedJob.department}</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">{selectedJob.location}</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">{selectedJob.type}</span>
              </div>

              <p className="text-xs text-slate-600 mb-4 leading-relaxed">{selectedJob.description}</p>

              <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Persyaratan Utama:</h3>
              <ul className="space-y-1.5 mb-6">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-600">
                    <span className="text-[#ff6b00] mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button className="bg-[#ff6b00] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#e05e00] transition-colors flex-1 shadow-sm">
                  Lamar Pekerjaan Ini
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}