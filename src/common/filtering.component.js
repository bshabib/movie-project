import React from 'react';

const Filter = ({ filteredItems, onClick, selectedItem }) => {
    return (
        <div className="col-lg-2">
            <ul className="list-group">
                {
                    filteredItems.map(item => (
                        <li 
                            key={item._id} 
                            className={selectedItem == item.name ? 'list-group-item active' : 'list-group-item'} 
                            onClick={() => onClick(item.name)}
                        > 
                            {item.name} 
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Filter;