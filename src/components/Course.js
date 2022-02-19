import React, { Component } from 'react';
import { King } from './King';
import './Kings.css';
export class Course extends Component {
    static displayName = Course.name;
   
    constructor(props) {
        super(props);
        this.buyKing = this.buyKing.bind(this);
        this.state = {
            
            loading: true,
            total: 0,
            reyes: [
                {
                    nombre: "Atanagildo",
                    color: "darkolivegreen",
                    precio: 178
                }, {
                    nombre: "Ervigio",
                    color: "crimson",
                    precio: 169
                }, {
                    nombre: "Ataulfo",
                    color: "peru",
                    precio: 81
                }, {
                    nombre: "Leogivildo",
                    color: "darkmagenta",
                    precio: 126
                }, {
                    nombre: "Recesvinto",
                    color: "royalblue",
                    precio: 141
                }, {
                    nombre: "Sisebuto",
                    color: "teal",
                    precio: 69
                }]
        };

    }
    handleCallback = (childData) => {
        const sum = Number(this.state.total)  + Number(childData);
        this.setState({ total: sum })
    }
    buyKing(kingData) {
        console.log('clicked on child. In parent: ');
        
    }
    
    
    //buy king
    //www.html6.es/curso/misReyes.txt
    //www.html6.es/img/rey_atanagildo.png...

 
    render() {
            
        console.log(this.state.reyes[0])
        
        return (
                        
            <div >
                <div>
                <h1>rey</h1>
                <h3>Total:{this.state.total} €</h3>
                </div>
                <div  className="kings">
                {this.state.reyes.map((rey, index) => (
                    <King key={index} parentCallback={this.handleCallback} rey={rey}  />
                ))}
                </div>
              
            </div>



        );
    }
}
