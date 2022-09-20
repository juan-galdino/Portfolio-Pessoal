export function Form() {
  return (
    <article>
      <form action="" className="text-left">
        <div className="relative mb-8">
          <label
            htmlFor="name"
            className="
              absolute
              -top-3.5
              left-4
              bg-white
              px-2
              pt-1
            "
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="
              w-full 
              border-4 
              rounded-md 
            border-zinc-500
              h-14
              text-xl
              font-semibold
              pl-4
              focus:outline-none  
              focus:border-green-600
            "
          />
        </div>

        <div className="relative mb-8">
          <label
            htmlFor="email"
            className="
              absolute
              -top-3.5
              left-4
              bg-white
              px-2
              pt-1
            "
          >
            E-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            className="
              w-full 
              border-4 
              rounded-md 
            border-zinc-500
              h-14
              text-xl
              font-semibold
              pl-4
              focus:outline-none  
              focus:border-green-600
            "
          />
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className="
              absolute
              -top-3.5
              left-4
              bg-white
              px-2
              pt-1
            "
          >
            Mensagem
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            className="
              w-full 
              border-4 
              rounded-md 
            border-zinc-500
              text-xl   
              p-4
              resize-none
              focus:outline-none  
              focus:border-green-600
            "
          >
          </textarea>
        </div>

      </form>
    </article>
  )
}