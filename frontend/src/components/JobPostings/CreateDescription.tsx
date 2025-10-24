export default function CreateDescription() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-10">
      <h2 className="text-gray-800 text-2xl font-bold mb-6">Create a New Job Posting</h2>
      <form action="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="col-span-1">
            <h3 className="block text-gray-700 text-sm font-medium mb-2">Job Title</h3>
            <input
              type="text"
              placeholder="e.g. Senior Software Engineer"
              className="form-input appearance-none p-2 flex w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <h3 className="block text-gray-700 text-sm font-medium mb-2">Description</h3>
            <textarea
              className="form-textarea focus:outline-none p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
              rows={6}
              name=""
              id=""
              placeholder="Enter job Description"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
