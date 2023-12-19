import { Book } from '../../types'

interface ListBookProps {
  books: Book[]
  onDelete: (id: number) => void
}

export function ListBooks({ books, onDelete }: ListBookProps) {
  function handleDelete(id: number) {
    if (confirm('Deseja realmente excluir?')) {
      onDelete(id)
    }
  }

  return (
    <div>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            padding: '16px',
            display: 'flex',
          }}
        >
          <h1>{book.title}</h1>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
