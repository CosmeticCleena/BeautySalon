// import React from "react";
// import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
// import Spa1 from "/img/Spa1.svg";
// import Spa2 from "/img/Spa2.svg";
// import Spa3 from "/img/Spa3.svg";
// import Spa4 from "/img/Spa4.svg";
// import Spa5 from "/img/Spa5.svg";

// const SpaGallerySection = () => {
//   return (
//     <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 max-w-6xl">
//       <div className="flex flex-col text-center justify-center mb-6 md:mb-8 lg:mb-10 gap-4">
//         <h2 className="text-[18px] md:text-[20px] font-normal">About Us</h2>
//         <img src={FlowerUnderHeader} alt="Decorative divider" className="h-5 md:h-6 mx-auto" />
//       </div>

//       <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-light text-gray-800 mb-4 md:mb-6">
//         Your Destination for Relaxation and Rejuvenation.
//       </h1>

//       <div className="max-w-3xl mx-auto text-center text-gray-600 mb-8 md:mb-12 lg:mb-16 px-4">
//         <p className="text-sm md:text-base">
//           Lorem ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </p>
//       </div>

//       {/* Desktop layout - hidden on mobile */}
//       <div className="hidden md:flex justify-between gap-4 lg:gap-28 mb-8 md:mb-12">
//         <div className="flex">
//           <div className="self-end pb-20 md:pb-40">
//             <img 
//               src={Spa2} 
//               alt="" 
//               className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[202px] lg:h-[202px] object-cover" 
//             />
//           </div>
//           <div className="flex items-center justify-center h-48 md:h-64 w-12 md:w-16">
//             <p className="transform -rotate-90 origin-center whitespace-nowrap text-xs md:text-sm lg:text-base font-medium">
//               Skilled and Certified Professionals
//             </p>
//           </div>
//           <div className="relative">
//             <img 
//               src={Spa1} 
//               alt="" 
//               className="w-[220px] h-[340px] md:w-[300px] md:h-[450px] lg:w-[363px] lg:h-[554px] object-cover" 
//             />
//             <p className="text-[14px] md:text-[16px] lg:text-[18px] absolute left-1/3 w-full">
//               Certified FDA-Approved Materials
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-between gap-2 md:gap-3 lg:gap-5">
//           <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 relative">
//             <img 
//               src={Spa3} 
//               alt="" 
//               className="w-[160px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] object-cover" 
//             />
//             <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-xs md:text-sm lg:text-base w-full">
//               More Than 20 Operators
//             </p>
//             <img 
//               src={Spa4} 
//               alt="" 
//               className="w-[160px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] object-cover" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <div className="pt-5 md:pt-8 lg:pt-10">
//               <img 
//                 src={Spa5} 
//                 alt="" 
//                 className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[203px] lg:h-[203px] object-cover" 
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout - visible only on small screens */}
//       <div className="md:hidden flex flex-col gap-8 mb-8">
//         <div className="flex flex-col items-center gap-4">
//           <img src={Spa1} alt="" className="w-full max-w-[300px] h-auto object-cover rounded" />
//           <p className="text-center font-medium">Certified FDA-Approved Materials</p>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex flex-col items-center gap-2">
//             <img src={Spa2} alt="" className="w-full h-[150px] object-cover rounded" />
//             <p className="text-center text-sm">Skilled and Certified Professionals</p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <img src={Spa5} alt="" className="w-full h-[150px] object-cover rounded" />
//             <p className="text-center text-sm">Premium Service</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex flex-col items-center gap-2">
//             <img src={Spa3} alt="" className="w-full h-[150px] object-cover rounded" />
//             <p className="text-center text-sm">More Than 20 Operators</p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <img src={Spa4} alt="" className="w-full h-[150px] object-cover rounded" />
//             <p className="text-center text-sm">Advanced Equipment</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
//         <button className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
//           More About Us
//         </button>
//         <button className="border border-[#E2C87E] text-[#E2C87E] hover:bg-[#E2C87E] hover:text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
//           Make A Call
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpaGallerySection;

import React from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import Spa1 from "/img/Spa1.jpg";
import Spa2 from "/img/Spa2.svg";
import Spa3 from "/img/Spa3.webp";
import Spa4 from "/img/Spa4.svg";
import Spa5 from "/img/Spa5.webp";

