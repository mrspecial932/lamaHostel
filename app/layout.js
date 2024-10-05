import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./__components/navigate";
import Logo from "./__components/Logo";
import Header from "./__components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    template: "The Wild Oasis",
    default: "Welcome | the Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of the nigeria, surrounded by beautiful mountain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="antialiased bg-green-950 text-purple-50 min-h-screen flex flex-col relative" >
      <Header/>
      <div className="flex-1 px-8 py-12 grid">
     
      <main className="max-w-7xl w-full mx-auto">{children}</main>
      </div>
      </body>
    </html>
  );
}
