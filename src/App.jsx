import selfPicture from './images/self-picture.webp'
import project1 from './images/interactive-component-project.webp'
import project2 from './images/alura-challenge-project.webp'
import { Skill } from './components/Skill'
import { CodeBtn } from './components/CodeBtn'
import { DemoBtn } from './components/DemoBtn'

function App() {
  return (
    <div className="flex flex-col text-neutral-800">
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
      <main>
        <section className="px-4">
          <h1 className="text-5xl font-bold mb-4">Sou Juan Galdino</h1>
          <p className="text-2xl font-semibold">
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
        <section className="py-20 px-4">
          <h2 className="text-5xl font-bold mb-4 text-blue-800">
            Ultimos Projetos
          </h2>
          <article className="max-w-400">
            <img src={project1} alt="Foto do projeto mais recente" loading='lazy' />
            <div className="py-4 pl-4">
              <h3 className="text-2xl text-blue-800 font-semibold">
                Componente de Avaliação
              </h3>
              <div className="flex flex-wrap gap-1">
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>Javascript</Skill>
                <Skill>Sass</Skill>
                <Skill>Vitejs</Skill>
                <Skill>React</Skill>
              </div>
              <p className="py-4">
                Componente interativo de avaliação para qualquer serviço. Foi
                construído com o objetivo de dar os primeiros passos com React.
              </p>
              <div className="flex gap-3">
                <CodeBtn url={'https://github.com/juan-galdino/comecando-com-react'} />
                <DemoBtn url={'https://reactinteractivecomponent.netlify.app/'} />
              </div>
            </div>
          </article>
          <article className="max-w-400">
            <img src={project2} alt="Foto do penúltimo projeto" loading='lazy' />
            <div className="py-4 pl-4">
              <h3 className="text-2xl text-blue-800 font-semibold">
                Interface médica responsiva
              </h3>
              <div className="flex flex-wrap gap-1">
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>Sass</Skill>
              </div>
              <p className="py-4">
                Interface administrativa de uma clínica médica fictícia. Desafio
                de responsividade proposto por Alura. Possui menu lateral e
                modal interativo.
              </p>
              <div className="flex gap-3">
                <CodeBtn url={'https://github.com/juan-galdino/responsividade_alura_desafio'} />
                <DemoBtn url={'https://juan-galdino.github.io/responsividade_alura_desafio/'} />
              </div>
            </div>
          </article>
        </section>
        <section className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:gap-x-24  bg-blue-50 mt-8">
          <div className="">
            <img
              className="max-w-72"
              src={selfPicture}
              alt="Retrato do profissional de front end sorrindo e olhando diretamente para a câmera"
              loading='lazy'
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
