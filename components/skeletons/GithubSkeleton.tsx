const GithubSkeleton = () => {
  return (
    <main className="rounded-xl bg-slate-800  md:w-[620px] sm:w-[550px] w-[500px]">
      <header className="bg-slate-900 w-full flex items-center justify-between mb-6 px-4 py-3 rounded-t-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
          <div className="glass w-4 h-4 rounded-full"></div>
        </div>
        <div className="glass rounded-xl md:h-7 h-6 w-[250px]"></div>
        <div className="w-9"></div>
      </header>

      <section className="flex flex-col items-start px-4 mb-5">
        <div className="flex items-center">
          <div className="glass md:w-6 md:h-6 w-5 h-5 rounded-full mr-2 animate-pulse"></div>
          <div className="glass w-[150px] md:h-6 h-5 rounded-lg animate-pulse"></div>
          <div className="glass ml-4 py-3 px-7 rounded-full animate-pulse"></div>
        </div>
        <div className="glass w-[80%] md:h-6 h-5 mt-4 mb-3 rounded-lg animate-pulse"></div>

        <section>
          <div className="glass w-20 md:h-5 h-4 md:my-3 my-2 rounded-lg animate-pulse"></div>
          <div className="glass w-20 md:h-5 h-4 md:my-3 my-2 rounded-lg animate-pulse"></div>
          <div className="glass w-20 md:h-5 h-4 md:my-3 my-2 rounded-lg animate-pulse"></div>

          <div className=" flex items-start md:my-3 my-2 ">
            {[1, 2, 3, 4].map((data) => {
              return (
                <div
                  className="glass w-16 md:h-5 h-4 m-1 rounded-lg animate-pulse"
                  key={data}
                ></div>
              );
            })}
          </div>
        </section>

        <div className="glass w-full h-[1px] my-3"></div>
        <section className="flex items-center flex-wrap justify-start mt-2">
          <div className="glass md:w-24 md:h-7 w-20 h-6 rounded-lg m-1 animate-pulse"></div>
          <div className="glass md:w-24 md:h-7 w-20 h-6 rounded-lg m-1 animate-pulse"></div>
          <div className="glass md:w-24 md:h-7 w-20 h-6 rounded-lg m-1 animate-pulse"></div>
          <div className="glass md:w-24 md:h-7 w-20 h-6 rounded-lg m-1 animate-pulse"></div>
          <div className="glass md:w-24 md:h-7 w-20 h-6 rounded-lg m-1 animate-pulse"></div>
        </section>
      </section>
    </main>
  );
};

export default GithubSkeleton;
