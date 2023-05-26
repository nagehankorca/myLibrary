import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


const ListBooks = () => {
    const { categoriesState, booksState } = useSelector((state) => state);

    return (
        <div className="contanier my-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sıra No</th>
                        <th scope="col">Kitap Adı</th>
                        <th scope="col">Yazar Adı</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booksState.books.map((book, index) => {
                            const myCategory = categoriesState.categories.find(item => item.id === book.categoryId)
                            return (
                                <tr key={book.id} >
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.auther}</td>
                                    <td>{myCategory.name}</td>
                                    <td><Link to={`/books-detail/${book.id}`}>Detay</Link></td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div >
    )
}

export default ListBooks;