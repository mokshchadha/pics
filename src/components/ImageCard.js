import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
  }
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
