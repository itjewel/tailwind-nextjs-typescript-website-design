import AccordionItem from '../components/AccordionItem';
import { faqData } from '../demoData/faqData';
 const Accordion = () => {

  // console.log(faqData)
  return (
  <div className={`py-4 py-24 shadow-[0_55px_60px_-15px_rgba(0,0,0,0.1)] shadow-gray-200`}>
      <h2 className="object-contain text-slate-800 text-center text-3xl md:text-4xl lg:text-4xl py-8">Frequently asked questions</h2>       
      <ul>
      {faqData.map((faq, index) => (
        <AccordionItem
        key={index} faq={faq} />
      ))}
    </ul>
    </div>
  )
}
export default Accordion;
