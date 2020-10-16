import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const imgs = Object.values(props.images).map(
    ({ id, alt_description, urls }) => {
      return (
        <img
          className="image-list"
          key={id}
          alt={alt_description}
          src={urls.small}
        />
      );
    }
  );
  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
