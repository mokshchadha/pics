import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {};

  render() {
    return (
      <div>
        <img
          ref={this.imageRef}
          alt={this.props.image.alt_description}
          src={this.props.image.urls.small}
        />
      </div>
    );
  }
}

export default ImageCard;
