import { useEffect, useState } from 'react';
import axios from "axios";
import FilterCafes from "./FilterCafes";

const filters = [
	{
		name: "Арбатская",
		code: "Arbat",
	},
	{
		name: "Александровский сад",
		code: "Alexanders Garden",
	},
	{
		name: "Московская",
		code: "Moscow",
	},
	{
		name: "Парк Культуры",
		code: "Culture",
	},
	{
		name: "Театральная",
		code: "Theater",
	},
];


export default function CafesTable() {
    const [initialCafeState, setInitialCafes] = useState([]);
    const [cafes, setCafes] = useState([]);
    useEffect(() => {
        const fetchCafes = async () => {
            try {
                const result = await axios.get('http://localhost:8070/cafes');
                setCafes(result.data.cafes);
                setInitialCafes(result.data.cafes)
            } catch (error) {
                console.error("Error fetching cafes:", error);
            }
        };
        fetchCafes();
    }, []);
    const getCafeImg = (img) => {
        if (!img) {
            return "https://via.placeholder.com/150"
        }
        return img
    }
    const onHandleFilterChange = (subwayCode) => {
        if (subwayCode === "All") {
            setCafes(initialCafeState)
            return
        }
        const filteredCafes = initialCafeState.filter(cafe => cafe.subwayCode === subwayCode)
        setCafes(filteredCafes)
    }
    return <div className='cafesTable'>
        <FilterCafes filters={filters} onHandleFilterChange={onHandleFilterChange} />
        <ul className="cardsList">
            {cafes.map(cafe => {
                return <li className="card">
                    <img src={getCafeImg(cafe.img)} alt={cafe.code} />
                    <h2>{cafe.name}</h2>
                    <p>{cafe.decs}</p>
                    <p>{cafe.address}</p>
                    <p>{cafe.subwayCode}</p>
                    <p>{cafe.workTime}</p>
                </li>
            })}
        </ul>
    </div>
}
