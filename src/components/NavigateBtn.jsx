export default function NavigateBtn({ btnName }) {
  return (
    <button className="group flex w-max flex-row items-center gap-2">
      <hr className="erase-in-out w-10 transition-all duration-200 group-hover:w-20"></hr>
      <span className="text-xl transition-all duration-300 ease-in-out group-hover:text-sky-500">
        {btnName}
      </span>
    </button>
  );
}
