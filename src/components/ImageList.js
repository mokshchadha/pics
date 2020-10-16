import React from "react";

const ImageList = (props) => {
  const imgs = Object.values(props.images).map((image, i) => {
    return <img alt={image.alt_description} src={image.urls.small} />;
  });
  return <div>{imgs}</div>;
};

export default ImageList;
