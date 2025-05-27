
import FeatureComponent from "./featurecomponent";
const Features = ({Features}) => {

  return (
<section
      id="features"
      className="min-h-screen flex flex-col items-center w-screen relative snap-top"
    >
      <h1 className="text-[60px] text-center font-bold text-white  bg-gray-900 w-screen relative z-10">
        Features
      </h1>
      <div className="flex flex-col text-xl text-center text-white items-center w-screen h-screen relative">
        <div className="absolute inset-0 bg-black opacity-80  z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="flex flex-wrap justify-center  items-center">
        <FeatureComponent features={Features}/>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
