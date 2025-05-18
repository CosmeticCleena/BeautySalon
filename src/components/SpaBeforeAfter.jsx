import React from 'react'
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";

const images = [
  '/img/beforeAfter/jack1.jpeg',
  '/img/beforeAfter/jack2.jpeg',
  '/img/beforeAfter/jack3.jpeg',
  '/img/beforeAfter/jack4.jpeg',

];

const SpaBeforeAfter = () => {
  return (
    <div className="w-full flex flex-col items-center pt-24 pb-12">
              <div className="flex flex-col text-center justify-center mb-6 md:mb-8 lg:mb-10 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-normal">KHÁCH HÀNG LÀM ĐẸP THÀNH CÔNG </h2>
        <img src={FlowerUnderHeader} alt="Decorative divider" className="h-5 md:h-6 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 w-full max-w-7xl mb-8">
        {images.map((src, idx) => (
          <div key={idx} className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow">
            <img
              src={src}
              alt={`Khách hàng ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl">
        Hàng trăm khách hàng đã chia sẻ những câu chuyện và tình trạng riêng, tin tưởng đồng hành cùng Adela trên hành trình hoàn thiện ngoại hình của bản thân.
      </p>
    </div>
  )
}

export default SpaBeforeAfter
