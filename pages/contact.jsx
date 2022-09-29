import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh_-_68px)] bg-gray-800/30 flex flex-col justify-center items-center">
        <h3 className="text-3xl mb-7 tracking-widest capitalize ">
          contact us
        </h3>

        <form className="border-2 max-w-xl w-full p-5 rounded space-y-3">
          <p className=" text-center uppercase underline tracking-widest text-yellow-600/70 font-bold">
            {' '}
            leave a comment
          </p>
          <div className="tracking-widest capitalize">
            <label htmlFor="title" className="block text-xl ">
              <p className="">name</p>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            />
          </div>

          <div className="">
            <label
              htmlFor="title"
              className="block text-xl tracking-widest capitalize"
            >
              email
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            />
          </div>

          <div className="">
            <label
              htmlFor="body"
              className="block text-xl tracking-widest capitalize"
            >
              comment
            </label>
            <textarea
              name="body"
              id="body"
              type="text"
              cols="30"
              rows="10"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="mt-2 border rounded-md text-yellow-900 shadow-lg py-3 px-8 hover:bg-cyan-500 hover:text-white duration-200 tracking-widest capitalize">
              send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
