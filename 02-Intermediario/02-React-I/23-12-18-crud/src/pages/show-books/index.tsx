import styled from 'styled-components'
import { ListBooks } from './components/list-books'
import { useBooks } from '../../contexts/BooksContext'

export function ShowBooks() {
  const { books, deleteBook } = useBooks()

  return (
    <Wrapper>
      {books.length === 0 ? (
        <p>Lista vazia</p>
      ) : (
        <ListBooks books={books} onDelete={deleteBook} onUpdate={() => {}} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
`
