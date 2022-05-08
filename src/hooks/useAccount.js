import { useEffect, useState } from "react";

const useAccount = () => {
    const [account, setAccount] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/account")
        .then(res => res.json())
        .then(data => setAccount(data))
    }, []);
    return [account]
}

export default useAccount;