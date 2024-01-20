export default function userProfile({ params }: any) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-10/12 flex mt-10 py-20 bg-[white]/[0.1] flex-col gap-10 justify-start items-center">
        <p className="text-4xl font-semibold">User-Profile</p>
        <p className="text-4xl font-semibold">{params.userId}</p>
      </div>
    </div>
  );
}
