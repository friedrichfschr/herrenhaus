import { Image } from "@heroui/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, CardBody } from "@heroui/card";
import { useEffect, useState } from "react";
import { PhotoInfo } from "./marken";
import { motion } from "framer-motion";
const responsive = {
  largeDesktop: {
    breakpoint: { max: 5000, min: 1400 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
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
      className="h-full w-full  overflow-y-hidden  rounded-lg"
      onClick={() => setIsFlipped((prev: boolean) => !prev)}
    >
      <Card
        key={idx}
        className=" h-full rounded-2xl mx-1 overflow-y-hidden "
        style={{ userSelect: "none" }}
      >
        <CardBody
          className="w-full grow-0 py-0 px-1 h-full rounded-2xl overflow-y-scroll
         "
        >
          {p.text ? (
            <>
              <div className="italic">
                {Object.entries(p.preise).map(([key, value]) => (
                  <div className="flex flex-row justify-between">
                    <p>{key}</p>
                    <p>{value as any}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">{p.text}</p>
              {p.zusammensetzung && (
                <p className="mt-3">Zusammensetzung: {p.zusammensetzung}</p>
              )}
            </>
          ) : (
            <p className="mt-3">Text folgt noch...</p>
          )}
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
      className="w-full rounded-lg "
      onClick={() => setIsFlipped((prev: boolean) => !prev)}
    >
      <Image
        src={p.file}
        width={"100%"}
        className="min-h-40 rounded-2xl w-full flex-1 overflow-hidden lg:max-h-130 md:max-h-110 sm:max-h-100 max-h-90"
        style={{ objectFit: "cover", objectPosition: "50% 90%" }}
      />
    </button>
  );
}

function FlipCard({ p, idx }: { p: PhotoInfo; idx: number }) {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);
  useEffect(() => {
    if (idx == 1) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 500);
      setTimeout(() => {
        setIsFlipped(true);
      }, 1500);
    }
  }, []);

  return (
    <div className="lg:h-130 md:110 sm:h-100 h-90 w-full m-1">
      <motion.div
        transition={{ duration: 0.8 }}
        animate={{
          rotateY: isFlipped ? 0 : 180,
        }}
        style={{
          backfaceVisibility: "hidden",
          position: "absolute",
          height: "100%",
        }}
        id={p.file}
      >
        <Front p={p} idx={idx} setIsFlipped={setIsFlipped} />
      </motion.div>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        style={{
          backfaceVisibility: "hidden",
          position: "absolute",
          width: document.getElementById(p.file)?.clientWidth || "100%",
        }}
        className="h-full w-full"
        transition={{ duration: 0.8 }}
      >
        <Back p={p} idx={idx} setIsFlipped={setIsFlipped} />
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
      containerClass={`carousel-container bg-grey z-0 ${data.length > 3 ? "" : "justify-center items-center"}`}
    >
      {data.map((p, idx) => {
        return <FlipCard p={p} idx={idx} key={idx} />;
      })}
    </Carousel>
  );
};
