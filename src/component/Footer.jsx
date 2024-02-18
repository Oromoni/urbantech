import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black text-white flex flex-col justify-center items-center border-t border-b md:h-44">
        <h6 className="mt-4 md:mt-5  text-white  text-2xl">
          Subscribe to UrbanTech's newsletter
        </h6>
        <input
          type="Email"
          className="border border-grey mt-4 w-80 h-12 rounded-lg px-2 focus:outline-none mb-6"
          placeholder="Your E-Mail Address"
        />
      </div>

      <div className="flex flex-row justify-between items-center p-2 mx-2 bg-white">
        <div>
          <p className="text-black"> © 2023, UrbanTech </p>
        </div>

        <div className="flex flex-row gap-5">
          <a
            href="https://open.spotify.com/artist/78f1mE1ztZNJ2itM6obRBB/"
            target="_blank"
            rel="noreferrer">
            <p>logo3</p>
          </a>
          <a
            href="https://www.instagram.com/stillitty/"
            target="_blank"
            rel=" noreferrer">
            <p>logo2</p>
          </a>
          <a
            href="https://twitter.com/stillitty"
            target="_blank"
            rel=" noreferrer">
            <p>Logo1</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
