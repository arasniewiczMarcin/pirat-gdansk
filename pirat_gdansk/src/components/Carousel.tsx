import { Carousel } from "@material-tailwind/react";
 
function CarouselDefault() {
  return (
    <Carousel className="rounded-md" transition={{ duration: 1}} placeholder={"Carousel"} autoplay autoplayDelay={5000} loop>

      <img
        src="src/assets/carouselPhotos/druzyna.jpg"
        alt="image 1"
        className="w-fit h-96 object-cover mx-auto"
      />
      <img
        src="src/assets/carouselPhotos/michal.jpg"
        alt="image 2"
        className="w-fit h-96 object-cover"
      />
      <img
        src="src/assets/carouselPhotos/janek.jpg"
        alt="image 2"
        className="w-fit h-96 object-cover"
      />

    </Carousel>
  );
}

export default CarouselDefault;
