import Spinner from "../svg/Spinner"

export default function Loader() {
  return (
    <div className="w-full md:w-[400px] text-sky-600 dark:text-white flex justify-center">
      <Spinner />
    </div>
  )
}
