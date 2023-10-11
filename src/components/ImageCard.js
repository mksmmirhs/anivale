// ImageCard.js

import React from 'react';

const ImageCard = ({ largeImageURL }) => {
  return (
    <div className="max-w-sm  max-h-lg rounded overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full" src={largeImageURL} alt="Placeholder" />
      </div>
    </div>
  );
};

export default ImageCard;
