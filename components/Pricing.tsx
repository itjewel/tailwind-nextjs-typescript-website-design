import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
 const Pricing = () => {
   const [checked, setClicked] = useState('monthly');
   let unSelecSty = "bg-gray-100 dark:bg-gray-800  text-gray-600 dark:text-gray-200 mr-1";
   let selecSty = "bg-indigo-700 text-white";
   const pricingCategory = (value: string)=> {
        if(value === 'yearly'){
            setClicked('yearly');
        }else{
            setClicked('monthly');
        }
        console.log(value)
   }
   
  return (<div className="bg-stone-150 w-full rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-gray-200">
        <div className="sm:flex sm:flex-col sm:align-center py-11 ">
            <h2 className="object-contain text-slate-800 text-center text-3xl md:text-4xl lg:text-4xl py-4">Plans &amp; Pricing</h2>
            <p className="mt-1 text-lg text-hex-2B4452 sm:text-center">Try Tailwinds time-saving features free, no
                credit card required</p>
                    <button className="bg-gray-100 dark:bg-gray-800 shadow rounded-full flex items-center mt-10 rounded-full w-56 mx-auto">
                                               
                        <div className={`${checked === 'monthly'? selecSty: unSelecSty} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-6`} id="monthly" onClick={()=>pricingCategory('monthly')}>Monthly</div>
                        
                        <div className={`${checked === 'yearly'? selecSty: unSelecSty} focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-6`} id="annually" onClick={()=>pricingCategory('yearly')}>Annually</div>
                    </button>

                              
         </div>
    <div className="container px-6 py-8 mx-auto">        
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 scale-100 hover:scale-105 ease-in duration-500">
                <div className="flex-shrink-0">
                    <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                        Casual
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <span
                        className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                    >
                        Free
                    </span>
                </div>
                <ul className="flex-1 space-y-4">
                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 5 projects
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 10 collaborators
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        2Gb of storage
                    </li>
                </ul>
                <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 uppercase">Start free</button>
                <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                </div>
               
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 scale-100 hover:scale-105 ease-in duration-500">
                <div className="flex-shrink-0">
                    <h2
                        className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                        Profesional
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <span
                        className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                    >
                        $24.90
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>
                <ul className="flex-1 space-y-4">
                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 10 projects
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Up to 20 collaborators
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        10Gb of storage
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                </ul>
                <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 uppercase">Start Profesional Option</button>
                <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                </div>
                
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 scale-100 hover:scale-105 ease-in duration-500">
                <div className="flex-shrink-0">
                    <h2
                        className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                        Expert
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <span
                        className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                    >
                        $49.90
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>
                <ul className="flex-1 space-y-4">
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited projects
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited collaborators
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Unlimited storage
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        24x7 Support
                    </li>
                </ul>
                <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 uppercase">Start Expert Option</button>
                <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                </div>
               
            </div>
        </div>
    </div>
</div>)
}
export default Pricing
