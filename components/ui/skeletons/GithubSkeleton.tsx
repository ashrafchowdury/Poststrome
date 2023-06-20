const GithubSkeleton = () => {
  return (
    <main className="rounded-xl bg-slate-800 w-[620px]">
      <header className="bg-slate-900 w-full flex items-center justify-between mb-6 px-4 py-3 rounded-t-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
        </div>
        <div className="glass rounded-xl h-7 w-[250px]"></div>
        <div className="w-9"></div>
      </header>

      <section className="flex flex-col items-start px-4 mb-5">
        <div className="flex items-center">
          <div className="glass w-6 h-6 rounded-full mr-2 animate-pulse"></div>
          <div className="glass w-[150px] h-6 rounded-lg animate-pulse"></div>
          <div className="glass ml-4 py-3 px-7 rounded-full animate-pulse"></div>
        </div>
        <div className="glass w-[80%] h-6 mt-4 mb-3 rounded-lg animate-pulse"></div>

        <section>
          <div className="glass w-20 h-5 my-3 rounded-lg animate-pulse"> </div>
          <div className="glass w-20 h-5 my-3 rounded-lg animate-pulse"> </div>
          <div className="glass w-20 h-5 my-3 rounded-lg animate-pulse"> </div>

          <div className=" flex items-start my-3">
            {[1, 2, 3, 4].map((data) => {
              return (
                <div
                  className="glass w-16 h-5 m-1 rounded-lg animate-pulse"
                  key={data}
                ></div>
              );
            })}
          </div>
        </section>

        <div className="glass w-full h-[1px] my-3"></div>
        <section className="flex items-center flex-wrap justify-start mt-2">
          <div className="glass w-24 h-7 rounded-lg m-1 animate-pulse"></div>
          <div className="glass w-24 h-7 rounded-lg m-1 animate-pulse"></div>
          <div className="glass w-24 h-7 rounded-lg m-1 animate-pulse"></div>
          <div className="glass w-24 h-7 rounded-lg m-1 animate-pulse"></div>
          <div className="glass w-24 h-7 rounded-lg m-1 animate-pulse"></div>
        </section>
      </section>
    </main>
  );
};

export default GithubSkeleton;
