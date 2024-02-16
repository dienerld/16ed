import styled from 'styled-components'
import { ListBooks } from './components/list-books'
import { useBooks } from '../../contexts/BooksContext'
import { httpClient } from '../../api/client'
import { Book } from '../home/types'
import { useEffect, useState } from 'react'

export function ShowBooks() {
  const { deleteBook } = useBooks()
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    // console.log('inicio carregamento')
    // httpClient<Book[]>('/books')
    //   .then((response) => {
    //     console.log('response', response.data)
    //     // segunda requisição getAuthor(response.data.authorId)
    //     setBooks(response.data)
    //   })
    //   .catch((err) => alert(JSON.stringify(err)))
    // console.log('fim carregamento')

    const getBooks = async () => {
      try {
        console.log('inicio carregamento')
        const response = await httpClient<Book[]>('/books')
        console.log('response', response.data)
        // segunda requisição getAuthor(response.data.authorId)
        setBooks(response.data)
        console.log('fim carregamento')
      } catch (err) {
        console.log(err)
      }
    }

    getBooks()
  }, [])

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
