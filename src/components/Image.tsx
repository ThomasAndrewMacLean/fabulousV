import React, { useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({
  imageKey,
  style,
  alt,
}: {
  imageKey: string;
  style?: object;
  alt: string;
}) => {
  const pics = useContext(PictureContext);
  return (
    <img
      style={style && { ...style }}
      src={getImageUrl(pics, imageKey, true)}
      alt={alt}
    ></img>
  );
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
};

export default Image;
