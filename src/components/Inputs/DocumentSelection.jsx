import React from "react";
import "./doc-selection.css";
import { ReactComponent as UploadIcon } from "../../assets/upload-icon.svg";
import { ReactComponent as PdfIcon } from "../../assets/pdf-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";

const DocumentSelection = () => {
  return (
    <div className="document-upload-wrapper">
      <div className="document-upload-box">
        <div className="upload-icon-wrapper">
          <img src="loader-blue.png" alt="loader" className="upload-loader" />
          <UploadIcon className="upload-icon" />
        </div>
        <div className="upload-instructions">
          <div className="file-label">
            Upload Document as per selected Reason
          </div>
          <div className="file-subtext">
            Upload .pdf or .jpeg , Max Size: 5MB
          </div>
        </div>
      </div>

      <div className="selected-document-box">
        <div className="selected-document-content">
          <PdfIcon className="file-icon" />
          <span className="file-name">Name of the Doc.PDF</span>
          <DeleteIcon className="file-remove" />
        </div>
      </div>
    </div>
  );
};

export default DocumentSelection;
