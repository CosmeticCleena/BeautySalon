import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import { contactInfo } from "../../data/contactInfo";
import SpaForm from "../../components/SpaForm";

const GetInTouch = () => {
   const isUrl = (text) => {
    try {
      const url = new URL(text);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };

  // Hàm kiểm tra xem text có phải email không
  const isEmail = (text) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[44px] md:text-[36px] sm:text-[30px] font-medium mb-2 text-center px-4">
          Liên hệ với chúng tôi
        </h2>
        <img 
          src={FlowerUnderHeader} 
          alt="Yếu tố trang trí hoa - CLEENA" 
          loading="lazy"
          width="auto"
          height="24"
        />
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#FFF7F4] p-5 md:p-6 lg:p-8 gap-3 md:gap-4 
                       cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out 
                       rounded-lg shadow-lg min-h-[300px]"
          >
            <img
              src={item.image}
              alt={`${item.title} icon`}
              className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]"
              loading="lazy"
              width="80"
              height="80"
            />
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold break-words">
              {item.title}
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium break-words flex-grow">
              {item.description}
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium break-words">
              {isUrl(item.contact) ? (
                <a
                  href={item.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {item.contact}
                </a>
              ) : isEmail(item.contact) ? (
                <a href={`mailto:${item.contact}`} className="text-blue-600 underline">
                  {item.contact}
                </a>
              ) : (
                item.contact
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row mt-16">
        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.8823161001756!2d105.87809485191738!3d21.046282648419957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a98d2d829ae7%3A0x2ca7c0ac000bda72!2zVmnhu4duIHRo4bqpbSBt4bu5IENMRUVOQQ!5e1!3m2!1sen!2s!4v1744698905493!5m2!1sen!2s"
            width="100%"
            style={{ border: 0, height: "100%", minHeight: "400px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <SpaForm display={"hidden"} />
      </div>
    </div>
  );
};

export default GetInTouch;