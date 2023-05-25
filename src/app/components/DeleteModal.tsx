import Button from "./Button";

export default function DeleteModal() {
  return (
    <main className="fixed inset-0 bg-black bg-opacity-70 z-30">
      <article className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 p-8 w-80 h-56 bg-white rounded-xl">
        <h1 className="heading-m text-gray-800">Confirm Deletion</h1>
        <p className="text-sm font-medium text-gray-500 mt-4 ">
          Are you sure you want to delete invoice #Mortgage?
          This action cannot be undone.
        </p>
        <div className="mt-6 float-right">
          <Button textColor="text-gray-400" bgColor="bg-gray-100" name="Cancel" />
          <Button textColor="text-gray-100" bgColor="bg-red-500" name="Delete" />
        </div>
      </article>
    </main>
  )
}