// import ".";
import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";

class App extends Component {
  state = {
    listImages: [],
  };

  componentDidMount() {
    axios
      .get(
        `?q=flora&page=1&key=23400298-f5ccb6ec4bc6d2911c7e89aba&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        console.log(response);
        this.setState({ listImages: response.data.hits });
      });
  }
  render() {
    return (
      <div className="App">
        <ImageGallery listImages={this.state.listImages} />
      </div>
    );
  }
}

export default App;
