import { ReactNode, createContext, useContext, useState } from 'react'

import { Book } from '../pages/home/types'

interface IBooksContext {
  books: Book[]
  addBook: (book: Book) => void
  deleteBook: (id: number) => void
}

const BooksContext = createContext<IBooksContext>({
  books: [] as Book[],
} as IBooksContext)

interface BooksProviderProps {
  children: ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<Book[]>([])

  function addBook(book: Book) {
    setBooks((preState) => [...preState, book])

    console.log(book)
  }

  function deleteBook(id: number) {
    const filteredBooks = books.filter((b) => b.id != id)
    setBooks(filteredBooks)
  }

  return (
    <BooksContext.Provider
      value={{ books, addBook: addBook, deleteBook: deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooks = () => useContext(BooksContext)
