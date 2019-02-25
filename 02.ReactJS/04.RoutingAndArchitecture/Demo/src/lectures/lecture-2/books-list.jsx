const books = [
    {
        bookId: 1,
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
    },
    {
        bookId: 2,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
    },
    {
        bookId: 3,
        title: 'Game of Throne',
        author: 'J.R.R. Martyn',
    },
];

function BookList(props) {
    const { books } = props;

    return (
        <ul>
            {
                books.map(book => (
                    <li>
                        <h5>Title: {book.title}</h5>
                        <h6>Author: {book.author}</h6>
                    </li>  
                ))
            }
        </ul>
    );
}
