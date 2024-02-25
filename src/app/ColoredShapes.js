import React from 'react';

const ColoredShapes = () => {
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']; // Add more colors as needed

  return (
    <>
    <div className="flex space-x-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`absloute   before:absolute before:h-[300px] before:w-full sm:before:w-[800px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
    <div className="flex space-x-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:via-[#f63780] after:dark:via-[#f63780] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
    
    </>
  );
};

export default ColoredShapes;
