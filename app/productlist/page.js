"use client";
import { CardDefault } from "@/components/navbar/CardDefault";
import { useEffect, useState } from "react";






const Page = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setProduct(json);
        setLoading(false);

        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  if (loading) {
    return (
      <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
        <div className="p-4 rounded-full bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500">
          <div className="bg-white rounded-full">
            <div className="w-24 h-24 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div >
      {/* main  start */}
      <>
       
          <img src={"main.jpg"} className="w-full px-8 py-4 "></img>
         
        
      </>

      {/* main end */}
      {/* product card start */}
      <div className="flex flex-wrap gap-28">   
         {product?.map((item) => (
     <CardDefault item={item} />
      ))
    }
    </div>

    </div>
  );
};

export default Page;
