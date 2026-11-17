import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  // État principal : la liste des livres
  const [books, setBooks] = useState([
    { id: 1, titre: 'Algorithmique et programmation', auteur: 'Thomas Cormen', estDisponible: true },
    { id: 2, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', estDisponible: true },
    { id: 3, titre: 'Une si longue lettre', auteur: 'Mariama Bâ', estDisponible: false },
    { id: 4, titre: 'Réseaux informatiques', auteur: 'Andrew Tanenbaum', estDisponible: true },
  ])

  // États du formulaire (champs contrôlés)
  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')

  // Nombre de livres disponibles, recalculé à chaque rendu (temps réel)
  const nbDisponibles = books.filter((book) => book.estDisponible).length

  // Inverse la disponibilité du livre cliqué
  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, estDisponible: !book.estDisponible } : book
      )
    )
  }

  // Ajout d'un livre via le formulaire
  const handleSubmit = (e) => {
    e.preventDefault() // empêche le rechargement de la page

    if (titre.trim() === '' || auteur.trim() === '') return

    const nouveauLivre = {
      id: Date.now(), // identifiant unique
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true, // disponible par défaut
    }

    setBooks([...books, nouveauLivre])
    setTitre('')
    setAuteur('')
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px' }}>
      <h1>
        📚 Bibliothèque universitaire : {nbDisponibles} livre
        {nbDisponibles > 1 ? 's' : ''} disponible{nbDisponibles > 1 ? 's' : ''} sur {books.length}
      </h1>

      {/* Formulaire d'ajout */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
          border: '1px dashed #94a3b8',
          borderRadius: '12px',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Ajouter un livre</h2>
        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#ffffff',
            backgroundColor: '#16a34a',
          }}
        >
          Ajouter
        </button>
      </form>

      {/* Liste des livres avec .map() et key */}
      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}
    </div>
  )
}

export default App
