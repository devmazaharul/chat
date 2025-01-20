import { Space_Grotesk} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const fontSetup=Space_Grotesk({
  weight:"400",
  subsets:["latin"],
  style:"normal"
})



export const metadata = {
  title: "Chat",
  description: "Developed by mazaharul islam",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body
        className={`${fontSetup.className}  antialiased`}
      >
              <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
