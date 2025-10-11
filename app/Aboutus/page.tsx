import Navbar from "../components/Navbar/Navbar"
import Image from "next/image";
import img from '@/public/images/aboutus/2910382_imresizer.jpg'
import img1 from '@/public/images/aboutus/photo_2025-10-10_14-..._imresizer.jpg'
import img2 from '@/public/images/logo/markup_1000042347.png'

export default function AboutuaPage(){
    return <>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-8  px-5 lg:px-10">
        <div className="flex-1 pt-5">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Our Story, Vision and <br /> Values
          </h1>
        </div>
        <div className="flex-1 font-bold pt-5 text-gray-700">
          <p>
            “We are a team of passionate IT professionals dedicated to delivering innovative
            technology solutions. With years of experience in software development, cloud
            infrastructure, and digital transformation, we help businesses achieve operational
            excellence and growth.”
          </p>
        </div>
      </div>
        {/* Main Banner Image */}
      <div className="px-5 lg:px-10 mt-5">
        <Image
          src={img}
          alt="About us"
          className="rounded-xl w-full h-auto object-cover"
          priority
        />
      </div>
    
     
         {/* Mission & Vision with Image */}
      <div className="flex flex-col lg:flex-row gap-8 px-5 lg:px-10 mt-10">
        <div className="flex-1 flex flex-col ">
          <p>
            <span className="font-bold text-xl">Mission:</span> To empower businesses with
            reliable, scalable, and cutting-edge technology solutions.
          </p>
          <p>
            <span className="font-bold text-xl">Vision:</span> To be a global IT partner that
            drives innovation and growth for companies worldwide.
          </p>
          <div >
            <Image src={img1} alt="Team" className="rounded-xl w-[700px] h-[150px] mt-3" />
          </div>
        </div>

        {/* About Card */}
        <div className="flex-1">
          <div className="bg-[#007475] p-6 rounded-xl text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">About Us</h2>
              <Image src={img2} alt="Logo" className="w-9 h-9" />
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              We are a Canada-based IT company delivering innovative technology solutions. Our
              team specializes in software development, cloud infrastructure, UI/UX design, and
              digital transformation. We work closely with businesses to understand their unique
              goals and challenges. We create tailored solutions that streamline operations and
              boost productivity. We combine technical expertise with creative thinking to drive
              meaningful results. We empower organizations to grow, stay competitive, and succeed
              in the digital era.
            </p>
          </div>
        </div>
      </div>

     <div className="flex h-25 w-300 border mb-10 p-6 rounded-xl ml-10 mr-10 mt-10  divide-x divide-black-300">
        <div className=" flex-1 text-center">
            
                <div className="font-bold text-4xl">200+</div>
                <div className="font-bold text-xl">Project comleted</div>
            
        </div>
        <div className="flex-1 text-center">
             <div className="font-bold text-4xl">150+</div>
                <div className="font-bold text-xl">Satisfied clients</div>
        </div>
        <div className="flex-1 text-center">
             <div className="font-bold text-4xl">10+</div>
                <div className="font-bold text-xl">On going project </div>
        </div>
     </div>

    </>
   
}