const Filter = ({nameQuery, onChange}) => {
    return (
        <div>
          filter shown with <input value={nameQuery} onChange={onChange}/>
        </div>
    )
}

export default Filter
