import { Skill } from './Skill'
import { CodeBtn } from './CodeBtn'
import { DemoBtn } from './DemoBtn'

export function ProjectCard(props) {
  return (
    <article className="max-w-400">
      <img src={props.projectImage} alt={props.alt} loading='lazy' />
      <div className="py-4 pl-4">
        <h3 className="text-2xl text-blue-800 font-semibold">
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