import {
    Typography,
} from "@material-tailwind/react";

interface MemberCardProps {
    //image: string;
    name: string;
    position: string;
    number: string;
}
   
function MemberCard({name, position, number}: MemberCardProps) {
    return (
        <div className="">
            <img src="src/assets/carouselPhotos/ambro.jpg" alt={name} className="h-4/5 rounded-md" />
            <Typography variant="h2" color="gray" className="text-center pt-2" placeholder={"typography"}>
            {position} {name} {number}
            </Typography>
        </div>
    );
  }
  export default MemberCard;