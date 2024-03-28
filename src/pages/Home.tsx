import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="text-left mx-16 text-white text-6xl flex flex-col justify-center min-h-screen">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "We are here to help with your Work", // Types 'One'
              1000, // Waits 1s
              "We are here to help with your Studies", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "We are here to help with your Life", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            className="text-left text-6xl"
            wrapper="h2"
            cursor={false}
            repeat={Infinity}
          />{" "}
          lists
          <br />
          <div>
            <Link
              to={"/todo"}
              className="text-xl bg-[#cd1c45] px-5 py-2 rounded-lg hover:bg-[#80112b]"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-screen">
          <img src="/visual-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}
