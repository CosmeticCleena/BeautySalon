import React, { useState, useRef, useEffect } from "react";
import FlowerUnderHeader from "/img/Flower-UnderHeader.svg";
import CallIcon from "/img/Call-Icon.svg";
import emailjs from "@emailjs/browser";

const SpaForm = ({ display }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  // Effect để xóa thông báo trạng thái sau 5 giây
  useEffect(() => {
    let timer;
    if (submitStatus.submitted) {
      timer = setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitStatus.submitted]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }

    if (!formData.service && formData.service !== 0) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_API_KEY
        )
        .then((result) => {
          setSubmitStatus({
            submitted: true,
            success: true,
            message: "Thank you! Your appointment request has been sent.",
          });
          setFormData({
            name: "",
            email: "",
            date: "",
            service: "",
            message: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setSubmitStatus({
            submitted: true,
            success: false,
            message: "Something went wrong. Please try again later.",
          });
          setIsSubmitting(false);
        });
    }
  };

  // Xác định nội dung và style cho nút dựa trên trạng thái
  const getButtonContent = () => {
    if (isSubmitting) {
      return "Sending...";
    } else if (submitStatus.submitted) {
      return submitStatus.success ? "✓ Sent Successfully!" : "✗ Failed to Send";
    } else {
      return "Đặt lịch hẹn ngay";
    }
  };

  const getButtonClass = () => {
    const baseClasses = "px-6 py-3 text-white transition-colors";

    if (isSubmitting) {
      return `${baseClasses} bg-gray-400`;
    } else if (submitStatus.submitted) {
      return submitStatus.success
        ? `${baseClasses} bg-green-600 hover:bg-green-700`
        : `${baseClasses} bg-red-600 hover:bg-red-700`;
    } else {
      return `${baseClasses} bg-[#D4AF37] hover:bg-[#c09c2f]`;
    }
  };

  return (
    <div
      className={`${
        display === "flex" ? "w-full" : ""
      } flex flex-col md:flex-row justify-center py-24`}
      id="form"
    >
      <div
        className={`${display} flex-col items-center md:items-start gap-5 md:gap-6 lg:gap-8`}
      >
        {/* Phần tiêu đề và thông tin không thay đổi */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-center md:text-left">
          Đặt lịch hẹn
        </h2>
        <img
          src={FlowerUnderHeader}
          alt="Decorative divider"
          className="h-5 md:h-auto"
        />
        <p className="max-w-[500px] text-center md:text-left text-sm md:text-base px-8 md:px-0">
          Liên hệ ngay với Cleena để được tư vấn miễn phí và lên phác đồ phù hợp
          với từng loại da của bạn
        </p>
        <div className="flex bg-[#FFF7F4] p-4 md:p-5 gap-3 md:gap-5 w-full md:w-auto justify-center md:justify-start">
          <img
            src={CallIcon}
            alt="Phone"
            className="w-10 h-10 md:w-auto md:h-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">
              Đặt lịch qua điện thoại{" "}
            </p>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">
              088 886 8856{" "}
            </p>
          </div>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`grid ${
          display == "flex" ? "md:grid-cols-2" : "grid-cols-1"
        } w-full md:w-[830px] gap-5 px-4`}
      >
        <div className="grid gap-5">
          {display == "hidden" && (
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-normal text-center">
              Đặt lịch hẹn
            </h2>
          )}
          {/* Phần input form không thay đổi */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-[#D8D8D8]"
              } focus:border-[#D1AE62] p-3 placeholder:px-1`}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-[#D8D8D8]"
              } focus:border-[#D1AE62] p-3 placeholder:px-1`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="date"
              name="date"
              placeholder="Enter Date*"
              value={formData.date}
              onChange={handleChange}
              className={`w-full border ${
                errors.date ? "border-red-500" : "border-[#D8D8D8]"
              } focus:border-[#D1AE62] p-3 placeholder:px-1`}
            />
            {errors.date && (
              <p className="mt-1 text-red-500 text-xs">{errors.date}</p>
            )}
          </div>

          {/* Nút submit desktop với trạng thái động */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`hidden ${
              display == "flex" ? "md:block" : ""
            } ${getButtonClass()}`}
          >
            {getButtonContent()}
          </button>
        </div>
        <div className="grid grid-rows-4 gap-5">
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full border ${
                errors.service ? "border-red-500" : "border-[#D8D8D8]"
              } focus:border-[#D1AE62] p-3 placeholder:px-4 row-span-1`}
            >
              <option value="" disabled>
                Select your option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-red-500 text-xs">{errors.service}</p>
            )}
          </div>

          <div className="row-span-2">
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-full border border-[#D8D8D8] focus:border-[#D1AE62] p-3 placeholder:px-1"
            ></textarea>
          </div>

          {/* Nút submit mobile với trạng thái động */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`block ${
              display == "flex" ? "md:hidden" : ""
            } ${getButtonClass()}`}
          >
            {getButtonContent()}
          </button>

          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600 text-sm">
              Quyền riêng tư của bạn là ưu tiên hàng đầu; chúng tôi không bao
              giờ thu thập dữ liệu cá nhân khi chưa có sự đồng ý.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SpaForm;
