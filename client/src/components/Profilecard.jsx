import React, { useState } from 'react';
import { Card, Form, Button, Offcanvas } from 'react-bootstrap';

const ProfileCard = () => {
  const [showUpload, setShowUpload] = useState(false);

  const user = {
    img: 'https://cdn.pixabay.com/photo/2025/01/30/13/04/woman-9370170_1280.jpg',
    name: 'Ritik Sahu',
    rat: '4.8',
    uplods: 18,
    uplod_link: '#'
  };

  return (
    <>
      <Card className="text-center shadow p-3 mb-4 bg-white rounded" style={{ maxWidth: "350px", margin: "auto" }}>
        <Card.Img
          variant="top"
          src={user.img}
          alt="profile.png"
          className="rounded-circle mx-auto mt-3"
          style={{ height: "150px", width: "150px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            ⭐ {user.rat} Rating <br />
            Uploaded Notes: {user.uplods} <br />
            <a href={user.uplod_link}>View Uploads</a>
          </Card.Text>

          {/* Upload Section - visible only on medium and larger */}
          <div className="d-none d-md-block">
            <hr />
            <h6><u>Upload Notes</u></h6>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Notes Name</Form.Label>
                <Form.Control type="text" placeholder="Enter note name" required/>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Department</Form.Label>
                <Form.Select required>
                  <option selected disabled>Department</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>CSE</option>
                  <option>MECH</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year</Form.Label>
                <Form.Select required>
                  <option selected disabled>Year</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Upload File</Form.Label>
                <Form.Control required type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt" />
              </Form.Group>
              <Button variant="primary" type="submit" size="sm">Upload</Button>
            </Form>
          </div>

          {/* Upload Button - visible only on small screens */}
          <div className="d-block d-md-none mt-3">
            <Button variant="outline-primary" size="sm" onClick={() => setShowUpload(true)}>
              Upload Notes
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Offcanvas for Upload Form on Mobile */}
      <Offcanvas show={showUpload} onHide={() => setShowUpload(false)} placement="center">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Upload Notes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{width:'100%'}}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Notes Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter note name" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Department</Form.Label>
              <Form.Select required>
                <option selected disabled>Select</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>CSE</option>
                <option>MECH</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Year</Form.Label>
              <Form.Select required>
                <option selected disabled>Year</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Upload File</Form.Label>
              <Form.Control required type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt" />
            </Form.Group>
            <Button variant="primary" type="submit" size="sm">Upload</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ProfileCard;
