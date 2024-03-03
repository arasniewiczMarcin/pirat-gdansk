import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  interface HorizontalCardProps {
    image: string;
    title: string;
    description: string;
    mobileView: boolean;
}
   
function HorizontalCard({image, title, description, mobileView}: HorizontalCardProps) {

    return (
      <Card className="w-full min-w-[18rem] flex-row" placeholder={"card"}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
          placeholder={"card-header"}
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody placeholder={"Cardbody"} className="bg-black rounded-r-lg">
          <Typography variant={mobileView ? "h5" : "h4"} color="gray" className="mb-2 mt-0" placeholder={"typography"}>
            {title}
          </Typography>
          <Typography  color="gray" className="mb-8 font-size-24 text-base lg:text-xl" placeholder={"typography"}>
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  export default HorizontalCard;