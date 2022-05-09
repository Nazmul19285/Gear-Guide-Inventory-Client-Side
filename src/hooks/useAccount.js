import { useEffect, useState } from "react";

const useAccount = () => {
    const [account, setAccount] = useState([]);

    useEffect( () => {
        fetch("https://infinite-reaches-79357.herokuapp.com/account")
        .then(res => res.json())
        .then(data => setAccount(data))
    }, []);
    return [account]
}

export default useAccount;