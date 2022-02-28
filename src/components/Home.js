import React, { Component } from 'react';
import { useState } from "react";
import { Login } from './Login';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
      super(props);
      this.setToken = this.setToken.bind(this);
        this.state = {
            token: null
        };
    }
    setToken=(t)=>{
        this.setState({ token: t });
        this.setState(this.state);
    }

    render() {
        let logForm;
        if (!this.state.token) {
            logForm = <Login setToken={this.setToken} />;
        }
        else {
            logForm = <></>;
        }

      
    return (
      <div>
            <h1>{this.state.token}</h1>
        <br/>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                <li><a href='https://www.mongodb.com/'>MongoDB</a> for database </li>
            </ul>
            { logForm}
            {console.log("in home"+this.state.token)}
          
      </div>
    );
  }
}
