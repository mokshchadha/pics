import React from "react";
import unsplash from "./unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: {} };
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    console.log("res");
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container class" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length ?? 0} Results found
      </div>
    );
  }
}

export default App;
