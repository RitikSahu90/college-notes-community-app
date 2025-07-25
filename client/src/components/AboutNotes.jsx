import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const AboutNotes = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/notes/${id}`)
      .then(res => setNote(res.data))
      .catch(err => console.error('Error fetching note:', err));
  }, [id]);
  const getDownloadLink = (fileId) => {
    if (!fileId) return null;
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };
  const getPreviewLink = (fileId) => {
    if (!fileId) return null;
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  if (!note) return <p>Loading...</p>;
  const previewLink = getPreviewLink(note.fileurl);

  return (
    <div className="p-3">
      <h2>{note.title}</h2>
      <p><strong>Uploaded by:</strong> {note.user?.email}</p>
      <p><strong>Departments:</strong> {note.dept?.map(d => d.name).join(', ')}</p>
      <p><strong>Year:</strong> {note.year?.map(y => y.yearName).join(', ')}</p>

      {previewLink ? (
        <iframe 
          src={previewLink}
          width="100%" 
          height="500px" 
          allow="autoplay"
          style={{ border: "none" }}
        ></iframe>
      ) : (
        <p>Preview not available. Invalid file link format.</p>
      )}

      <br />
      <a 
        href={getDownloadLink(note.fileurl)} 
        target="_blank" 
        rel="noreferrer"
      >
        <button>Download</button>
      </a>
    </div>
  );
};
