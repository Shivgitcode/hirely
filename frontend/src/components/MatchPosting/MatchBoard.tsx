import { matchdata, matchhead } from '@/constants/constant';

export default function MatchBoard() {
  return (
    <div>
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            {matchhead.map((el) => (
              <th
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                key={el.id}
              >
                {el.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {matchdata.map((el) => (
            <tr
              className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
              key={el.id}
            >
              <td>{el.name}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full w-[92%]"></div>
                  </div>
                  <span>{el.score}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">{el.skills}</td>
              <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-700">{el.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
