import { useState, useEffect } from "react"
import axios from 'axios';

export default function Test(){
    const [data, setData] = useState([])
    const [one, setOne] = useState(2)
    useEffect(() => {
      axios.get('http://localhost:5000/api/tovar')
        .then(response => setData(response.data))
    }, []);
    const specificTovar = data.find(tovar => tovar.tovar_id === one)
    const nextTovar = () => {
        setOne(prevId => prevId + 1);
    };
    return(
        <>
            <div>
                {specificTovar && (
                    <div>
                        <p>{specificTovar.tovar_name}</p>
                    </div>
                )}
                <button type="button" onClick={nextTovar}>123</button>
            </div>

        </>
    )
}
