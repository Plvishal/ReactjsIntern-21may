import { useState } from 'react';

function FilterComponents() {
  const [filterData, setFilterData] = useState('');
  console.log(filterData);
  return (
    <>
      <div className="w-1/2 m-auto">
        <div className="mt-36">
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilterData(e.target.value)}
            className="border rounded-md shadow-md"
          >
            <option>Filter</option>
            <option value={'Date of Registration'}>Date of Registration</option>
            <option value={'Vendor Score'}>Vendor Score</option>
            <option value={'Rating'}>Rating</option>
            <option value={'Status'}>Status</option>
            <option value={'Type of business'}>Type of business</option>
            <option value={'Location'}>Location</option>
            <option value={'Asign to'}>Asign to</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterComponents;
