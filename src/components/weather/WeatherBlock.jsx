import styles from './weather.module.css';

export const WeatherBlock = ({ weather, city }) => {
    return (
        <div className={styles.container}>
            <h2>{city}</h2>
            <div className={styles.icon}>{weather.icon}</div>
            <div>{weather.description}</div>
            <div>{weather.temp}°C</div>
        </div>
    );
};
