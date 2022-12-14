import React from "react";

const Contacts = () => {
  return (
    <div
      name="LET'S WORK TOGETHER"
      className="w-full bg-milk flex justify-center p-4 leading-3"
    >
      <div className=" w-11/12 lg:w-1/2 grid grid-cols-2">
        <div className="font-logo mr-1">
          Stay In <span className="italic">The Know</span>
          <br />
          <br />
          <span className="text-default font-sans">
            Sign up with your email address to receive news and updates.
          </span>
          <br />
          <form className="pt-2">
            <div className="h-10">
              <input
                type="text"
                className="outline-none rounded-sm border-none text-default p-1 "
                placeholder="Email address"
              />
              <button className="text-default bg-salmon rounded-sm p-1 text-white font-sans ml-2">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div className="font-logo leading-3 text-black/90">
          <span>
            <span className="italic">Connect</span> With Us
          </span>
          <br />
          <br />
          <span className="text-default font-sans leading-masikip">
            Follow along with our social media accounts. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Incidunt ea nobis laboriosam sunt
            error, vero repellendus vel molestias, dicta corporis, aliquid
            ratione consequatur est similique perspiciatis et quod repellat
            earum?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
