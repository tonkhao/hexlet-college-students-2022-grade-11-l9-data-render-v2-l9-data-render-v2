import { useEffect } from 'react';
import axios from "axios";
import FilterCafes from "./FilterCafes";


export default function CafesTable() {
    useEffect(async () => {
        const cafes = await axios.get('http://localhost:8070/cafes');
        console.log(cafes);
        return () => {
            ;s
        };
    }, []);
    return <div class='cafesTable'>
        <FilterCafes />
        <ul class="cardsList"></ul>
    </div>
}
