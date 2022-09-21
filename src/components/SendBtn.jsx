export function SendBtn() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
      }}
      className="
        group 
        hover:text-white 
        hover:bg-blue-800 
        flex 
        gap-1 
        p-2 
        items-center 
        font-bold  
        transition 
        duration-200 
        hover:ease-out"
    >
      <svg
        width="21"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="group-hover:fill-white" d="M.01 18 21 9 .01 0 0 7l15 2-15 2 .01 7z" fill="#211B12" />
      </svg>
      Enviar
    </button>
  )
}
