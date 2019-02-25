import React from 'react';

const BooksList = ({ books }) => {
    return (
        <ul>
            {
                books.map(({ id, title }) =>
                        (<li key={id}>{title}</li>))
            }
        </ul>
    );
}

export default BooksList;