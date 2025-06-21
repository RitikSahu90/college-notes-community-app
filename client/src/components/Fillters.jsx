// src/components/Filters.js
import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const Fillters = () => {
  const { filters, setFilters } = useContext(NoteContext);
  const handleDepartmentChange = (e) => {
     console.log("Selected Department:", e.target.value); 
        setFilters(
          prev => ({...prev,department: e.target.value}));
      };

  return (
    <div className="d-flex gap-2 mb-3">
      <select
        className="form-select"
        value={filters.year}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, year: e.target.value}))}
        defaultValue="All Years"
      >
        <option value="All Years">All Years</option>
        <option value={1}>1st Year</option>
        <option value={2}>2nd Year</option>
        <option value={3}>3rd Year</option>
        <option value={4}>4th Year</option>
      </select>

      <select
        className="form-select"
        defaultValue="All Department"
        value={filters.department}
        onChange={handleDepartmentChange}
      >
        <option value="All Departments">All Departments</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="Mechanical">Mechanical</option>
      </select>
    </div>
  );
};

export default Fillters;
