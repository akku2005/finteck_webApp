import React from 'react';
import Image from 'next/image';  // Import the Image component
import centerImage from '../../assets/yqBsD6JmMXgZHb6ln8FRMg9wYyc.jpg';

const SliderContent = () => {
  return (
    <div>
      <div className="flex items-center mt-1">
        <Image
          src={centerImage}
          alt="Company Logo"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default SliderContent;
