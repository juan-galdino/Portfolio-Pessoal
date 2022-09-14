export function DemoBtn(props) {
  return (
    <button className="group hover:text-white hover:bg-green-700 flex gap-1 p-2 items-center font-medium  transition duration-200 hover:ease-out">
      <svg
        width="24"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:fill-white"
          d="m19.77 3.03 1.4 1.4L8.43 17.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 3.03zm0-2.83L8.43 11.54l-4.2-4.2L0 11.57 8.43 20 24 4.43 19.77.2z"
          fill="#211B12"
        />
      </svg>
      <a href={props.url} target="_blank">Demonstração</a>
    </button>
  )
}
