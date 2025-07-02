import { LuAlignJustify } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Button from "../reuseable/Button";

const Header = () => {
  return (
    <header className=' h-18 bg-gradient-to-r from-gray-800 to-purple-600 mb-4'>
        <div className='max-w-[1280px] px-16 mx-auto flex h-full items-center justify-between'>
            <section className='flex'>
                <Link to="/">
                    <main>
                        <img src="/logo.jpg" alt='Nav-Logo' className='w-10 h-10'/>
                    </main>
                </Link>

               <main className='hidden md:flex mx-12 gap-9 items-center font-semibold text-white '>
                    <nav className='flex items-center gap-0.5'> 
                        <span>Save</span>
                        <span>
                            <IoIosArrowDown size={20}/>
                        </span>
                    </nav>
                    <Link to="/about">
                        <nav>About</nav>
                    </Link>

                    <Link to="/contact">
                        <nav> Contact Us </nav>

                    </Link>

                    <Link to="/FAQs">
                        <nav> FAQs </nav>
                    </Link> 

                    <Link to="/resources">
                        <nav className="flex items-center gap-0.5">
                            Resources
                        </nav>
                    </Link>
               </main>
            </section>

            <section className=' hidden md:flex gap-3 font-semibold '>
                <Button 
                    label="Sign in" 
                    borderColor="#122231"
                    
                />

                <Button
                    label="Create Free Account" bgColor="#122231"
                    textColor="#fff"
                />
            </section>

            <section className=" block md:hidden">
                <LuAlignJustify size={30} />
            </section>
        </div>
    </header>
  );
};

export default Header;