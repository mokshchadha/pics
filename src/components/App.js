import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID qO72ekR08rKg5kpzS_cn2KQTqEbgqLxAuhmYwzNYt60",
      },
    });
    console.log("res length ", res);
  }
  render() {
    return (
      <div className="ui container class" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
