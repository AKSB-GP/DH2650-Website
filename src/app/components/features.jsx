import FeatureComponent from "./featurecomponent";
const Features = ({ Features }) => {
  return (
    <section
      id="features"
      className="h-1/2 flex flex-col items-center w-screen relative snap-top"
    >
      <h1 className="text-[60px] text-center font-bold text-white  bg-gray-900 w-screen relative z-10">
        Features
      </h1>
      <div className="flex flex-col text-xl text-center z-10">
          <FeatureComponent features={Features} />
      </div>
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
    </section>
  );
};

export default Features;
