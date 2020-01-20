import React, { useCallback } from "react";
import { DropEvent, useDropzone } from "react-dropzone";

export const DropZoneDemo = () => {

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
    acceptedFiles.forEach(file => {
      // put the `reader` here, so we could read multiple files at the same time
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        console.log(`szw content = ${text}`);
      };
      reader.readAsText(file);
    });
  }, []);
  const value = useDropzone({ onDrop });
  const { getRootProps, getInputProps, isDragActive } = value;
  const dropHere = isDragActive ? <p>Drop files here</p> : <p>click to select files</p>;

  return (
    <div>
      <h5>drop files here</h5>
      <div {...getRootProps({})}>
        <input {...getInputProps()}/>
        {dropHere}
      </div>
    </div>
  );
};


