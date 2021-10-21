import { Component } from "react";
// import { initialState } from "../initialState";
import ImageGallery from "./ImageGallery/ImageGallery";
import feachImages from "./feachImages";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
  state = {
    listImages: [],
    query: "",
    page: "1",
  };
  onSubmit = (query) => {
    this.setState({ query });
  };
  getImages = async () => {
    const { query, page } = this.state;
    try {
      const hits = await feachImages({ query, page });
      console.log(hits);
      this.setState({
        listImages: hits,
      });
    } catch {}
  };
  componentDidUpdate(_, prevState, __) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery listImages={this.state.listImages} />
      </div>
    );
  }
}

export default App;
