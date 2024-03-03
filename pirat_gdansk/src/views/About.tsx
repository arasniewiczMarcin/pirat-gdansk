import HorizontalCard from "../components/Card";
import images from "../assets/AboutTexts/images";
import titles from "../assets/AboutTexts/titles";
import descriptions from "../assets/AboutTexts/descriptions";

interface AboutProps {
  mobileView: boolean;
}

const About = ({mobileView}: AboutProps) => {
    return (
      <>
        <div className="flex justify-center flex-col gap-4 items-center my-4 pt-12">
          {images.map((image, index) => (
            <div className="">
              <HorizontalCard image={image} title={titles[index]} description={descriptions[index]} mobileView = {mobileView}/>
            </div>
          ))}
        </div>
        
      </>
    );
  }
  export default About;