import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { kurta } from "../../../Data/Men's Kurta/kurta";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosel data={kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
