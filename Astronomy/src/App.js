import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from "react";
import ImageDescription from "./components/ImageDescription";
import ImageList from "./components/ImageList";


class App extends Component {
  state = {
    date: "",
    PhotoFromapi: "",
    images:[]
  };

  // updateDate = e => {
  //   e.preventDefault();
  //   let dateFromInput = e.target[0].value;
  //   this.setState({ date: dateFromInput });
  //   this.FetchPhotoFromApi(dateFromInput);
  // };

  // FetchPhotoFromApi = date => {
  //   fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=1jNrMo9TzfygjJxmwQw5qIRIjh8VuNYB3x6WYgsJ`)
  //     .then(response => response.json())
  //     .then(photoData => this.setState({ photo: photoData }));
  // };

  componentDidMount() {
        var d = new Date();
        d.setDate(d.getDate()-7);
        var w = new Date(d).toISOString().split('T')[0]
    fetch(`https://api.nasa.gov/planetary/apod?start_date=${w}&api_key=1jNrMo9TzfygjJxmwQw5qIRIjh8VuNYB3x6WYgsJ`)
    .then(response => response.json())
    .then(List => this.setState({images : List }))
}

  render() {
    return (

      
      <BrowserRouter>
      <Switch>
      <Route exact path='/'>
          <div>

          <h1>NASA's Astronomy Picture of the Day</h1>
          <ImageList images={this.state.images} />
          </div> 
         </Route>

         <Route exact path='/image/:date'>
          <ImageDescription />

         </Route>
      </Switch>

         
      </BrowserRouter>
      
    );
  }
}

export default App;

