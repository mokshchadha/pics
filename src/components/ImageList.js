import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imgs = Object.values(props.images).map((image) => {
    return <ImageCard className="image-list" key={image.id} image={image} />;
  });
  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
