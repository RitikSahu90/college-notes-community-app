import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';
import { AboutNotes } from './AboutNotes';

const NotesList = () => {
  const {filters,notesData,fetchNotes}=useContext(NoteContext)
  useEffect(()=>{
    fetchNotes(filters.year,filters.department)
  },[filters.year,filters.department])
  const navigate = useNavigate();
  return (
   <div>
      <div className="row" style={{ maxHeight: '550px', overflowY: 'auto' }}>
        {notesData.length === 0 ? (
          <p>No notes found for the selected filters.</p>
        ) : (
          notesData.map((note) => (
            <div className="col-md-6 mb-4" key={note.id}>
              <Card onClick={() => navigate(`/note/${note.id}`)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Departments: {note.dept?.map((d) => d.name).join(', ')}<br />
                    Year: {note.year?.map((y) => y.yearName || 'N/A').join(', ')}
                  </Card.Subtitle>
                  <Card.Text>
                    Uploaded by <strong>{note.user?.email || 'Unknown'}</strong><br />
                    Ratings: <strong>⭐ {note.user?.rating || 0}</strong>
                  </Card.Text>
                  <Button variant="outline-primary" href={note.fileurl}>
                    View
                  </Button>
                  <Button variant="outline-success" style={{ marginLeft: '5px' }} href={note.fileurl} target="_blank">
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesList;
