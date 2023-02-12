import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Notification({ number }) {

    let classPlus;

    if (number > 9 && number < 100) {
        classPlus = 'rounded';
    } else if (number > 99) {
        number = '99+';
        classPlus = 'over';
    }
    const classes = cx('notification', classPlus);

    return <div className={classes}>{number}</div>;
}

Notification.propTypes = {
    number: PropTypes.number
}
export default Notification;
