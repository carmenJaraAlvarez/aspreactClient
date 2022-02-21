import React, { Component } from 'react';
import { useEffect } from 'react';
import './Login.css';


export class Field extends Component {
    static displayName = Field.name;

    constructor(props) {
        super(props);
       
    }
   
    Field = React.forwardRef(({ label, type }, ref) => {
        return (
            <div>
                <label className='labelStyle' >{label}</label>
                <input ref={ref} type={type} className='inputStyle' />
            </div>
        );
    });

   
    
    
};
