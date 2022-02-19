import React, { Component } from 'react';
import { useEffect } from 'react';

export class Cats extends Component {
    static displayName = Cats.name;

    constructor(props) {
        super(props);
        this.state = { cat: null, loading: true };

    }
    
  getCat = async () => {
      try {
      const uri = "https://localhost:7114/api/cat";
      const response = await fetch(uri);
          const data = await response.json();
          
          const url = data.url;
          console.log('in getCat'+url);
          this.setState({ cat: url, loading: false });
         

	  
	  }catch(err){
		
		console.log(err);
	  }

     
    }
    showCat(cat) {
        return (
            <div>
            <h3>In show Cat</h3>
                <img src={this.state.cat} />
                </div>
        );
    }
       
    
   
    componentDidMount() {
        this.getCat().then(
            console.log('indimount'+this.state.cat)
        );
        
    }
    render() {
       
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.showCat(this.state.cat);
        console.log('rendering' + this.state.cat)
        

        return (

            <div>
                <h1>Cats</h1>
               
                {contents}

            </div>



        );
    }
}
