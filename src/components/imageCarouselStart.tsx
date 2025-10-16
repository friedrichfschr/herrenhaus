import { Image } from "@heroui/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { useRef, useState } from "react";
const images = [
  "/Wilvorst/GWLook1.jpg",

  "/Wilvorst/WilvorstLook13.jpg",

  "/Wilvorst/GWLook2.jpg",

  "/Wilvorst/WilvorstLook6.jpg",

  "/Wilvorst/GWLook7.jpg",

  "/Wilvorst/TziaccoLook4.jpg",

  "/Wilvorst/WilvorstLook1.jpg",
];

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

export const ImageCarousel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState("");
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        shouldResetAutoplay
        infinite={true}
        minimumTouchDrag={10}
        slidesToSlide={2}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={true}
        containerClass="carousel-container z-0"
        itemClass=""
      >
        {images.map((src, idx) => (
          <Card key={idx} className="px-0 mx-1" style={{ userSelect: "none" }}>
            <CardBody className=" md:h-100 sm:h-90 h-70 py-1 px-1 ">
              <Button
                className="p-0 flex-1 items-center"
                onPress={() => {
                  setImage(src);
                  onOpen();
                }}
              >
                <Image
                  isZoomed
                  style={{ objectFit: "cover" }}
                  draggable={false}
                  src={src}
                  className="h-full w-full"
                />
              </Button>
            </CardBody>
            {/* <CardFooter className=" py-0 text-[8px] sm:text-xs md:text-sm">
              {src}
            </CardFooter> */}
          </Card>
        ))}
      </Carousel>

      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              opacity: 0.92,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.25,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="max-h-[85vh] z-10">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{image}</ModalHeader>
              <ModalBody>
                <Image
                  src={image}
                  isZoomed
                  draggable={false}
                  className="max-h-[40vh] w-full"
                  style={{ objectFit: "cover" }}
                />
                <p>{image}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="solid" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
