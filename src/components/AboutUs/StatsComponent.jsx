import React from "react";

const StatsComponent = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-16 mb-12">
            <div className="max-w-6xl mx-auto">
                {/* Stats Number */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                        5.000<span className="text-amber-400">+</span>
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 tracking-wide">
                        Khách hàng
                    </p>
                </div>

                {/* Description Text */}
                <div className="text-center max-w-5xl mx-auto">
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 font-light">
                        Dẫn đầu ngành trị nám thế hệ mới tại Việt Nam, với hơn 10 năm nghiên cứu & thực chiến trong lĩnh vực trị nám – Đưa công nghệ trị nám vi sinh Postbiotic độc quyền Hàn Quốc về Việt Nam, mở ra xu hướng trị nám không xâm lấn, không bào mòn, không tái nám.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatsComponent;