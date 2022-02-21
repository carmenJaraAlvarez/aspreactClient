import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router, useRoutes } from 'react-router';
import { Layout } from './components/Layout';
import { NavMenu } from './components/NavMenu';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Cats } from './components/Cats';
import { Course } from './components/Course';
import { Joke } from './components/Joke';
import { Admin } from './components/Admin';
import './custom.css';
import checkUserPermission from "./utils/checkUserPermission";


export default class App extends Component {
    static displayName = App.name;
    

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true, user: { roles: ["admin"] }};
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderForecastsTable(this.state.forecasts);

        return (
            <Layout>
                <Routes>
                <Route exact path='/' element={<Home/>} />
                    <Route path='/counter' element={<Counter/>} />
                    <Route path='/fetch-data' element={<FetchData/>} />
                    <Route path='/cats' element={<Cats />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/joke' element={<Joke />} />
                    {checkUserPermission(this.state.user, "route.admin") ?
                        (<Route exact path='/admin' element={<Admin />} />)
                            :
                            (<Route exact path = '/' element = { <Home/>} />)}
   

                </Routes>
            </Layout>

        );
    }

    async populateWeatherData() {
        const response = await fetch('https://localhost:7114/WeatherForecast');
        console.log(response.status);
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
