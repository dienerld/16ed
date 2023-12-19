import React, { useState } from 'react'
import * as S from './styles'
import { Book } from './types'
import { ListBooks } from './components/list-books'

const emptyBook: Book = {
  id: 0,
  title: '',
  author: '',
  description: '',
  gender: '',
  publishYear: '',
  registerDate: '',
}

export function Home() {
  const [book, setBook] = useState<Book>(emptyBook)
  const [books, setBooks] = useState<Book[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setBook((prevState) => ({ ...prevState, [name]: value }))
  }

  function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (book.id !== 0) {
      // atualizar
    } else {
      // criar novo
      setBooks((prevState) => [
        ...prevState,
        {
          ...book,
          registerDate: new Date().toISOString().split('T')[0],
          id: Date.now(),
        },
      ])
    }

    setBook(emptyBook)
  }

  function handleDelete(id: number) {
    const filteredBooks = books.filter((b) => b.id != id)
    setBooks(filteredBooks)
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
          name="author"
          value={book.author}
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
          name="gender"
          value={book.gender}
        />
        <S.Input
          placeholder="Breve descrição"
          onChange={handleChange}
          name="description"
          value={book.description}
        />

        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>

      <hr />

      <div>
        <ListBooks books={books} onDelete={handleDelete} />
      </div>
    </S.Wrapper>
  )
}
