import selfPicture from './images/self-picture.webp'
import projectImage1 from './images/interactive-component-project.webp'
import projectImage2 from './images/alura-challenge-project.webp'
import { ProjectCard } from './components/ProjectCard'

function App() {
  return (
    <div className="flex flex-col text-neutral-800 px-4">
      <header>
        {/* <nav>
          <ul>
            <li>Início</li>
            <li>Projetos</li>
            <li>Sobre mim</li>
            <li>Contato</li>
          </ul>
        </nav> */}
      </header>
      <main className='text-center max-w-4xl mx-auto lg:text-left'>
        <section className="px-4">
          <h1 className="text-5xl font-bold mb-4 ">Sou Juan Galdino</h1>
          <p className="text-2xl font-semibold  " >
            <span className=" text-blue-800">Desenvolvedor Front End</span>. Dou
            vida a sites modernos, responsivos, inclusivos e atrativos para toda
            a internet.
          </p>
          <ul>
            <li>Linkedin</li>
            <li>twiter</li>
            <li>github</li>
            <li>instagram</li>
          </ul>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-4 text-blue-800">
            Ultimos Projetos
          </h2>
          <div className='grid gap-24 justify-center 2md:grid-cols-2'>

            <ProjectCard
              projectImage={projectImage1}
              alt="Foto do projeto mais recente"
              title="Componente de Avaliação"
              skills={['HTML', 'CSS', 'Javascript', 'Sass', 'Vitejs', 'React']}
              text="Componente interativo de avaliação para qualquer serviço. Foi
              construído com o objetivo de dar os primeiros passos com React."
              urlCodeBtn="https://github.com/juan-galdino/comecando-com-react"
              urlDemoBtn="https://reactinteractivecomponent.netlify.app/"
            />


            <ProjectCard
              projectImage={projectImage2}
              alt="Foto do penúltimo projeto"
              title="Interface médica responsiva"
              skills={['HTML', 'CSS', 'Sass']}
              text="Interface administrativa de uma clínica médica fictícia. Desafio
              de responsividade proposto por Alura. Possui menu lateral e
              modal interativo."
              urlCodeBtn="https://github.com/juan-galdino/responsividade_alura_desafio"
              urlDemoBtn="https://juan-galdino.github.io/responsividade_alura_desafio/"
            />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:gap-x-24  bg-blue-50 mt-8">
          <div className="">
            <img
              className="max-w-72"
              src={selfPicture}
              alt="Retrato do profissional de front end sorrindo e olhando diretamente para a câmera"
              loading="lazy"
            />
          </div>
          <article className="text-center lg:text-left max-w-xl sm:max-w-2xl  pt-8 pb-16 px-2 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Prazer em te conhecer</h3>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Sou Juan Galdino
              </h2>
              <p>
                Trabalho com React e TailwindCSS rotineiramente e tive
                experiência liderando e participando de projetos com colegas
                durante a faculdade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-blue-800 mb-4">
                Planejar, Codificar, Aprender e Partilhar.
              </h3>
              <p>
                Frontend é minha verdadeira paixão e gosto muito de todo o
                processo de criação de UIs e ciclos de vidas de produtos, desde
                o primeiro brainstorming, wireframes, protótipos,
                desenvolvimento, manutenção até o produto final.
              </p>
            </div>
          </article>
        </section>
        <section className="px-4">
          <h2 className="text-2xl font-semibold text-center lg:text-left">
            Minhas experiências incluem mas não me limito
          </h2>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <section className="px-4">
          <h2>Vamos conversar!</h2>
          <form action=""></form>
        </section>
      </main>
      <footer className="flex justify-center">
        <small>
          Feito com ❤️ por{' '}
          <a href="https://github.com/juan-galdino" target="_blank">
            Juan Galdino
          </a>
        </small>
      </footer>
    </div>
  )
}

export default App
