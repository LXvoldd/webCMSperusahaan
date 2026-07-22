const team = [
  { name: 'Ir. Hendra Wijaya', position: 'Direktur Utama', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
  { name: 'Agus Setiawan, S.T.', position: 'Direktur Operasional & Teknik', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  { name: 'Rina Kusuma, M.M.', position: 'Direktur Keuangan', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Budi Prakoso, S.T.', position: 'Head of Project Management', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' }
]

export default function ManagementTeam() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Tim Manajemen
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Dipimpin oleh para profesional berpengalaman di bidang teknik dan manajemen konstruksi industri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100 border-2 border-orange-100">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs text-[#ff6b00] font-medium mt-0.5">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}