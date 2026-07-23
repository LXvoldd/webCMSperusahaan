import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaBriefcase, FaTimes, FaArrowRight } from 'react-icons/fa'

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

  const departmentColors = {
    'Engineering': 'bg-blue-50 text-blue-600',
    'Safety / K3': 'bg-emerald-50 text-emerald-600',
    'Logistik': 'bg-amber-50 text-amber-600',
    'Management': 'bg-purple-50 text-purple-600'
  }

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
              <FaBriefcase className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lowongan Pekerjaan</h2>
              <p className="text-sm text-gray-400">Bergabunglah dengan tim profesional kami</p>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] rounded-full" />
        </div>

        {/* Filter - Desain Modern */}
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeDepartment === dept
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25'
                  : 'bg-white text-gray-600 hover:bg-[#FF6B00]/5 hover:text-[#FF6B00] border border-[#E8EAED] hover:border-[#FF6B00]/30'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedJob(job)}
              className="group bg-white rounded-2xl p-5 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#FF6B00] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[#FF6B00]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[#FF6B00]" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMoneyBillWave className="text-[#FF6B00]" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${departmentColors[job.department] || 'bg-gray-50 text-gray-600'}`}>
                    {job.department}
                  </span>
                  <FaArrowRight className="text-gray-300 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job Detail Modal - Desain Fresh */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F8F9FA] flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-[#E8EAED] transition-colors"
                >
                  <FaTimes />
                </button>

                <h2 className="text-xl font-extrabold text-gray-900 mb-3 pr-8">{selectedJob.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${departmentColors[selectedJob.department] || 'bg-gray-50 text-gray-600'}`}>
                    {selectedJob.department}
                  </span>
                  <span className="px-3 py-1 bg-[#F8F9FA] text-gray-600 rounded-lg text-xs font-medium flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[#FF6B00]" /> {selectedJob.location}
                  </span>
                  <span className="px-3 py-1 bg-[#F8F9FA] text-gray-600 rounded-lg text-xs font-medium flex items-center gap-1.5">
                    <FaClock className="text-[#FF6B00]" /> {selectedJob.type}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{selectedJob.description}</p>

                <h3 className="text-sm font-bold text-gray-900 mb-3">Persyaratan Utama</h3>
                <ul className="space-y-2 mb-6">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#E86000] transition-colors flex-1 shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40">
                    Lamar Pekerjaan Ini
                  </button>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="bg-[#F8F9FA] text-gray-600 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#E8EAED] transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}