import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from "react-icons/ai";
const HomePage = () => {
  return (
    <div className="space-y-4 py-12 md:mt-20 lg:mt-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-gray-200">
      <h2 className="object-contain text-slate-800 text-center text-3xl md:text-4xl lg:text-4xl">Create a website in minutes.</h2>
      <p className="max-w-screen-lg text-slate-800 text-center object-contain mx-auto">Giantit.com.au gives you everything you need to start your website today.
        Free hosting, your own domain, a world-class support team, and so much more.</p>
        <div>
        <div className="md:flex lg:flex shrink py-8 space-x-5">          
          <div className="flex-1 mt-3 md:mt-0 lg:mt-0 shadow-md scale-100 hover:scale-105 ease-in duration-500">
              <div className='rounded py-4 px-3'>              
                <div className="rounded-full h-48 w-48 flex items-center justify-center border-dotted border-2 border-indigo-600 mx-auto scale-100 hover:scale-110 ease-in duration-500"> 
                   <Image className="block mx-auto sm:shrink-0" src="http://localhost/giantland/uploads/448ed5716b4314bed4260d3c98947916.png" alt="Woman's Face" width={150} height={150}/>
                </div>
                <Link href="/themes-category/1">
                  <a>
                    <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                    <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 ">Create eCommerce</button>
                    <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                    </div>
                  </a>
                </Link>
              </div>   
          </div>

          <div className="flex-1 mt-3 md:mt-0 lg:mt-0 shadow-md scale-100 hover:scale-105 ease-in duration-500">
              <div className='rounded py-4 px-3'>              
                <div className="rounded-full h-48 w-48 flex items-center justify-center border-dotted border-2 border-indigo-600 mx-auto scale-100 hover:scale-110 ease-in duration-500"> 
                   <Image className="block mx-auto sm:shrink-0" src="http://localhost/giantland/uploads/ed40678e65d7183ac107db7daeb462ce.png" alt="Woman's Face" width={150} height={150}/>
                </div>
                <Link href="/themes-category/2">
                  <a>
                    <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                    <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 ">Create eCommerce</button>
                    <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                    </div>
                   </a>
                </Link>
              </div>   
          </div>

          <div className="flex-1 mt-3 md:mt-0 lg:mt-0 shadow-md scale-100 hover:scale-105 ease-in duration-500">
              <div className='rounded py-4 px-3'>              
                <div className="rounded-full h-48 w-48 flex items-center justify-center border-dotted border-2 border-indigo-600 mx-auto scale-100 hover:scale-110 ease-in duration-500"> 
                   <Image className="block mx-auto sm:shrink-0" src="http://localhost/giantland/uploads/ccd25e90017cac37ef314581066fc335.png" alt="Woman's Face" width={150} height={150}/>
                </div>
                <Link href="/themes-category/3">
                  <a>
                    <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                    <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 ">Create eCommerce</button>
                    <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                    </div>
                  </a>
                </Link>
              </div>   
          </div>

          <div className="flex-1 mt-3 md:mt-0 lg:mt-0 shadow-md scale-100 hover:scale-105 ease-in duration-500">
              <div className='rounded py-4 px-3'>              
                <div className="rounded-full h-48 w-48 flex items-center justify-center border-dotted border-2 border-indigo-600 mx-auto scale-100 hover:scale-110 ease-in duration-500"> 
                   <Image className="block mx-auto sm:shrink-0" src="http://localhost/giantland/uploads/54944f162b2ae626031cdd2db4f2a1ed.png" alt="Woman's Face" width={150} height={150}/>
                </div>
                <Link href="/themes-category/4">
                  <a>
                  <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500'>
                  <button className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 ">Create eCommerce</button>
                  <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl'/>
                  </div>
                   </a>
                </Link>
              </div>   
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default HomePage
