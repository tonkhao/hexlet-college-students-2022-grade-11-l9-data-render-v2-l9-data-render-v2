export default function FilterCafes(props) {
    const handleChangeFilter = (e) => {
        props.onHandleFilterChange(e.target.value)
    }
    return <div className="controls">
        <select name="subway" id="subway" onChange={handleChangeFilter}>
            <option value="All">Все</option>
            {props.cafes.map(cafe => {
                return <option value={cafe.subwayCode}>{cafe.subwayCode}</option>
            })}
        </select>
    </div>
}
