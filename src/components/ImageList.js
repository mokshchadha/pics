import React from "react";

const ImageList = (props) => {
  const imgs = Object.values(props.images).map(
    ({ id, alt_description, urls }) => {
      return <img key={id} alt={alt_description} src={urls.small} />;
    }
  );
  return <div>{imgs}</div>;
};

export default ImageList;
