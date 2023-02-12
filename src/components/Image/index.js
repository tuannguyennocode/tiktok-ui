import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, alt, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handlerError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handlerError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
