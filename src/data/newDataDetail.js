export const newsItems = [
    {
      id: 1,
      title: "Ways to Prolong the Vibrancy of Your Hair Color",
      excerpt: "Lorem ipsum simply dummy text of the printing and typesetting industry when an unknown printer took a galley.",
      image: "/img/news/hair-treatment-1.jpg",
      category: "Beauty Treatment",
      views: 2890,
      comments: 24,
      author: {
        name: "Daniel Charence",
        image: "/img/avatars/avatar-1.jpg"
      },
      publishedDate: "June 24, 2024",
      // Sử dụng content blocks để định nghĩa bố cục
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
              width: "555",
              height: "350"
            },
            {
                src: "/img/newDetail/image2.svg",
                alt: "Hair treatment result",
              width: "555", 
              height: "350"
            }
          ]
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
          width: "1140",
          height: "400"
        }
      ],
      nextPostId: 2,
      prevPostId: null
    },
    {
      id: 2,
      title: "Skin Rejuvenation Techniques for a Youthful Glow",
      // ... các thông tin cơ bản khác
      contentBlocks: [
        {
          type: "image_text_split",
          image: {
            src: "/img/newDetail/skin-treatment-1.jpg",
            alt: "Skin rejuvenation"
          },
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit."
        },
        // ... các block khác với bố cục khác nhau
      ],
      nextPostId: 3,
      prevPostId: 1
    },
    // ... các bài viết khác
  ];