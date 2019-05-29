import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  "Barcelona,es",
  "New York,us",
  "Madrid,es",
  "London,uk",
  "Washington,us"
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  };

  render() {

    return (
      <Grid>
        <Row>
          <AppBar position='sticky' >
            <Toolbar>
              <Typography varianty='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
                cities ={cities} 
                onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="details">
              <ForecastExtended />
            </div>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
