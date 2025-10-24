export default function ProfileForm() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
      </div>
      <div className="p-6">
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              className="mt-1 p-2 block w-full rounded-md focus:outline-none border-gray-300 shadow-sm focus:border-red-400 focus:ring-2  focus:ring-red-400 sm:text-sm"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              autoComplete="off"
              id="email"
              className="block p-2 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:outline-none  focus:border-red-400 focus:ring-red-400 sm:text-sm"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-3 rounded-b-lg bg-gray-50 px-6 py-4">
        <button
          type="submit"
          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
