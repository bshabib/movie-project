import React from 'react';
import Table from '../common/table.component';

const MoviesTable = ({ movies, onSort, sortColumn }) => {
    const columns = [
        { path: 'posterurl', label: 'Poster', content: movie => <img style={{ width: '40px', height: 'auto' }} src={movie.posterurl}/> },
        { path: 'title', label: 'Title', content: movie => movie.title } ,
        { path: 'imdbRating', label: 'Rating', content: movie => movie.imdbRating },
        { path: 'your_rating', label: 'Your rating', content: movie => movie.your_rating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i> }
    ];

    return (
        <Table items={movies} columns={columns} onSort={onSort} sortColumn={sortColumn} />
    );
}
 
export default MoviesTable;
