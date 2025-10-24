export default function Details() {
  return (
    <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="w-full flex flex-col gap-2 shadow-md border border-stone-200 bg-white p-6 rounded-lg ">
        <h2 className=" text-stone-600 text-base font-medium">Resumes Uploaded</h2>
        <p className=" text-stone-900 text-4xl font-bold">5</p>
      </div>
      <div className=" w-full flex flex-col gap-2 shadow-md border border-stone-200 bg-white p-6 rounded-lg ">
        <h2 className=" text-stone-600 text-base font-medium">Jobs Posted</h2>
        <p className="text-stone-900 text-4xl font-bold">2</p>
      </div>
    </div>
  );
}
