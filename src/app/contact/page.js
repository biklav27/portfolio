import React from "react";

function contact() {
  return (
    <section className="bg-[#D8BFD8] flex flex-col items-center px-40 py-10">
      <form className="px-5 py-20 bg-[#483248] flex flex-col gap-4 border">
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 font-bold text-xl">
            Email
          </label>
          <input type="text" className="py-0.5 w-80 bg-white text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 font-bold text-xl">
            Phone No.
          </label>
          <input type="text" className="py-0.5 w-80 bg-white text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="pb-2 font-bold text-xl">
            Message
          </label>
          <textarea type="text" className="py-0.5 w-80 bg-white text-black" />
        </div>
        {/* BUTTON */}
        <div className="">
          <button className="w-80 py-1.5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-900">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default contact;
