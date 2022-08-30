import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AccordionItem } from '../typings';

 interface Props {
    faq: AccordionItem,
}

const AccordionItem = ({faq}: Props) => {
const {question, answer} = faq;
const [clicked, setclicked] = useState(false)
const elementEl = useRef<HTMLDivElement>(null);
const handleAccordion = () => {
    setclicked((prev)=>!prev);
  }
 
  return (
    <li className={`border-2 border-gray-100 border-t-gray-300 ${clicked? "active": ""} w-3/4 mx-auto`}>
      <div onClick={handleAccordion} className="cursor-pointer flex place-content-between px-3 text-2xl py-4">
       <div>{question}</div> 
        <div> {clicked? <AiOutlineMinus />: <AiOutlinePlus />}</div>
      </div>

      <div
      ref={elementEl}
        className="answer_wrapper"
        style={
            clicked? {
                height:elementEl.current?.scrollHeight
            }:{
                height:"0px"
            }
        }
        >
        <div className="answer px-4 text-justify text-gray-700 mb-5">{answer}</div>
      </div>
    </li>
  )
}
export default AccordionItem
