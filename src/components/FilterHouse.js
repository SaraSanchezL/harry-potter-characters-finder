const FilterHouse = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="labelForm" htmlFor="house">
        Selecciona Casa:
      </label>
      <select
        className="inputForm"
        name="house"
        id="house"
        value={props.filterHouse}
        onChange={handleSelect}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
