export default function NoResults({ message }: { message: string }) {
  return (
    <div className="w-full md:w-[400px] text-center text-base leading-none lg:rounded-full mt-4 rounded-lg">
      {message}
    </div>
  )
}
