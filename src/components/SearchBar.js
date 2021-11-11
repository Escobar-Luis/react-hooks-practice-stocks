import React from "react";

function SearchBar({sortBy, onChangeSort, filterBy, onChangeFilter}) {

  //for our filter and sort we construct onChange function for them that update our states to the event.target.value (in this scenatio, since this is not a form, the values stay constant and are not any state)

  //REMEMBER this, for our checkboxes we set the checked value as a dynamic variable by setting our checked= variable to a boolean statement that will return either true or false depending on our sortBy state veing the equivalent to the checkboxes value which would either show it being selected or not in our ui which is why its state is automatically set to aplhabetically

function handleSortChange(e) {
  onChangeSort(e.target.value)
}
function handleFilterChange(e) {
  onChangeFilter(e.target.value)
}

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
