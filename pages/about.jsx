import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800/30  pt-20">
        <div className="p-10 m-5  ">
          <h1 className="flex justify-center tracking-widest text-2xl uppercase underline py-2 px-5 font-semibold ">
            about seywus technologies
          </h1>
          <p className="mt-5 flex justify-around tracking-widest text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil{' '}
            <br />
            molestias nemo corrupti reiciendis! Fugiat, veniam sequi dolores
            <br />
            omnis perferendis cum animi, labore sit culpa expedita cupiditate
            <br />
            est placeat dolorum nisi enim atque impedit eveniet aliquam aliquid
            <br />
            et. Molestiae, sequi tempore officiis est ab nisi? Ea voluptatibus
            <br />
            minus voluptatum totam doloremque esse deleniti eius aliquid, iure
            <br />
            amet! Necessitatibus tempore deleniti at expedita cumque quis fugit
            <br />
            dicta esse amet nostrum mollitia quam ipsa ipsum, quisquam qui
            <br />
            aliquam voluptates velit provident id reprehenderit magni saepe?
            <br />
            Sint consequatur animi dolorem, molestias ratione vel dolore quas
            <br />
            enim expedita veritatis, fuga aperiam unde sunt temporibus sapiente?
            <br />
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center ">
          <div className="shadow-xl rounded-md border-5 bg-slate-500 h-[30rem] w-[25rem] m-10 p-8">
            <div className="rounded-full bg-red-500 w-40 h-40 mx-auto overflow-hidden">
              <Image
                src="/assets/shopforme1.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                owusu victor
              </p>

              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                059-588-1014
              </p>
              <div className="flex justify-center gap-5 p-3 mt-[4rem]  px-5 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsTwitter />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="shadow-xl border-5 rounded-md bg-slate-500 h-[30rem] w-[25rem] m-10 p-8">
            <div className="rounded-full bg-red-500 w-40 h-40 mx-auto overflow-hidden">
              <Image
                src="/assets/shopforme1.jpg"
                alt="me"
                width="150px"
                height="150px"
                layout="responsive"
                objectFit="cover"
                className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              />
            </div>

            <div className="">
              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                owusu victor
              </p>

              <p className="text-yellow-500/75 flex justify-center mt-5 py-3 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                059-588-1014
              </p>
              <div className="flex justify-center gap-5 mt-[4rem] py-3 px-5 tracking-widest uppercase text-2xl shadow-lg rounded-md font-semibold">
                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </a>
                </Link>

                <Link href="">
                  <a className="shadow-lg shadow-gray-300 rounded-full py-2 px-2 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsTwitter />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-10">
          <h2 className="flex justify-center uppercase text-2xl tracking-widest underline font-semibold">
            about service renders
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 bg-black/10">
          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>

          <div className="shadow-xl border-5 bg-slate-500 h-[25rem] w-[20rem] m-8 p-5"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
