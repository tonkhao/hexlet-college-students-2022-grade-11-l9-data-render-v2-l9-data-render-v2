import { useEffect, useState } from 'react';
import axios from "axios";
import FilterCafes from "./FilterCafes";


export default function CafesTable() {
    const [cafes, setCafes] = useState([]);
    useEffect(() => {
        const fetchCafes = async () => {
            try {
                const result = await axios.get('http://localhost:8070/cafes');
                setCafes(result.data.cafes); 
            } catch (error) {
                console.error("Error fetching cafes:", error);
            }
        };
        fetchCafes();
    }, []);
    if (cafes.length === 0) return <div>Loading...</div>;
    return <div className='cafesTable'>
        <FilterCafes />
        <ul className="cardsList">
            {cafes.map(cafe => <li>{cafe.name}</li>)}
        </ul>
    </div>
}
