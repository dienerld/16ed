import React, { useState } from 'react'
import * as S from './styles'
import { Book } from './types'
import { useBooks } from '../../contexts/BooksContext'
import { httpClient } from '../../api/client'

const emptyBook: Book = {
  id: 0,
  title: '',
  authorId: '',
  description: '',
  genre: '',
  publishYear: '',
  registerDate: '',
}

export function Home() {
  const [book, setBook] = useState<Book>(emptyBook)

  const { addBook } = useBooks()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setBook((prevState) => ({ ...prevState, [name]: value }))
  }

  async function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (book.id !== 0) {
      // atualizar
      // const newBooks = [...books]
      // const bookIdx = books.findIndex((b) => b.id === book.id)
      // newBooks[bookIdx] = book
      // setBooks(newBooks)
    } else {
      // // criar novo
      // addBook({
      //   ...book,
      //   registerDate: new Date().toISOString().split('T')[0],
      //   id: Date.now(),
      // })
      // /------------------------------
      // fazer req api
      try {
        await httpClient<Book>('/books', {
          body: JSON.stringify(book),
          method: 'POST',
        })
      } catch (err) {
        console.log(err)
      }
    }

    setBook(emptyBook)
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={saveBook}>
        <S.Input
          placeholder="Título"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <S.Input
          placeholder="Autor"
          onChange={handleChange}
          name="authorId"
          value={book.authorId}
        />
        <label>
          Ano de publicação
          <S.Input
            placeholder="Ano de publicação"
            onChange={handleChange}
            name="publishYear"
            type="date"
            value={book.publishYear}
            max={new Date().toISOString().split('T')[0]}
          />
        </label>
        <S.Input
          placeholder="Gênero"
          onChange={handleChange}
          name="genre"
          value={book.genre}
        />
        <S.Input
          placeholder="Breve descrição"
          onChange={handleChange}
          name="description"
          value={book.description}
        />

        <S.Button type="submit">
          {book.id === 0 ? 'Cadastrar' : 'Atualizar'}
        </S.Button>
      </S.Form>
    </S.Wrapper>
  )
}
