import selfPicture from "./images/self-picture.webp";
import projectImage1 from "./images/interactive-component-project.webp";
import projectImage2 from "./images/alura-challenge-project.webp";
import { ProjectCard } from "./components/ProjectCard";
import { Skill } from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col text-neutral-800 0sm:px-4 ">
      <header>
        <nav>
          <ul className="flex gap-4 max-w-4xl mx-auto justify-end mb-12 text-blue-800">
            <li><a href="#home">Início</a></li>
            <li><a href="#latest-projects">Projetos</a></li>
            <li><a href="#about-me">Sobre mim</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className='text-center max-w-4xl mx-auto lg:text-left'>
        <section id="home">
          <article className="xl:ml-17/100">
            <h1 className="text-5xl font-bold mb-4">Sou Juan Galdino</h1>
            <p className="text-2xl font-semibold" >
              <span className=" text-blue-800">Desenvolvedor Front End</span>. Dou
              vida a sites modernos, responsivos, inclusivos e atrativos para toda
              a internet.
            </p>
            <div className="mt-8 mb-24">
              <ul className="flex gap-12 justify-center lg:justify-start">
                <li>
                  <a
                    href="https://www.linkedin.com/in/juan-galdino-da-costa-e-silva/"
                    target="_blank"
                  >
                    <i>
                      <svg
                        className="group"
                        width="40"
                        height="38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-blue-800 group-hover:fill-blue-600"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.01 12.48h7.796v24.702H1.009V12.48zm3.699-3.09h-.056C1.83 9.39 0 7.5 0 5.106 0 2.667 1.884.818 4.763.818c2.876 0 4.645 1.844 4.7 4.282 0 2.394-1.824 4.29-4.755 4.29zM40 37.181h-8.844V24.398c0-3.346-1.383-5.63-4.423-5.63-2.326 0-3.62 1.542-4.222 3.027-.226.533-.188 1.276-.188 2.019v13.368h-8.757V12.478h8.758v3.877c.517-1.695 3.315-4.114 7.782-4.114 5.54 0 9.894 3.553 9.894 11.205v13.736z"
                          fill="#007EBB"
                        />
                      </svg>
                    </i>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/juan-galdino" target="_blank">
                    <i>
                      <svg
                        className="group"
                        width="40"
                        height="40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-blue-800 group-hover:fill-blue-600"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.999.417C8.955.417 0 9.407 0 20.497c0 8.87 5.73 16.396 13.679 19.051 1 .188 1.365-.435 1.365-.967l-.028-3.415C9.453 36.38 8.28 32.474 8.28 32.474c-.909-2.318-2.22-2.936-2.22-2.936-1.817-1.246.137-1.221.137-1.221 2.007.142 3.063 2.07 3.063 2.07 1.785 3.068 4.681 2.182 5.821 1.667.181-1.297.699-2.182 1.27-2.687-4.441-.507-9.11-2.23-9.11-9.923 0-2.193.779-3.985 2.059-5.389-.207-.508-.893-2.549.195-5.313 0 0 1.68-.54 5.5 2.058A19.14 19.14 0 0 1 20 10.123a19.16 19.16 0 0 1 5.008.677c3.817-2.598 5.494-2.058 5.494-2.058 1.09 2.764.404 4.805.198 5.313 1.283 1.404 2.056 3.196 2.056 5.389 0 7.712-4.676 9.41-9.13 9.908.717.62 1.357 1.844 1.357 3.718l-.025 5.508c0 .538.36 1.163 1.375.965A20.072 20.072 0 0 0 40 20.497C40 9.407 31.045.417 19.999.417z"
                          fill="#3E75C3"
                        />
                      </svg>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section id="latest-projects" className='mb-28'>
          <h2 className="text-5xl font-bold mb-8 text-blue-800">
            Ultimos Projetos
          </h2>
          <div className='grid gap-12 justify-center 2md:grid-cols-2 2md:gap-24'>

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

        <section id="about-me" className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:gap-x-24 bg-blue-50 mb-12">
          <div>
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
                Trabalho com React e TailwindCSS rotineiramente e tive experiências liderando e participando de projetos pessoais e também com colegas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-blue-800 mb-4">
                Planejar, Codificar, Aprender e Partilhar.
              </h3>
              <p>
                Frontend é minha verdadeira paixão e gosto muito de todo o
                processo de criação de UIs e ciclos de vidas de produtos, desde
                o primeiro brainstorming, definir backlog, wireframes, protótipos,
                desenvolvimento, manutenção até o produto final.
              </p>
            </div>
          </article>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-center mb-4 lg:text-left">
            Minhas experiências incluem mas não me limito
          </h2>
          <article className="flex flex-wrap gap-1">
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Javascript</Skill>
            <Skill>npm</Skill>
            <Skill>Sass</Skill>
            <Skill>Vitejs</Skill>
            <Skill>React</Skill>
            <Skill>Git</Skill>
            <Skill>UI Design</Skill>
            <Skill>TailwindCSS</Skill>
          </article>
        </section>
        <section id="contact">
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
