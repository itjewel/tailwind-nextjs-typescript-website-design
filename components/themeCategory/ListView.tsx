 const ListView = () => {
  return (<div className="p-6 mt-4 max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 scale-100 hover:scale-105 ease-in duration-500">
  <div className="shrink-0">
    <img className="h-48 w-48 rounded-tl rounded-bl-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl md:text-1xl lg:text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm md:text-xl text-justify">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.rse chronological order.</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
  </div>
</div>
)
}

export default ListView