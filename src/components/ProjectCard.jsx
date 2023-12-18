import { Skill } from './Skill'
import { CodeBtn } from './CodeBtn'
import { DemoBtn } from './DemoBtn'

export function ProjectCard(props) {
  return (
    <article className="max-w-100 text-left shadow-md rounded">
      <div className='flex flex-col justify-center'>
        <img className='h-72 rounded' src={props.projectImage} alt={props.alt} loading='lazy' />
      </div>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-blue-800 font-semibold mb-2">
          {props.title}
        </h3>
        <div className="flex flex-wrap gap-1">
          {props.skills.map((skill, key) => {
            return <Skill key={key}>{skill}</Skill>
          })}
        </div>
        <p className="py-4">
          {props.text}
        </p>
        <div className="flex gap-3">
          <CodeBtn url={props.urlCodeBtn} />
          <DemoBtn url={props.urlDemoBtn} />
        </div>
      </div>
    </article>
  )
}