import { postings } from '@/constants/constant';
import { IoIosArrowForward } from 'react-icons/io';
export default function ListedJobs() {
  return (
    <div>
      <h2 className="text-gray-900 text-2xl font-bold mb-6">Posted Jobs</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {postings.map((el) => (
            <li
              key={el.id}
              className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-gray-800 text-lg font-semibold">{el.title}</p>
                  <p className="text-gray-500 text-sm">Posted on {el.createdAt}</p>
                </div>
                <div className="text-gray-400">
                  <IoIosArrowForward></IoIosArrowForward>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
