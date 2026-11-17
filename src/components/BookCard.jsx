// Composant enfant : reçoit ses données via les props (lecture seule)
function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div
      style={{
        border: '1px solid #cbd5e1',
        borderRadius: '12px',
        padding: '16px',
        margin: '12px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      }}
    >
      <h3 style={{ margin: '0 0 4px 0' }}>{titre}</h3>
      <p style={{ margin: '0 0 12px 0', color: '#475569' }}>{auteur}</p>

      {/* Affichage conditionnel du statut */}
      <p style={{ margin: '0 0 12px 0', fontWeight: 'bold' }}>
        {estDisponible ? '🟢 Disponible' : '🔴 Emprunté'}
      </p>

      <button
        onClick={onClickEmprunt}
        style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#ffffff',
          backgroundColor: estDisponible ? '#2563eb' : '#dc2626',
        }}
      >
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  )
}

export default BookCard
