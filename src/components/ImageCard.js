// ImageCard.js

import React from 'react';

const ImageCard = ({ largeImageURL }) => {
  return (
    <div className="max-w-sm  max-h-md rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full" src={largeImageURL} alt="Placeholder" />
    </div>
  );
};

export default ImageCard;
