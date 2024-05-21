import { useState } from 'react';

function FilterComponents() {
  const [filterData, setFilterData] = useState('');

  console.log(filterData);
  return (
    <>
      <div className="flex justify-center p-2 border h-screen items-center ">
        <div className="">
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilterData(e.target.value)}
            className="border rounded-md shadow-md bg-[#fff] text-bold p-3"
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
