import React, { useState } from "react";
import './Applicant.css';

const DocumentUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicants, setApplicants] = useState([]);
  const [ismodalopen, setModalopen] = useState(false);
  const [documentName,setDocumentName]=useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
 
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    setDocuments((prevDocs) => [...prevDocs, ...selectedFiles]);
    setSelectedFiles([]);
  };

  const handleCancel = () => {
    setSelectedFiles([]);
  };


  
  const addApplicant = () => {
    if (applicantName.trim() !== "") {
      setApplicants([...applicants, applicantName]);
      setApplicantName("");
      setShowModal(false);
    }
  };

  
  const removeApplicant = (index) => {
    const updatedApplicants = applicants.filter((_, i) => i !== index);
    setApplicants(updatedApplicants);
  };


  const addDocument = () => {
    if (documentName.trim() !== "") {
      setDocuments([...documents, documentName]);
      setDocumentName("");
      setModalopen(false);
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Document Upload</h1>
        <button className="add-applicant" onClick={() => setShowModal(true)}>
          + Add Applicant
        </button>
      </div>

      {/* Applicants List */}
      <div className="applicants-list">
        {applicants.map((name, index) => (
          <div key={index} className="applicant-item">
            <span className="applicant-name">{name}</span>
            <button className="delete-btn" onClick={() => removeApplicant(index)}>🗑️</button>
          </div>
        ))}
      </div>

      
         <div className="doc">
             <div className="head">
                  
                    <button className="btn" onClick={() => setModalopen(true)}>+ Add</button>
              </div>
          </div>

          <div className="document-list">
           {documents.map((name, index) => (
            <div key={index} className="applicant-item">
            <span className="applicant-name">{name}</span>
            {/* <button className="delete-btn" onClick={() => removeApplicant(index)}>🗑️</button> */}
          </div>
        ))}
          </div>
          
          <div className="docu-list">
            {documents.length === 0 ? (<p>no files choosen</p>):(
              documents.map((doc,index) => (
                <div key={index} className="docu-item">
                {doc.name}</div>
              ))
            )}
          </div>
          <div className="upload-box">
            <input type="file" multiple onChange={handleFileChange} id="fileInput"/>
            <button htmlfor="fileInput" className="choose-button">choose</button>
            < button className="upload-button" onClick={handleUpload} disabled ={selectedFiles.length === 0}>Upload</button>
            <button className="cancel-button" onClick={handleCancel} disabled={selectedFiles.length === 0}>
           Cancel
        </button>

          </div>
          <div className="drop-area">Drag and Drop Files here.</div>
        {showModal && (
         <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add Applicant</h2>
              <button className="close" onClick={() => setShowModal(false)}>✖</button>
            </div>

            <div className="modal-body">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button className="save" onClick={addApplicant}> Save</button>
              <button className="cancel" onClick={() => setShowModal(false)}> Cancel</button>
            </div>
          </div>
        </div>
      )}
      { ismodalopen && (
        <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Document Name</h2>
            <button className="close" onClick={() => setModalopen(false)}>✖</button>
          </div>

          <div className="modal-body">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button className="save" onClick={addDocument}> Save</button>
            <button className="cancel" onClick={() => setModalopen(false)}> Cancel</button>
          </div>
        </div>
      </div>
      )}
      <div>
      <div className="buttons">
        <button className="back">← Back</button>
        <button className="next">Next →</button>
      </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
