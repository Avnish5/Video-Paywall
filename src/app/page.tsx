import { auth } from "@/auth";
import { redirect } from "next/navigation"
import Image from "next/image";

export default async function Home() {
  const session=await auth();
  if(!session){
    redirect("/api/auth/signin")
  }
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div >
          <iframe src="https://iframe.mediadelivery.net/embed/333887/41ac9a75-6f61-44ba-8349-7d5aff1829f2?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
          loading="lazy" 
          style={{
            border:0,
            position:'absolute',
            top:0,
            height:"100%",
            width:"100%"
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
         allowFullScreen={true}></iframe></div>
      </main>
      
  );
}
