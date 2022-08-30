import Image from 'next/image'
 const Aboutus = () => {
  return (<div className="pb-60 md:pb-80 lg:pb-100">
            <div className="container">
                <div className="grid gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="group text-center md:text-left pt-20 md:pt-30 lg:pt-40 pb-20 md:pb-30 lg:pb-40 pr-20 md:pr-30 lg:pr-40 pl-20 md:pl-30 lg:pl-40 xl:pl-[160px] bg-green-gradient-color relative rounded-md wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" >
                        <div className="icon w-100 h-100 rounded-full bg-white-light text-center mb-20 xl:mb-0 relative xl:absolute xl:left-40 xl:top-1/2 xl:-translate-y-2/4 ease-in duration-300 group-hover:bg-white ml-auto mr-auto md:ml-0 md:mr-0">
                            <Image src="" className="w-70 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="callback" width="100%" height="100%" />
                        </div>
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-15 text-gray">Call Us</h3>
                        <a href="tel:+9903294263" className="block text-gray mb-8 text-13px md:text-15px lg:text-16px">+990 329 4263</a>
                        <a href="tel:+9903236897" className="block text-gray text-13px md:text-15px lg:text-16px">+990 323 6897</a>
                    </div>
                    <div className="group text-center md:text-left pt-20 md:pt-30 lg:pt-40 pb-20 md:pb-30 lg:pb-40 pr-20 md:pr-30 lg:pr-40 pl-20 md:pl-30 lg:pl-40 xl:pl-[160px] bg-secondary-gradient-color relative rounded-md wow animate__ animate__fadeInUp animated" data-wow-delay=".3s">
                        <div className="icon w-100 h-100 rounded-full bg-white-light text-center mb-20 xl:mb-0 relative xl:absolute xl:left-40 xl:top-1/2 xl:-translate-y-2/4 ease-in duration-300 group-hover:bg-white ml-auto mr-auto md:ml-0 md:mr-0">
                            <Image src="" className="w-70 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="workflow" width="100%" height="100%" />
                        </div>
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-15 text-gray">Mail Us</h3>
                        <a href="mailto:hello@togy.com" className="block text-gray mb-8 text-13px md:text-15px lg:text-16px">hello@togy.com</a>
                        <a href="mailto:info@togy.com" className="block text-gray text-13px md:text-15px lg:text-16px">info@togy.com</a>
                    </div>
                    <div className="group text-center md:text-left pt-20 md:pt-30 lg:pt-40 pb-20 md:pb-30 lg:pb-40 pr-20 md:pr-30 lg:pr-40 pl-20 md:pl-30 lg:pl-40 xl:pl-[160px] bg-primary-gradient-color relative rounded-md wow animate__ animate__fadeInUp animated" data-wow-delay=".5s">
                        <div className="icon w-100 h-100 rounded-full bg-white-light text-center mb-20 xl:mb-0 relative xl:absolute xl:left-40 xl:top-1/2 xl:-translate-y-2/4 ease-in duration-300 group-hover:bg-white ml-auto mr-auto md:ml-0 md:mr-0">
                            <Image src="" className="w-70 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="ticket" width="100%" height="100%" />
                        </div>
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-15 text-gray">Visit Us</h3>
                        <a href="tel:+9903294263" className="block text-gray mb-8 text-13px md:text-15px lg:text-16px" target="_blank" rel="noreferrer">711-2880 Nulla St. Mankato Mississippi.</a>
                    </div>
                </div>
            </div>
        </div>)
}

export default Aboutus