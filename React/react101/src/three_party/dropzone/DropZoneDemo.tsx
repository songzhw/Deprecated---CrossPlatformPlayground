import React, { useCallback } from "react";
import { DropEvent, useDropzone } from "react-dropzone";

interface IProps {
}

export const DropZoneDemo = (props: IProps) => {

  const onDropFile = useCallback((acceptedFiles: File[], rejectedFiles: File[], event: DropEvent) => {

  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDropFile });


  return (
    <div>
      <p>drop files here</p>
      <div {...getRootProps()}>
        <input {...getInputProps()}/>
      </div>
    </div>
  );
};


