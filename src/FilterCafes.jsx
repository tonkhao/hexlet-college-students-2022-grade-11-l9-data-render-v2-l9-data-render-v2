export default function FilterCafes(props) {
    const handleChangeFilter = (e) => {
        props.onHandleFilterChange(e.target.value)
    }
    return <div className="controls">
        <select name="subway" id="subway" onChange={handleChangeFilter}>
            <option value="All">Все</option>
            {props.filters.map(filter => {
                return <option value={filter.code}>{filter.name}</option>
            })}
        </select>
    </div>
}
