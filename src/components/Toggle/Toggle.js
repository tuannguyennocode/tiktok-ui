import classNames from 'classnames/bind';
import styles from './Toggle.module.scss';

const cx = classNames.bind(styles);
function Toggle() {
    return (
        <label className={cx('switch')}>
            <input type="checkbox" />
            <span className={cx('slider')}></span>
        </label>
    );
}

export default Toggle;
