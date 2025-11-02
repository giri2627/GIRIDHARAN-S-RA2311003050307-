
import React, { useState } from 'react';
import { Book } from './types';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const initialBooks: Book[] = [
  { book_id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
  { book_id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.50 },
  { book_id: 3, title: '1984', author: 'George Orwell', price: 9.75 },
];

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Omit<Book, 'book_id'>) => {
    const newBook: Book = {
      ...book,
      book_id: Date.now(), // Simple unique ID generation
    };
    setBooks(prevBooks => [newBook, ...prevBooks]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <header className="bg-slate-800/50 backdrop-blur-sm p-4 shadow-lg border-b border-slate-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
            Book Registry
          </h1>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-300">GIRIDHARAN S</p>
            <p className="text-xs text-slate-400">RA2311003050307</p>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookForm onAddBook={addBook} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <BookList books={books} />
          </div>
        </div>
      </main>
      
      <footer className="text-center p-4 mt-8 text-slate-500 text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Book Registry App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
