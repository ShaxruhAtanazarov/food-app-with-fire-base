import React from "react";

// components
import { Section } from "components/Section";

// animations
import { motion } from "framer-motion";

// icons
import { MdDeliveryDining } from "react-icons/md";
import deliverBanner from "assets/images/delivery-banner/delivery-banner.svg";

const Hero = () => {
  return (
    <Section id={"hero"}>
      <div className="hero grid grid-cols-1 lg:grid-cols-2 gap-2 w-full ">
        <div className="py-4 flex flex-1 flex-col items-start justify-center gap-4">
          {/* hero content top */}
          <div className="flex items-center bg-deliveryBadgeBg py-2 px-3 rounded-full">
            <p className="mr-2 text-mainColor font-medium">Bike Delevery</p>
            <MdDeliveryDining
              className="w-8 h-8 p-1 md:w-10 md:h-10 bg-deliveryBadgeIconBg rounded-full overflow-hidden"
              color="#fff"
              size={22}
            />
          </div>
          {/* hero content middle */}
          <h1 className="capitalize text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor">
            <span>the fastest delivery in</span>
            <span className="text-textColor"> your city</span> !
          </h1>
          {/* hero content bottom */}
          <p className="text-base text-textColor md:w-[80%]">
            The first restaurant proprietor is believed to have been one A.
            Boulanger, a soup vendor, who opened his business in Paris in 1765.
            The sign above his door advertised restoratives, or restaurants,
            referring to the soups and broths available within. restauracia.
          </p>
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="capitalize text-white font-medium bg-deliveryBadgeIconBg md:w-auto px-4 py-2 rounded-lg hover:shadow-md transition-all ease-in-out duration-100"
            type="button"
          >
            order now
          </motion.button>
        </div>
        <div className="p-0 lg:p-2 flex items-center flex-1">
          <img
            className="w-full hidden lg:block"
            src={deliverBanner}
            alt="delivery banner"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
