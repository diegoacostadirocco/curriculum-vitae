import React from 'react';

const ListOf = name => { 
    
    const mappedList = name.map(
        (objMapped) => 
        <div key={`${objMapped.value}_${objMapped.institute}`}>{objMapped.value} -{objMapped.institute}</div>);
    return (
        <div>
            {mappedList}
        </div>
        );
    }

export default ListOf;