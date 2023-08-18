import PropTypes from 'prop-types';
import { useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Modal from 'components/Modal';

const ImageGallery = ({ images }) => {
  const [largeImg, setLargeImg] = useState('');
  const handleClick = largeImg => {
    setLargeImg(largeImg);
  };
  return (
    <>
      <ul className={styles.container}>
        {images.map(({ id, webformatURL, largeImageURL }, i) => {
          return (
            <ImageGalleryItem
              key={`${id}${i}`}
              src={webformatURL}
              onClick={() => handleClick(largeImageURL)}
            />
          );
        })}
      </ul>
      {largeImg && <Modal largeImage={largeImg} onClickExit={handleClick} />}
    </>
  );
};

ImageGallery.propTypes = { images: PropTypes.arrayOf(PropTypes.object) };
export default ImageGallery;
