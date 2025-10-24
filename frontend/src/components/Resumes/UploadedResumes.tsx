import { resumes } from '@/constants/constant';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
export default function UploadedResumes() {
  return (
    <div className=" bg-white rounded-lg border border-gray-200 ">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className=" text-lg font-semibold text-gray-900">Uploaded Resumes</h2>
        <span className="text-sm text-gray-500">3 Files</span>
      </div>
      <ul className="divide-y divide-gray-200">
        {resumes.map((el) => (
          <li key={el.id} className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <span>
                <IoDocumentTextOutline size={30} className="text-gray-400"></IoDocumentTextOutline>
              </span>
              <p className="font-medium text-gray-800">Resume of {el.file}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <span>
                <CiCircleCheck></CiCircleCheck>
              </span>
              <p>uploaded</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
