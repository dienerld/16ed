import { Book } from '../../types'
import { Wrapper } from './styles'

interface ItemBookProps {
  book: Book
  handleDelete: (id: number) => void
  handleUpdate: (book: Book) => void
}

export function ItemBook({ book, handleDelete, handleUpdate }: ItemBookProps) {
  return (
    <Wrapper>
      <div>
        <h6>Título: {book.title}</h6>
        <span>Genero: {book.gender}</span>
      </div>
      <div>
        <span>Descrição</span>
        <p>{book.description}</p>
      </div>
      <div>
        <span>Ano de publicação: {book.publishYear}</span>
        <span>Autor: {book.author}</span>
      </div>
      <button onClick={() => handleDelete(book.id)}>Delete</button>
      <button onClick={() => handleUpdate(book)}>Editar</button>
    </Wrapper>
  )
}
