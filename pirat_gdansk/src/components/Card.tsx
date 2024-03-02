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
}
   
   function HorizontalCard({image, title, description}: HorizontalCardProps) {
    return (
      <Card className="w-full max-w-[40rem] max-h-40 flex-row" placeholder={"card"}>
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
          <Typography variant="h4" color="gray" className="mb-2" placeholder={"typography"}>
            {title}
          </Typography>
          <Typography  color="gray" className="mb-8 font-size-24 text-xl" placeholder={"typography"}>
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  export default HorizontalCard;