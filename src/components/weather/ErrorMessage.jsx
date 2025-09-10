import styles from './weather.module.css'
export const ErrorMessage = ({ message }) => {
    return <div className={styles.error}>{message}</div>;
};
