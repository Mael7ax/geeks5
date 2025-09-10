import {useEffect, useState} from "react";
import styles from "./weather.module.css"
export const SearchInput = ({onSearch, debounser = 500}) => {
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue.trim()){
                onSearch(inputValue.trim());
            }
        },debounser)
        return () => clearTimeout(handler);
    },[inputValue,onSearch, debounser]);

    return (
        <input
            className={styles.input}
            type="text"
            value={inputValue}
            placeholder="Search city..."
            onChange={(e) => setInputValue(e.target.value)}/>
    );
};

