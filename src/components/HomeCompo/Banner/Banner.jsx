const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://iili.io/JAhEHgt.png"
              alt=""
              className="object-contain top h-72 sm:h-80 lg:h-[50vh] xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold">
              Manage work <br />
              <span className="text-amber-600">Efficiently.</span>
            </h1>
            <h3 className="my-4 text-2xl font-semibold">
              Plan, Track and Organise your work.
            </h3>
            <p className="py-3 ">
              An Intranet platform to Manage projects, organise work and focus
              on what’s important.
            </p>
            <div className="space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="btn bg-amber-600 text-white">
                Let’s Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
