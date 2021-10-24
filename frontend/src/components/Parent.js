import React, { useState } from 'react';
import Child from './Child';

export default function Parent () {
    const [data, setData]= useState('');
    const parentToChild = ()=> {
        setData("Aqui esta el dato del componente Parent para el componente Child");
    }
    return(
        <div className= "App">
            <Child parentToChild={data}/>
            <div>
                <button primary onClick= {()=>parentToChild()}>Click Parent</button>
            </div>
        </div>
    )
}