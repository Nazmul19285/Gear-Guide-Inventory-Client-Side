import { useEffect, useState } from "react";

const useItems = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect( () => {
        fetch("https://infinite-reaches-79357.herokuapp.com/items")
        .then(res => res.json())
        .then(data => setAllItems(data))
    }, []);
    return [allItems]
}

export default useItems;