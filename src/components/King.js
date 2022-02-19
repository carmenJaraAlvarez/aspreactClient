import React, { Component } from 'react';
import { useState, useEffect, useRef } from "react";
import './Kings.css';

export class King extends Component {
    static displayName = King.name;

 
    //buy king
    //www.html6.es/curso/misReyes.txt
    //www.html6.es/img/rey_atanagildo.png...

    buy = (e)=> {
        console.log('clicked' + e.target.value);
        this.props.parentCallback(e.target.value);
        e.target.parentNode.parentNode.style.display = 'none';
        e.preventDefault();
      
    }

    render() {
        console.log('in render this:');
        console.log(this);
        return (
             
            <div className="myking"  style={{backgroundColor: this.props.rey.color }}>
              
                <h3>{this.props.rey.nombre}</h3>
                <img src={"https://www.html6.es/img/" + this.props.rey.nombre+".png" } />
                <div className="price">
                <button className="btn btn-primary" value={this.props.rey.precio} onClick={this.buy}>
                    {this.props.rey.precio} €
                    </button>
                 </div>
            </div>
         
          


        );
    }
}
