import React from 'react'
import HeroSubpage from "../components/AboutUs/HeroSubpage";
import NewsList from '../components/News/NewsList';
const NewsPage = () => {
  return (
    <>
     <HeroSubpage
        title={"Latest News"}
        subtitle={"Home / Latest News"}
        imgLink={"/img/news/Hero.svg"}
      />
      <NewsList/>
    </>
  )
}

export default NewsPage