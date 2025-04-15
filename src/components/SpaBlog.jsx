import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

import avatar from "/img/avatar.svg";
import comment from "/img/comment.svg";
import articles from "../data/spaArticles";
const SpaBlog = ({ pageType }) => {
  return (
    <div className="w-full flex flex-col items-center px-6 sm:px-26 lg:px-34 xl:px-52 justify-center gap-16 mx-auto py-24">
      {articles[pageType].header ? (
        <>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-[20px] font-medium">Blog</p>
            <img src={FlowerUnderHeader} alt="" />
          </div>
          <h2 className="text-[44px] font-normal">Our Latest News</h2>
        </>
      ) : (
        <></>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-20 text-[#6A6A6A]">
        <img src={`${articles[pageType].blogs[0].image}`} alt="" />
        <div className="flex flex-col gap-10">
          {articles[pageType].displayIcon ? (
            <>
              {" "}
              <div className="flex gap-4 *:text-[20px] *:font-normal">
                <img src={avatar} alt="" />
                <p>{articles[pageType].blogs[0].author}</p>
                <img src={comment} alt="" />
                <p>{articles[pageType].blogs[0].comments}</p>
              </div>
            </>
          ) : (
            <></>
          )}

          <h2 className="text-[34px] font-bold leading-[50px]">
            {articles[pageType].blogs[0].title}
          </h2>
          <p className="text-[20px] font-normal leading-[32px]">
            {articles[pageType].blogs[0].excerpt}
          </p>
          <div className="flex justify-start w-full">
            <button className="bg-[#D1AE62] w-full md:w-fit hover:bg-[#D1B76E] text-white py-3 px-8 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-8">
        {articles[pageType].blogs.slice(1).map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-4 w-full md:w-1/4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={`${article.image}`}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 p-4">
              {articles[pageType].displayIcon && (
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <img src={avatar} alt="" className="w-5 h-5" />
                  <p className="truncate">{article.author}</p>
                  <img src={comment} alt="" className="w-5 h-5" />
                  <p>{article.comments}</p>
                </div>
              )}

              <h2 className="text-xl font-bold leading-tight h-12 overflow-hidden">
                {article.title}
              </h2>
              <p className="text-base font-normal leading-snug h-16 overflow-hidden">
                {article.excerpt}
              </p>
              <div className="hidden md:block flex justify-start w-full mt-2">
                <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 px-6 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaBlog;
