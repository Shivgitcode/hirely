'use client';
import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { RiUploadCloudLine } from 'react-icons/ri';
import DragnDrop from './DragnDrop';

export default function Dropbox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log('hello');
    inputRef.current?.click();
  };
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
      <div className=" flex flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-gray-300 py-16">
        <div className="flex flex-col items-center gap-2">
          <RiUploadCloudLine size={50} className=" fill-gray-400"></RiUploadCloudLine>
          <DragnDrop></DragnDrop>
        </div>
      </div>
    </div>
  );
}
