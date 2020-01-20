import React, { useCallback } from "react";
import { DropEvent, useDropzone } from "react-dropzone";

interface IProps {
}

export const DropZoneDemo = (props: IProps) => {

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {
    const reader = new FileReader();
    acceptedFiles.forEach(file => {
      reader.onload = () => {
        const text = reader.result as string;
        console.log(`szw content = ${text}`);
      };
      reader.readAsText(file);
    });
  }, []);
  const value = useDropzone({ onDrop });
  console.log(`szw `, value)

  return (
    <div>
      <p>drop files here</p>
    </div>
  );
};


