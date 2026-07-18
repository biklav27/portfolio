import React from "react";

function projects() {
  return (
    <section className="px-40 py-10 bg-green-700">
      <div className="">
        <h1 className="text-white text-center text-4xl font-bold">
          My Projects
        </h1>
        <div className="pt-5 grid grid-cols-4 items-center gap-5 ">
          <div className="px-6 py-6 rounded-2xl border text-center shadow-lg bg-transparent">
            <h2 className="font-bold">Google Clone</h2>
            <p>
              Responsive Google <br /> homepage clone.
            </p>
          </div>
          <div className="px-6 py-6 rounded-2xl border text-center shadow-lg bg-transparent">
            <h2 className="font-bold">Calculator App</h2>
            <p>Modern UI calculator with JS.</p>
          </div>
          <div className="px-6 py-6 rounded-2xl border text-center shadow-lg bg-transparent">
            <h2 className="font-bold">Airplane Game</h2>
            <p>HTML, CSS & JS interactive Game.</p>
          </div>
          <div className="px-4 py-6 rounded-2xl border text-center shadow-lg bg-transparent">
            <h2 className="font-bold">Basic Layout student Portfolio</h2>
            <p>HTML, CSS Basic Layout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects;
