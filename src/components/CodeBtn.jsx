export function CodeBtn(props) {
  return (
    <button className="group hover:text-white hover:bg-blue-800 flex gap-1 p-2 items-center font-medium transition duration-200 hover:ease-out">
      <svg
        width="20"
        height="12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:fill-white"
          d="M7.4 10.6 2.8 6l4.6-4.6L6 0 0 6l6 6 1.4-1.4zm5.2 0L17.2 6l-4.6-4.6L14 0l6 6-6 6-1.4-1.4z"
          fill="#211B12"
        />
      </svg>
      <a href={props.url} target="_blank">Código</a>
    </button>
  )
}
