"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className=" h-[80vh] flex flex-col justify-center items-center">
      <p className=" lg:text-4xl md:text-3xl text-2xl font-semibold mb-10 text-center">
        Something went wrong!
      </p>
      <button
        className="glass py-3 px-6 rounded-lg lg:text-[16px] md:text-sm text-xs"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
