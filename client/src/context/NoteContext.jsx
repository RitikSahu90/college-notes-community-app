import axios from 'axios';
import React, { createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    year: 'All Years',
    department: 'All Departments'
  });

  const [notesData, setnotesData] = useState([]);

  const fetchNotes = async (yearfilter, deptfilter) => {
    try {
      const response = await axios.get('http://localhost:8080/api/notes', {
        params: {
          year: yearfilter !== 'All Years' ? yearfilter : undefined,
          department: deptfilter !== 'All Departments' ? deptfilter : undefined
        }
      });
      setnotesData(response.data);
    } catch (error) {
      console.error('Error in fetch', error);
    }
  };

  return (
    <NoteContext.Provider value={{ filters, setFilters, notesData, fetchNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
