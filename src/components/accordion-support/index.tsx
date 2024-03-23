import AccordionItem from './accordion-item'
import { accordionSupport } from 'src/config/accordion-support'

export default function AccordionSupport() {
  return (
    <div className="flex justify-between gap-x-24 mx-10 h-auto">
      <div className="flex flex-col gap-y-10  h-auto">
        {accordionSupport.slice(0, 4).map(({ id, title, description }) => (
          <AccordionItem key={id} id={id} title={title} description={description} />
        ))}
      </div>

      <div className="flex flex-col gap-y-10 h-auto">
        {accordionSupport.slice(4, 8).map(({ id, title, description }) => (
          <AccordionItem key={id} id={id} title={title} description={description} />
        ))}
      </div>
    </div>
  )
}
