import React from "react";
import { useParams, Link } from "react-router-dom";
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import { newsItems } from "../data/newData";
import { Calendar, MessageSquare } from "lucide-react";

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          {block.content}
        </p>
      );

    case "image_row":
      return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {block.images.map((img, index) => (
            <div key={index} className="flex-1">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover rounded"
                width={img.width}
                height={img.height}
              />
            </div>
          ))}
        </div>
      );

    case "full_width_image":
      return (
        <div className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full h-auto object-cover rounded"
            width={block.width}
            height={block.height}
          />
        </div>
      );

    case "image_text_split":
      return (
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2">
            <img
              src={block.image.src}
              alt={block.image.alt}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="md:w-1/2 flex items-center">
            <p className="text-base text-gray-700 leading-relaxed">
              {block.content}
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div className="text-center py-20">Không tìm thấy bài viết</div>;
  }

  return (
    <>
      <HeroSubpage
        title={newsItem.title}
        subtitle={"Home / Blog Details"}
        imgLink={"/img/newDetail/Hero.svg"}
      />

      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:max-w-[60%] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:sticky md:top-24 h-fit flex md:flex-col items-center md:items-start gap-4 mb-6">
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src="/img/newDetail/logo/FB.svg"
                alt="Share on Facebook"
                className="w-[60px] h-[60px]"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src="/img/newDetail/logo/In.svg"
                alt="Share on LinkedIn"
                className="w-[60px] h-[60px]"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src="/img/newDetail/logo/IN.svg"
                alt="Share on Instagram"
                className="w-[60px] h-[60px]"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src="/img/newDetail/logo/Tg.svg"
                alt="Share on Telegram"
                className="w-[60px] h-[60px]"
              />
            </a>
          </div>
          <div className="flex-1 mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{newsItem.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                <span>{newsItem.comments} Comments</span>
              </div>
            </div>
            {newsItem.contentBlocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-8">
          {newsItem.prevPostId ? (
            <Link
              to={`/news/${newsItem.prevPostId}`}
              className="flex items-center gap-2 text-gray-700 hover:text-[#D1AE62]"
            >
              <span>← Previous</span>
            </Link>
          ) : (
            <div></div>
          )}

          {newsItem.nextPostId ? (
            <Link
              to={`/news/${newsItem.nextPostId}`}
              className="flex items-center gap-2 text-gray-700 hover:text-[#D1AE62]"
            >
              <span>Next →</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
