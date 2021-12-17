import React from 'react';
export default function Token()
{
    const token= JSON.parse(localStorage.getItem('usuario'))   
    if (token) {        
        return {'x-access-token': token.token}
    } else{
        return {}
    }
}