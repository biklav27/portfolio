import React from "react";

function skills() {
  return (
    // skills section
    <section className="px-40 py-10 bg-[#099]">
      <div className="">
        <h1 className="text-white text-center text-4xl font-bold">My Skills</h1>
        <div className="pt-5 grid grid-cols-3 items-center gap-[60px] ">
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-yellow-700 font-bold cursor-pointer">
            <h2>HTML</h2>
            <p>
              Clean and semantic <br /> structure.
            </p>
          </div>
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-[#e6c681] font-bold cursor-pointer">
            <h2>CSS</h2>
            <p>
              Morder UI with <br /> responsive design.
            </p>
          </div>
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-yellow-700 font-bold cursor-pointer">
            <h2>JavaScript</h2>
            <p>
              Interactive and dynamic <br /> features.
            </p>
          </div>
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-yellow-700 font-bold cursor-pointer">
            <h2>MYsql</h2>
            <p>
              Creating Database at <br /> high level in Mysql.
            </p>
          </div>
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-yellow-700 font-bold cursor-pointer">
            <h2>React Js</h2>
            <p>
              Clean and semantic <br /> structure.
            </p>
          </div>
          <div className="px-8 py-6 rounded-2xl border text-center shadow-lg bg-yellow-700 font-bold cursor-pointer">
            <h2>GIT & GITHUB</h2>
            <p>
              GIT & GITHUB one years <br /> experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills;
