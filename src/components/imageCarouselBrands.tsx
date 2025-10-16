import { Image } from "@heroui/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, CardBody } from "@heroui/card";
import { useState } from "react";
import { PhotoInfo } from "./marken";
import { motion } from "framer-motion";
const responsive = {
  largeDesktop: {
    breakpoint: { max: 5000, min: 1500 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1200 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1200, min: 700 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100,
  },
};

function Back({
  p,
  idx,
  setIsFlipped,
}: {
  p: PhotoInfo;
  idx: number;
  setIsFlipped: (state: any) => any;
}) {
  return (
    <button
      className="w-full h-full overflow-scroll"
      onClick={() => setIsFlipped((prev: boolean) => !prev)}
    >
      <Card
        key={idx}
        className="px-0  h-full overflow-scroll"
        style={{ userSelect: "none" }}
      >
        <CardBody className=" py-1 px-1 h-full overflow-scroll">
          {p.zusammensetzung && (
            <p className="mb-3">Zusammensetzung: {p.zusammensetzung}</p>
          )}
          <div className="italic">
            {Object.entries(p.preise).map(([key, value]) => (
              <div className="flex flex-row justify-between">
                <p>{key}</p>
                <p>{value as any}</p>
              </div>
            ))}
          </div>

          <p className="mt-3">{p.text}</p>
        </CardBody>
      </Card>
    </button>
  );
}

function Front({
  p,
  idx,
  setIsFlipped,
}: {
  p: PhotoInfo;
  idx: number;
  setIsFlipped: (state: any) => any;
}) {
  return (
    <button
      className="w-full h-full"
      onClick={() => setIsFlipped((prev: boolean) => !prev)}
    >
      <Card
        key={idx}
        className="px-0 mx-1 h-full"
        style={{ userSelect: "none" }}
      >
        <CardBody className=" h-full py-1 px-1 overflow-hidden ">
          <Image src={p.file} />
        </CardBody>
      </Card>
    </button>
  );
}

function FlipCard({ p, idx }: { p: PhotoInfo; idx: number }) {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  return (
    <div className="h-full">
      <motion.div
        transition={{ duration: 0.8 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        className="md:h-100 sm:h-90 h-70 "
      >
        <motion.div
          transition={{ duration: 0.8 }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          className={isFlipped ? "h-full  " : "h-full absolute"}
        >
          <Front p={p} idx={idx} setIsFlipped={setIsFlipped} />
        </motion.div>
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          // style={{ display: flip ? "none" : "block" }}
          transition={{ duration: 0.8 }}
          className={isFlipped ? "h-full absolute" : "h-full "}
        >
          <Back p={p} idx={idx} setIsFlipped={setIsFlipped} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export const ImageCarouselBrands = ({ data }: { data: PhotoInfo[] }) => {
  return (
    <Carousel
      responsive={responsive}
      shouldResetAutoplay
      infinite={data.length > 3}
      slidesToSlide={2}
      centerMode={true}
      arrows={data.length > 3}
      itemClass=""
      containerClass={`carousel-container z-0 ${data.length > 3 ? "" : "justify-center items-center"}`}
    >
      {data.map((p, idx) => {
        return <FlipCard p={p} idx={idx} key={idx} />;
      })}
    </Carousel>
  );
};