const SpaGallerySection = () => {
  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 max-w-6xl">
      <div className="flex flex-col text-center justify-center mb-6 md:mb-8 lg:mb-10 gap-4">
        <h2 className="text-[18px] md:text-[20px] font-normal">TỔNG QUAN THƯƠNG HIỆU</h2>
        <img
          src={FlowerUnderHeader}
          alt="Yếu tố trang trí hoa - CLEENA"
          className="h-5 md:h-6 mx-auto"
          loading="lazy"
          width="auto"
          height="24"
        />
      </div>

      {/* Gallery layout inspired by the image */}
      <div className="hidden md:flex flex-col md:flex-row gap-6 mb-12">
        {/* Left text section - with vertical centering */}
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#A37D4E] mb-4">THẨM MỸ QUỐC TẾ CLEENA</h2>
          <p className="text-gray-700 mb-6">
            CLEENA được sáng lập bởi CEO Lưu Thu Trang – người tiên phong đưa công nghệ vi sinh Postbiotic 99% 2 in 1 từ Hàn Quốc về Việt Nam, đánh dấu bước ngoặt trong lĩnh vực điều trị nám chuyên sâu. Với tầm nhìn xa và niềm đam mê mãnh liệt với ngành làm đẹp, bà Trang đã không ngừng nghiên cứu, phát triển và ứng dụng các công nghệ hiện đại.
          </p>

          <p className="text-gray-700">
            Với khát khao mang đến sự tự tin và hạnh phúc đích thực cho từng khách hàng, CLEENA không ngừng hoàn thiện chất lượng dịch vụ. Tại đây, từng quy trình làm đẹp đều được chăm chút tỉ mỉ theo tiêu chuẩn 5 sao, kết hợp máy móc tân tiến, công nghệ đột phá và đội ngũ chuyên viên tận tâm.
          </p>
        </div>

        {/* Center large image */}
        <div className="md:w-3/5">
          <img
            src={Spa1}
            alt="CLEENA Spa - Không gian sang trọng hiện đại"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover object-right rounded-md shadow-lg"
            loading="lazy"
            width="600"
            height="500"
          />
        </div>

        {/* Right two stacked images */}
        <div className="md:w-1/4 flex flex-col gap-6">
          <div>
            <img
              src={Spa3}
              alt="CLEENA - Trải nghiệm khách hàng chuyên nghiệp"
              className="w-full h-[140px] md:h-[240px] lg:h-[290px] object-cover rounded-md shadow-lg"
              loading="lazy"
              width="300"
              height="240"
            />
          </div>
          <div>
            <img
              src={Spa5}
              alt="CLEENA - Đội ngũ chuyên viên tận tâm"
              className="w-full h-[140px] md:h-[240px] lg:h-[290px] object-cover rounded-md shadow-lg"
              loading="lazy"
              width="300"
              height="240"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout for the gallery - visible only on small screens */}
      <div className="md:hidden flex flex-col gap-6 mb-8">
        <h2 className="text-2xl font-medium text-[#A37D4E] mb-2 text-center">THẨM MỸ QUỐC TẾ CLEENA</h2>
        <img
          src={Spa1}
          alt="CLEENA Spa - Không gian sang trọng hiện đại"
          className="w-full h-[380px] object-cover rounded-md shadow-lg"
          loading="lazy"
          width="400"
          height="380"
        />
        <div className="grid grid-cols-2 gap-4">
          <img
            src={Spa3}
            alt="CLEENA - Trải nghiệm khách hàng"
            className="w-full h-[120px] object-cover rounded-md shadow-lg"
            loading="lazy"
            width="200"
            height="120"
          />
          <img
            src={Spa5}
            alt="CLEENA - Đội ngũ chuyên viên"
            className="w-full h-[120px] object-cover rounded-md shadow-lg"
            loading="lazy"
            width="200"
            height="120"
          />
        </div>
        <p className="text-gray-700 text-sm">
          CLEENA được sáng lập bởi CEO Lưu Thu Trang – người tiên phong đưa công nghệ vi sinh Postbiotic 99% 2 in 1 từ Hàn Quốc về Việt Nam, đánh dấu bước ngoặt trong lĩnh vực điều trị nám chuyên sâu. CLEENA – không chỉ là nơi chăm sóc sắc đẹp, mà là nơi khởi nguồn của sự thay đổi tích cực.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button
          className="bg-[#D1AE62] hover:bg-[#D1B76E] text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base"
          aria-label="Đọc thêm về CLEENA"
        >
          Đọc thêm
        </button>
        {/* <button className="border border-[#E2C87E] text-[#E2C87E] hover:bg-[#E2C87E] hover:text-white py-2 md:py-3 px-6 md:px-8 transition-colors text-sm md:text-base">
          Make A Call
        </button> */}
      </div>
    </div>
  );
};

export default SpaGallerySection;