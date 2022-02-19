import React, { Component } from 'react';
import { useEffect } from 'react';

export class Joke extends Component {
    static displayName = Joke.name;

    constructor(props) {
        super(props);
        this.state = { s: "", loading: true, loadingAll: true, v: [] };
    }
    reloadJoke=()=> {
        console.log('clicked');
        this.asyncFetch();
    }
   
    componentDidMount(){
        this.asyncFetch();
    }

    asyncFetch = async () => {

        try {
            const uri = "https://api.icndb.com/jokes/random";
            const response = await fetch(uri);
            const data = await response.json();

            const joke = data.value.joke;
            console.log('in Joke' + joke);
            
            this.setState({ loading: false });
            this.setState({ s: joke });


        } catch (err) {

            console.log(err);
        }
    }
    asyncFetch2 = async () => {
        try {
            const uri = "https://api.icndb.com/jokes";
            const response = await fetch(uri);
            const data = await response.json();

            const allJokes = data.value;
            console.log('in all');
            console.log(allJokes);

            this.setState({ loadingAll: false });
            const a = [...allJokes];
            console.log(a);
            this.setState({ v: a });
            console.log("in asyncFetch2");
            console.log(this.state.v);
            

        } catch (err) {

            console.log(err);
        }
    }

    showJoke = () => {
        let s2 = this.state.s
        let s3 = s2.replace(/&quot;/gm, '"')
        return (
           
            <p>{s3}</p>)

    }
    renderAll = () => {
        console.log("in render all");
        console.log(this.state.v.length);
        
        return (
            this.state.v.
                filter(j=>j.id<8).
                map((j) => (
                    <div key={j.id} className="card" style={{ margin: 5, backgroundColor:'lightgrey' }} >
                    <div className="card-body">
                            <p>{j.id} {j.joke.toUpperCase()}</p>
                    </div>
                </div>

            ))
        )

    }

    render() {
       
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.showJoke();
        
        let contents2 = this.state.loadingAll
            ? <p><em></em></p>
            : this.renderAll();

        return (

            <div>
                <h1>Joke</h1>
               
                {contents}
                
            <br/>
                <button className="btn btn-primary" onClick={this.reloadJoke}>another one</button>
                <br /><br />
                <button className="btn btn-primary" onClick={this.asyncFetch2}>all</button>
                
                <div className="container" style={{ margin: 20 }} >
                {contents2}
                </div>
            </div>



        );
    }
}
