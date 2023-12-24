

const User4 = () => {
    return (
        <div>
                    {/* card 2 */}
        <>
          <div className=" ">
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-500 transition-all duration-300 group-hover:scale-[10]" />
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-amber-600 transition-all duration-300 group-hover:bg-amber-900">
                  <img
                    className="rounded-full"
                    src="https://iili.io/JA4xXbn.jpg"
                    alt=""
                  />
                </span>
                <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    <span className="text-xl font-semibold">Olivia Rodriguez </span>
                  </p>
                  <p>
                    <span className="font-extralight">
                      Banker
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Benefits: </span>Access to
                    coding resources, programming tips, and a supportive
                    community.
                  </p>
                  <p>
                    <span className="font-semibold">Key Insights: </span>Showcasing a visually user design and gathering feedback from the creative community.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* https://play.tailwindcss.com/eCfibrSI2X */}
        </>
        </div>
    );
};

export default User4;