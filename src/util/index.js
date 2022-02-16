import React, {useState, useEffect} from 'react';


import React from 'react'


 

    
    const getLocalitems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
}, [items]);


