import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, largeSrc, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const scrollLock = () => {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    document.documentElement.classList.add('active-modal');
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  };

  const handleClick = () => {
    scrollLock();
    onClick();
  };
  const handleLoad = () => {
    setLoaded(false);
  };
  const handleError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        <li className={styles.placeholder}></li>
      ) : (
        <li
          className={loaded ? `${styles.container}` : `${styles.placeholder}`}
        >
          <img
            className={styles.image}
            style={loaded ? {} : { visibility: 'hidden' }}
            src={src}
            data-src={largeSrc}
            alt=""
            onLoad={handleLoad}
            onError={handleError}
            onClick={handleClick}
          />
        </li>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  largeSrc: PropTypes.string,
  onClick: PropTypes.func,
};
export default ImageGalleryItem;
