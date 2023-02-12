import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    primary = false,
    small = false,
    medium = false,
    large = false,
    outline = false,
    disabled = false,
    rounded = false,
    circle = false,
    leftIcon,
    rightIcon,
    to,
    href,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    } else if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', className, {
        primary,
        medium,
        large,
        small,
        outline,
        disabled,
        rounded,
        circle,
        // Lý do nhận className https://www.pluralsight.com/guides/applying-classes-conditionally-react
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    primary: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
export default Button;
