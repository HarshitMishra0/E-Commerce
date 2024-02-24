import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import "@mui/material/styles";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div className="border">
      <h2 className="text-2x1 font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
          ref={(el) => (carouselRef.current = el)}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
            }}
            aria-label="prev"
          >
            <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
