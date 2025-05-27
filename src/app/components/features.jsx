const Features = () => {

  const features = [
    "Local 4 player split-screen ",
    "Unique Items and power-ups",
    "Proceduraly generated levels"
  ];


return(

     <>
      <section id="features" className="min-h-screen flex flex-col items-center justify-center w-screen relative">
        <h1 className="text-[75px] text-left font-bold item-center">Features</h1>
        <ol className="flex flex-col gap-2 text-center p-4 rounded-xl shadow-lg  max-w-xl w-full">
        {features.map((feature, index) => (
          <li key={index}>
            <div className="rounded-lg px-2 py-1 shadow-lg ">
              {feature}
            </div>
          </li>
        ))}
      </ol>
      </section>
    </>
)

}

export default Features;