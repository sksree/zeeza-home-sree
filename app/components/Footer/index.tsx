import Image from "next/image";
import Link from "next/link";




const footer = () => {
    return (
        <div className="bg-black " id="first-section">
            <div className="mx-auto max-w-2xl pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'> Zeeza Solutions</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                      <div className="col-span-2">
            <p className="text-white text-xl font-extrabold mb-9">Menu</p>
            <ul>
              <li className="mb-5">
                <Link href="/" className="text-white text-lg font-normal">Home</Link>
              </li>
              
              <li className="mb-5">
                <Link href="/Aboutus" className="text-white text-lg font-normal">About Us</Link>
              </li>
              <li className="mb-5">
                <Link href="#faq-section" className="text-white text-lg font-normal">FAQ</Link>
              </li>
              <li className="mb-5">
                <Link href="#blog-section" className="text-white text-lg font-normal">Blog</Link>
              </li>
            </ul>
          </div>

           {/* COLUMN-3: Legal Links */}
          <div className="col-span-2">
            <p className="text-white text-xl font-extrabold mb-9">Popular</p>
            <ul>
              <li className="mb-5">
                <Link href="/Details" className="text-white text-lg font-normal">Get Started</Link>
              </li>
              <li className="mb-5">
                <Link href="/Services" className="text-white text-lg font-normal">Services</Link>
              </li>
            </ul>
          </div>

           {/* COLUMN-4: Legal Links */}
          <div className="col-span-2">
            <p className="text-white text-xl font-extrabold mb-9">Legal</p>
            <ul>
              <li className="mb-5">
                <Link href="/components/Privacypolicy" className="text-white text-lg font-normal">Privacy Policy</Link>
              </li>
              <li className="mb-5">
                <Link href="/components/Terms" className="text-white text-lg font-normal">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2025 - All Rights Reserved by <Link href="/" target="_blank"> zeezasolution.com</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/components/Privacypolicy">
                                <h3 className="text-offwhite pr-6">Privacy policy</h3>
                            </Link>
                            <Link href="/components/Terms">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
