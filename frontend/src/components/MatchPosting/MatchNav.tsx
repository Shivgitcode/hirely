import { postings } from '@/constants/constant';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function MatchNav() {
  return (
    <div className="mb-6 flex items-center gap-4 relative">
      <label htmlFor="jobselect" className="text-sm font-medium text-gray-700">
        Job:
      </label>
      <div className="relative">
        <select
          name="software designation"
          id="jobselect"
          className="form-select block w-64 appearance-none rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-base shadow-sm focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400 sm:text-sm"
        >
          {postings.map((el) => (
            <option key={el.id} value={el.title}>
              {el.title}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-2 bottom-4 flex items-center pr-2">
          <span className="h-5 w-5 text-gray-400">
            <RiArrowDropDownLine size={40}></RiArrowDropDownLine>
          </span>
        </span>
      </div>
    </div>
  );
}
