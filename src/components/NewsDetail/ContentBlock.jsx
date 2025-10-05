import React, { memo } from 'react';

const ContentBlock = memo(({ block }) => {
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
                loading="lazy"
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
            loading="lazy"
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
              loading="lazy"
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
});

ContentBlock.displayName = 'ContentBlock';

export default ContentBlock;