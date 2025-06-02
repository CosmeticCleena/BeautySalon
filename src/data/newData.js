export const newsItems = [
  {
    id: 1,
    title: 'XỬ LÍ NÁM, TÀN NHANG BẰNG CÔNG NGHỆ LASER LIỆU CÓ HIỆU QUẢ?',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/8.png',
    category: 'Beauty Treatment',
    views: 2890,
    comments: 24,
    author: {
      name: "Daniel Charence",
      image: "/img/avt.svg",
      role: "Senior Hair Stylist"
    },
    publishedDate: "June 24, 2024",
    tags: ["Hair Care", "Beauty Tips", "Color Treatment"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Hair treatment process",
            caption: "Professional hair coloring techniques"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Hair treatment result",
            caption: "Long-lasting color results"
          }
        ]
      },
      {
        type: "heading",
        content: "Temperature Control Is Essential"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Facial treatment procedure",
        caption: "Advanced hair color protection techniques"
      }
    ],
    nextPostId: 2,
    prevPostId: null
  },
  {
    id: 2,
    title: 'NHỮNG ĐIỀU BẠN CẦN BIẾT TRƯỚC KHI XỬ LÍ NÁM',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image1.svg',
    category: 'Spa & Wellness',
    views: 1570,
    comments: 18,
    author: {
      name: "Emma Roberts",
      image: "/img/avt.svg",
      role: "Wellness Specialist"
    },
    publishedDate: "June 20, 2024",
    tags: ["Spa", "Relaxation", "Self-care"],
    contentBlocks: [
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Spa treatment"
        },
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "Taking time to restore your body and mind is not a luxury, it's a necessity in today's fast-paced world.",
        author: "Emma Roberts"
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Spa treatment process",
            caption: "Deep tissue massage therapy"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Spa treatment result",
            caption: "Hot stone relaxation techniques"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Spa treatment procedure",
        caption: "Our luxury spa facility"
      }
    ],
    nextPostId: 3,
    prevPostId: 1
  },
  {
    id: 3,
    title: 'Mấy buổi thì thấy lông mỏng đi, thưa đi?\nBao nhiêu buổi thì triệt sạch?',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/longnach.jpg',
    category: 'Facial Treatment',
    views: 3240,
    comments: 32,
    author: {
      name: "Dr. Sarah Johnson",
      image: "/img/avt.svg",
      role: "Dermatologist"
    },
    publishedDate: "June 17, 2024",
    tags: ["Facial Care", "Skin Health", "Treatment"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Facial treatment step 1",
            caption: "Initial cleansing"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Facial treatment step 2",
            caption: "Exfoliation process"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Facial treatment step 3",
            caption: "Final hydration"
          }
        ]
      },
      {
        type: "heading",
        content: "Benefits of Regular Facial Treatments"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "conclusion_box",
        title: "Professional Recommendation",
        content: "For best results, we recommend scheduling a facial treatment once every 4-6 weeks to maintain skin health and address specific concerns as they arise."
      }
    ],
    nextPostId: 4,
    prevPostId: 2
  },
  {
    id: 4,
    title: 'Ways to Prolong the Vibrancy of Your Hair Color',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/longnach2.webp',
    category: 'Beauty Treatment',
    views: 3120,
    comments: 29,
    author: {
      name: "Jennifer Matthews",
      image: "/img/avt.svg",
      role: "Color Specialist"
    },
    publishedDate: "June 15, 2024",
    tags: ["Hair Coloring", "Hair Care", "Beauty"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Hair color maintenance",
            caption: "Color-preserving techniques"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Hair color treatment",
            caption: "Professional styling after coloring"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "The key to maintaining vibrant hair color is proper aftercare and using the right products for your specific hair type.",
        author: "Jennifer Matthews"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Hair color variety",
        caption: "Our salon offers unlimited color options"
      }
    ],
    nextPostId: 5,
    prevPostId: 3
  },
  {
    id: 5,
    title: 'GIẢM BÉO CÓ HIỆU QUẢ KHÔNG , LÀM XONG GIẢM THẬT HAY CHỈ LÀ QUẢNG CÁO ?',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/images.jpeg',
    category: 'Spa & Wellness',
    views: 2780,
    comments: 22,
    author: {
      name: "Maya Williams",
      image: "/img/avt.svg",
      role: "Holistic Beauty Expert"
    },
    publishedDate: "June 10, 2024",
    tags: ["Holistic Beauty", "Natural Ingredients", "Wellness"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Holistic beauty treatments"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "The Mind-Body Connection in Beauty"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Holistic wellness center",
        caption: "Our holistic approach combines traditional and modern techniques"
      }
    ],
    nextPostId: 6,
    prevPostId: 4
  },
  {
    id: 6,
    title: 'GIẢM BÉO HIỆU QUẢ GIỮ ĐƯỢC BAO LÂU? CÓ CẦN DUY TRÌ THƯỜNG XUYÊN KHÔNG?',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/images1.jpeg',
    category: 'Facial Treatment',
    views: 1950,
    comments: 17,
    author: {
      name: "Robert Chen",
      image: "/img/avt.svg",
      role: "Nutritionist & Hair Specialist"
    },
    publishedDate: "June 5, 2024",
    tags: ["Hair Growth", "Nutrition", "Minerals"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Key Minerals for Hair Health"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Hair mineral analysis",
            caption: "Measuring mineral content in hair"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Mineral-rich foods",
            caption: "Foods that promote hair health"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "The health of your hair begins from the inside. No external treatment can fully compensate for nutritional deficiencies.",
        author: "Robert Chen"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Healthy hair results",
        caption: "Results after three months of mineral supplementation"
      }
    ],
    nextPostId: 7,
    prevPostId: 5
  },
  {
    id: 7,
    title: 'Revitalizing Your Skin with Natural Ingredients',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image6.svg',
    category: 'Beauty Treatment',
    views: 2340,
    comments: 26,
    author: {
      name: "Aisha Johnson",
      image: "/img/avt.svg",
      role: "Organic Skincare Specialist"
    },
    publishedDate: "June 1, 2024",
    tags: ["Natural Skincare", "Organic Beauty", "Skin Revitalization"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Natural ingredients",
            caption: "Raw ingredients in our skincare"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Mixing process",
            caption: "Handcrafted formulation process"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Final product",
            caption: "Finished natural skincare products"
          }
        ]
      },
      {
        type: "heading",
        content: "Why Natural Ingredients Matter"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "conclusion_box",
        title: "Our Commitment",
        content: "We use only ethically sourced, organic ingredients in all our treatments and products, ensuring both effectiveness and environmental responsibility."
      }
    ],
    nextPostId: 8,
    prevPostId: 6
  },
  {
    id: 8,
    title: 'The Science Behind Effective Anti-Aging Products',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image7.svg',
    category: 'Facial Care',
    views: 2680,
    comments: 31,
    author: {
      name: "Dr. Michael Thompson",
      image: "/img/avt.svg",
      role: "Cosmetic Scientist"
    },
    publishedDate: "May 28, 2024",
    tags: ["Anti-Aging", "Skincare Science", "Clinical Research"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Laboratory research"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "Key Ingredients in Anti-Aging Formulations"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Retinol effects",
            caption: "Before and after retinol treatment"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Peptide formulations",
            caption: "Advanced peptide technology"
          }
        ]
      },
      {
        type: "quote",
        content: "Scientific evidence, not marketing claims, should guide your choice of anti-aging products.",
        author: "Dr. Michael Thompson"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Clinical trials",
        caption: "Our products undergo rigorous clinical testing"
      }
    ],
    nextPostId: 9,
    prevPostId: 7
  },
  {
    id: 9,
    title: 'Seasonal Hair Care Tips for All Hair Types',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image.svg',
    category: 'Beauty Treatment',
    views: 1860,
    comments: 14,
    author: {
      name: "Jessica Parker",
      image: "/img/avt.svg",
      role: "Hair Care Expert"
    },
    publishedDate: "May 25, 2024",
    tags: ["Seasonal Hair Care", "Hair Tips", "All Hair Types"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Spring Hair Care Essentials"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "Summer Protection Strategies"
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Summer hair protection",
            caption: "UV protection for colored hair"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Beach hair care",
            caption: "Protecting hair from salt water"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Year-round hair care",
        caption: "Adapting your hair care routine throughout the seasons"
      }
    ],
    nextPostId: 10,
    prevPostId: 8
  },
  {
    id: 10,
    title: 'Understanding Different Massage Techniques',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image1.svg',
    category: 'Spa & Wellness',
    views: 2190,
    comments: 19,
    author: {
      name: "Thomas Rivera",
      image: "/img/avt.svg",
      role: "Massage Therapist"
    },
    publishedDate: "May 20, 2024",
    tags: ["Massage", "Relaxation", "Therapy Techniques"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Swedish massage",
            caption: "Swedish massage technique"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Deep tissue massage",
            caption: "Deep tissue pressure points"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Hot stone massage",
            caption: "Hot stone placement"
          }
        ]
      },
      {
        type: "heading",
        content: "Choosing the Right Massage for Your Needs"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "The right massage technique can transform not just your body, but your overall well-being.",
        author: "Thomas Rivera"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Massage therapy room",
        caption: "Our tranquil massage therapy environment"
      }
    ],
    nextPostId: 11,
    prevPostId: 9
  },
  {
    id: 11,
    title: 'Innovative Facial Treatments for Sensitive Skin',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image2.svg',
    category: 'Facial Care',
    views: 3390,
    comments: 38,
    author: {
      name: "Dr. Emily Wong",
      image: "/img/avt.svg",
      role: "Skincare Specialist"
    },
    publishedDate: "May 15, 2024",
    tags: ["Sensitive Skin", "Facial Treatment", "Skincare Innovation"],
    contentBlocks: [
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Gentle facial treatment"
        },
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "Revolutionary Approaches for Reactive Skin"
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "LED therapy",
            caption: "LED light therapy for sensitive skin"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Enzyme treatment",
            caption: "Gentle enzyme exfoliation"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "conclusion_box",
        title: "Personalized Approach",
        content: "Every sensitive skin treatment at our facility begins with a thorough analysis to create a truly customized care plan for your unique needs."
      }
    ],
    nextPostId: 12,
    prevPostId: 10
  },
  {
    id: 12,
    title: 'Balancing Your Skincare Routine for Combination Skin',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image3.svg',
    category: 'Beauty Treatment',
    views: 2740,
    comments: 23,
    author: {
      name: "Olivia Bennett",
      image: "/img/avt.svg",
      role: "Esthetician"
    },
    publishedDate: "May 10, 2024",
    tags: ["Combination Skin", "Skincare Balance", "Beauty Routine"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Understanding Combination Skin"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "T-zone treatment",
            caption: "Managing oily T-zone"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Cheek hydration",
            caption: "Hydrating dry cheek areas"
          }
        ]
      },
      {
        type: "quote",
        content: "The key to managing combination skin is not treating it as one type, but understanding it as different zones requiring different care.",
        author: "Olivia Bennett"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Multi-masking technique",
        caption: "Multi-masking for different facial zones"
      }
    ],
    nextPostId: 13,
    prevPostId: 11
  },
  {
    id: 13,
    title: 'The Role of Hydration in Maintaining Healthy Skin',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image4.svg',
    category: 'Spa & Wellness',
    views: 2510,
    comments: 29,
    author: {
      name: "Dr. James Wilson",
      image: "/img/avt.svg",
      role: "Dermatology Researcher"
    },
    publishedDate: "May 5, 2024",
    tags: ["Hydration", "Skin Health", "Wellness"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Skin hydration visual"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "The Science of Skin Hydration"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Hydration measurements",
            caption: "Scientific measurement of skin hydration"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Hydrating ingredients",
            caption: "Key hydrating ingredients"
          }
        ]
      },
      {
        type: "conclusion_box",
        title: "Research Findings",
        content: "Our clinical studies have shown that maintaining optimal hydration can improve skin elasticity by up to 40% and significantly reduce the appearance of fine lines."
      }
    ],
    nextPostId: 14,
    prevPostId: 12
  },
  {
    id: 14,
    title: 'Natural Remedies for Common Skin Concerns',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image5.svg',
    category: 'Facial Treatment',
    views: 1830,
    comments: 16,
    author: {
      name: "Sophia Garcia",
      image: "/img/avt.svg",
      role: "Natural Skincare Formulator"
    },
    publishedDate: "May 1, 2024",
    tags: ["Natural Remedies", "Skin Concerns", "Holistic Care"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Ancient Wisdom for Modern Concerns"
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Herbal extracts",
            caption: "Potent herbal extracts"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Botanical ingredients",
            caption: "Raw botanical ingredients"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Natural formulations",
            caption: "Creating natural formulations"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "Nature has provided us with everything we need to heal and beautify our skin. Our role is simply to understand and apply this wisdom.",
        author: "Sophia Garcia"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Natural skincare laboratory",
        caption: "Our natural formulation laboratory"
      }
    ],
    nextPostId: 15,
    prevPostId: 13
  },
  {
    id: 15,
    title: 'Protecting Your Skin from Environmental Damage',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image6.svg',
    category: 'Beauty Treatment',
    views: 2070,
    comments: 24,
    author: {
      name: "Dr. Alexander Kim",
      image: "/img/avt.svg",
      role: "Environmental Dermatologist"
    },
    publishedDate: "April 25, 2024",
    tags: ["Environmental Protection", "Anti-Pollution", "Skin Defense"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Environmental damage visualization"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "Invisible Threats to Skin Health"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "UV damage",
            caption: "UV radiation effects on skin"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Pollution impact",
            caption: "Pollution particles and skin"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "conclusion_box",
        title: "Daily Protection Strategy",
        content: "A comprehensive approach combining antioxidants, physical barriers, and regular cleansing is essential for protecting skin in today's urban environments."
      }
    ],
    nextPostId: 16,
    prevPostId: 14
  },
  {
    id: 16,
    title: 'Advanced Techniques in Eyebrow Shaping',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image7.svg',
    category: 'Beauty Treatment',
    views: 2520,
    comments: 27,
    author: {
      name: "Mia Rodriguez",
      image: "/img/avt.svg",
      role: "Brow Artist"
    },
    publishedDate: "April 20, 2024",
    tags: ["Eyebrow Shaping", "Beauty Technique", "Facial Framing"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "The Art and Science of Perfect Brows"
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Brow mapping",
            caption: "Precision brow mapping"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Threading technique",
            caption: "Expert threading method"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Final results",
            caption: "Before and after transformation"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "Eyebrows aren't just a feature, they're the frame for your entire face. Perfect framing changes everything.",
        author: "Mia Rodriguez"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Brow studio",
        caption: "Our specialized brow shaping studio"
      }
    ],
    nextPostId: 17,
    prevPostId: 15
  },
  {
    id: 17,
    title: 'Luxury Nail Art Trends for the Season',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image.svg',
    category: 'Beauty Treatment',
    views: 2180,
    comments: 31,
    author: {
      name: "Natalie Kim",
      image: "/img/avt.svg",
      role: "Celebrity Nail Artist"
    },
    publishedDate: "April 15, 2024",
    tags: ["Nail Art", "Beauty Trends", "Seasonal Fashion"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Luxury nail designs"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "This Season's Must-Have Nail Looks"
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Geometric patterns",
            caption: "Modern geometric nail art"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "3D embellishments",
            caption: "Textured 3D nail designs"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Complete nail collection",
        caption: "Our exclusive seasonal nail art collection"
      }
    ],
    nextPostId: 18,
    prevPostId: 16
  },
  {
    id: 18,
    title: 'The Benefits of Regular Body Scrubs and Exfoliation',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image1.svg',
    category: 'Spa & Wellness',
    views: 1950,
    comments: 22,
    author: {
      name: "Amanda Lewis",
      image: "/img/avt.svg",
      role: "Body Treatment Specialist"
    },
    publishedDate: "April 10, 2024",
    tags: ["Body Scrub", "Exfoliation", "Skin Renewal"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Why Regular Exfoliation Matters"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Salt scrub",
            caption: "Natural sea salt scrub"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Sugar scrub",
            caption: "Organic sugar exfoliation"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Enzymatic peel",
            caption: "Gentle enzyme treatment"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "Regular exfoliation is not a luxury—it's a necessity for revealing your skin's natural radiance.",
        author: "Amanda Lewis"
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Spa treatment room",
        caption: "Our luxurious body treatment suite"
      }
    ],
    nextPostId: 19,
    prevPostId: 17
  },
  {
    id: 19,
    title: 'Modern Hair Coloring Techniques for Dimensional Results',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image2.svg',
    category: 'Beauty Treatment',
    views: 2830,
    comments: 33,
    author: {
      name: "Carlos Mendez",
      image: "/img/avt.svg",
      role: "Celebrity Hair Colorist"
    },
    publishedDate: "April 5, 2024",
    tags: ["Hair Coloring", "Balayage", "Hair Trends"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "image_text_split",
        image: {
          src: "/img/newDetail/image1.svg",
          alt: "Modern balayage technique"
        },
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "heading",
        content: "Beyond Basic Color: Creating Dimension"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "image_row",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Balayage process",
            caption: "Freehand painting technique"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Foilayage method",
            caption: "Combined foil and balayage approach"
          }
        ]
      },
      {
        type: "quote",
        content: "Modern hair color isn't about one flat tone—it's about creating a multidimensional experience that moves with the hair.",
        author: "Carlos Mendez"
      },
      {
        type: "conclusion_box",
        title: "Customized Approach",
        content: "We analyze your hair type, skin tone, and lifestyle to create a personalized coloring strategy that enhances your natural beauty."
      }
    ],
    nextPostId: 20,
    prevPostId: 18
  },
  {
    id: 20,
    title: 'The Complete Guide to Chemical Peels for Skin Rejuvenation',
    excerpt: 'Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.',
    image: '/img/news/blogs/image3.svg',
    category: 'Facial Care',
    views: 3150,
    comments: 36,
    author: {
      name: "Dr. Rebecca Taylor",
      image: "/img/avt.svg",
      role: "Cosmetic Dermatologist"
    },
    publishedDate: "April 1, 2024",
    tags: ["Chemical Peels", "Skin Rejuvenation", "Facial Treatment"],
    contentBlocks: [
      {
        type: "paragraph",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        type: "heading",
        content: "Understanding Different Types of Chemical Peels"
      },
      {
        type: "image_gallery",
        images: [
          {
            src: "/img/newDetail/image1.svg",
            alt: "Superficial peel",
            caption: "Light glycolic acid peel"
          },
          {
            src: "/img/newDetail/image2.svg",
            alt: "Medium peel",
            caption: "TCA peel application"
          },
          {
            src: "/img/newDetail/image3.svg",
            alt: "Deep peel",
            caption: "Phenol peel procedure"
          }
        ]
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "quote",
        content: "Chemical peels remain one of the most effective clinical treatments for comprehensive skin rejuvenation, backed by decades of research.",
        author: "Dr. Rebecca Taylor"
      },
      {
        type: "paragraph",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        type: "full_width_image",
        src: "/img/newDetail/image3.svg",
        alt: "Before and after comparison",
        caption: "Real results from our chemical peel treatments"
      },
      {
        type: "conclusion_box",
        title: "Professional Guidance Required",
        content: "Chemical peels should always be performed by qualified professionals who can accurately assess your skin type and select the appropriate peel strength and formula."
      }
    ],
    nextPostId: null,
    prevPostId: 19
  }
];