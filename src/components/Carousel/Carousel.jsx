import React, {
  useState,
  useEffect,
  Children,
  cloneElement,
  useRef,
} from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_WIDTH = 200;
const PAGE_GAP = 10;
const PAGES_TO_SHOW = Math.floor(
  (window.innerWidth * 0.8) / (PAGE_WIDTH + PAGE_GAP)
) ;
export default function Carousel({ children }) {
  const trackRef = useRef(null);
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  // const [containerWidth, setContainerWidth] = useState(0);
  // useEffect(() => {
  //   setContainerWidth(trackRef.current.offsetWidth);
  // }, []);
  // const containerWidth = trackRef.current.offsetWidth;
  const handleLeftArrowClick = () => {
    setOffset((currOffset) => {
      const newOffset = currOffset - PAGE_WIDTH - PAGE_GAP;
      const maxOffset =
      (PAGE_WIDTH + PAGE_GAP) * (pages.length ) -
      (trackRef.current.offsetWidth -
        (trackRef.current.offsetWidth % (PAGE_WIDTH + PAGE_GAP)));
      if (newOffset < 0) {
        return maxOffset ;
      }
      return Math.max(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currOffset) => {
      const newOffset = currOffset + (PAGE_WIDTH + PAGE_GAP);
      const maxOffset =
        (PAGE_WIDTH + PAGE_GAP) * (pages.length  + (PAGES_TO_SHOW % 2 )) -
        (trackRef.current.offsetWidth -
          (trackRef.current.offsetWidth % (PAGE_WIDTH + PAGE_GAP))) + ((PAGES_TO_SHOW+1) % 2) * PAGE_WIDTH;
      console.log(maxOffset);
      console.log(newOffset);
      console.log(trackRef.current.offsetWidth);
      console.log(window.innerWidth);
      console.log(PAGES_TO_SHOW);
      if (newOffset >= maxOffset) {
        return 0;
      }
      return Math.min(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: "100%",
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="carousel__container" ref={trackRef}>
      <FaChevronLeft
        className="carousel__arrow-left arrow"
        onClick={handleLeftArrowClick}
      />
      <div
        className="carousel__window"
        style={{
          width: `${(PAGE_WIDTH + PAGE_GAP) * PAGES_TO_SHOW - PAGE_GAP}px`,
        }}
      >
        <div
          className="carousel__items"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight
        className="carousel__arrow-right arrow"
        onClick={handleRightArrowClick}
      />
    </div>
  );
}
