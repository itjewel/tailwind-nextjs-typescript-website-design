import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiGridFill } from "react-icons/ri";
import GridView from "../../components/themeCategory/GridView";
import ListView from "../../components/themeCategory/ListView";

const ThemeCategory = () => {
    const [listView, setListView] = useState(true)
  return (
    <div className="py-8 ">
        <div className="container mx-auto">
            <div className="max-w-5xl mx-auto px-10">
            <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className="flex  justify-between gap-4 mt-5">
            <div className="text-base">
               <Link href="/">
                <a className="text-gray-700"> Home </a> 
                </Link> / Theme Category
            </div>
             <div className="flex space-x-3 text-1xl">
                <AiOutlineUnorderedList className="text-gray-900 cursor-pointer" onClick={()=>setListView(false)}/>
                <RiGridFill className="text-gray-900 cursor-pointer" onClick={()=>setListView(true)} />
            </div>
            </div>


            </div>
           
        {(listView && listView ?    
<div className="md:shrink lg:shrink object-contain  py-12 px-4  md:grid md:gap-2 md:grid-cols-2 lg:grid lg:gap-4 lg:grid-cols-4 ">
        
            <GridView />
            <GridView />
            <GridView />
            <GridView />
            <GridView />
            <GridView />
        </div>
        
        :
        <div className="flex-col w-cover">
            <ListView />
            <ListView />
            <ListView />
            <ListView />
            <ListView />
        </div>
)}
        </div>
    </div>
  )
}

export default ThemeCategory
