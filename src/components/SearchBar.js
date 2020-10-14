import React from "react";

class SearchBar extends React.Component {
  onInputchange(event) {
    //event.target.value
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputchange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
