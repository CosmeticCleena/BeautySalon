import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import avatar from "/img/avatar.svg";
import comment from "/img/comment.svg";
import articles from "../data/spaArticles";

const SpaBlog = ({ pageType }) => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-center gap-8 md:gap-12 lg:gap-16 mx-auto py-12 md:py-16 lg:py-24">
      {articles[pageType].header && (
        <>
          <div className="flex flex-col gap-3 md:gap-4 items-center">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">Blog</p>
            <img src={FlowerUnderHeader} alt="Decorative divider" className="h-5 md:h-auto" />
          </div>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-center">Our Latest News</h2>
        </>
      )}

      {/* Featured Article */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-20 text-[#6A6A6A]">
        <div className="w-full md:w-1/2 lg:w-5/12">
          <img 
            src={`${articles[pageType].blogs[0].image}`} 
            alt={articles[pageType].blogs[0].title} 
            className="w-full h-auto object-cover rounded-sm"
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 w-full md:w-1/2 lg:w-7/12">
          {articles[pageType].displayIcon && (
            <div className="flex flex-wrap gap-3 md:gap-4 text-[14px] md:text-[16px] lg:text-[20px] font-normal items-center">
              <img 
                src={avatar} 
                alt="Tác giả" 
                className="w-5 h-5 md:w-6 md:h-6"
                loading="lazy"
                width="24"
                height="24"
              />
              <p className="mr-3">{articles[pageType].blogs[0].author}</p>
              <img 
                src={comment} 
                alt="Bình luận" 
                className="w-5 h-5 md:w-6 md:h-6"
                loading="lazy"
                width="24"
                height="24"
              />
              <p>{articles[pageType].blogs[0].comments}</p>
            </div>
          )}

          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-bold leading-tight md:leading-[40px] lg:leading-[50px]">
            {articles[pageType].blogs[0].title}
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[28px] lg:leading-[32px]" dangerouslySetInnerHTML={{ __html: articles[pageType].blogs[0].excerpt }}>
          </p>
          <div className="flex justify-start w-full mt-2 md:mt-4">
            <button className="bg-[#D1AE62] w-full sm:w-fit hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
        {articles[pageType].blogs.slice(1).map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-3 md:gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-white rounded-sm overflow-hidden"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={`${article.image}`}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="225"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 p-3 md:p-4">
              {articles[pageType].displayIcon && (
                <div className="flex items-center flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                  <img 
                    src={avatar} 
                    alt="Tác giả" 
                    className="w-4 h-4 md:w-5 md:h-5"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <p className="truncate mr-1 md:mr-2">{article.author}</p>
                  <img 
                    src={comment} 
                    alt="Bình luận" 
                    className="w-4 h-4 md:w-5 md:h-5"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  <p>{article.comments}</p>
                </div>
              )}

              <h2 className="text-lg md:text-xl font-bold leading-tight h-12 overflow-hidden">
                {article.title}
              </h2>
              <p className="text-sm md:text-base font-normal leading-snug h-16 overflow-hidden">
                {article.excerpt}
              </p>
              <div className="flex justify-start w-full mt-1 md:mt-2">
                <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-1 md:py-2 px-4 md:px-6 transition-colors text-xs md:text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SpaBlog;