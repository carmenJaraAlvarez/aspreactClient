import React, { Component } from 'react';
import { useState } from "react";
import { Login } from './Login';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
        super(props);
        this.state = {
            token: null
        };
    }
    setToken=(t)=>{
        this.setState({ token: t});
    }
    render() {
      
    return (
      <div>
        <h1>Hello, world!</h1>
        <br/>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                <li><a href='https://www.mongodb.com/'>MongoDB</a> for database </li>
            </ul>
            <Login setToken={this.setToken} />
      </div>
    );
  }
}
