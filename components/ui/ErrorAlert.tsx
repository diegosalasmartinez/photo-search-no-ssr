export default function ErrorAlert({ message }: { message: string }) {
  return (
    <div
      className="w-full md:w-[400px] bg-red-500 flex lg:inline-flex items-center text-indigo-100 leading-none lg:rounded-full mt-2 rounded-lg px-2 py-1"
      role="alert"
    >
      <span className="flex rounded-full bg-red-800 uppercase px-2 py-1 text-xs font-bold mr-3">
        ERROR
      </span>
      <span className="font-semibold mr-2 text-left flex-auto text-sm">
        {message}
      </span>
    </div>
  )
}
