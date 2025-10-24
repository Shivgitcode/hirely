import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DragnDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('hello');
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true
  });

  return (
    <div {...getRootProps()} className="flex flex-col items-center gap-3">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-lg font-semibold text-gray-800">Drop the files here</p>
      ) : (
        <p className="text-lg font-semibold text-gray-800">
          Drop your resume here or click to drop resume here
        </p>
      )}
      <p className="text-sm text-gray-500">or</p>
      <button
        type="button"
        onClick={open}
        className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
      >
        Browse Files
      </button>
    </div>
  );
}
