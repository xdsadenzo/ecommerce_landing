import { ButtonDefault } from "@/components/navbar/button";
import Rating from "../rating";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function CardDefault({item}) {


  const text = item.title;
  const slicedText = text.slice(0, 15); // Extracts "Hello"
  return (
    
    <Card className="mt-6 w-72">
      <div className="px-8 py-4 ">
      <CardHeader color="blue-gray" className="relative w-full h-56">
        <img
        className="w-48 h-48"
          src={item.image}
          alt="card-image"
        
        />
      </CardHeader>
      </div>
      <div  className="px-10 py-10">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4 text-2xl ">
        {slicedText}
        </Typography> 
        <div className="mb-4">
        <Rating/>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-4 text-lg ">
        <span className="font-bold">Price = </span>{item.price}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="text-lg ">
        <span className="font-bold">Category = </span> {item.category}
        </Typography>
      </CardBody>
      </div>
      <div  className="px-8 py-4 ">
      <CardFooter className="pt-0 ">
       <ButtonDefault/>  
      </CardFooter>
      </div>
    </Card>
   
     
  );
}