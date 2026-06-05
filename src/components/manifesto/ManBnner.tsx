"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import AnimationComponent from './AnimatedComponent';

const AnimatedParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

const ManBnner = () => {
  return (
    <div className="flex flex-col w-full pl-[4%] pr-[4%] pt-[3%] pb-[3%]">
      
      <div className="flex w-full mb-8">
        <div className="w-full md:w-auto ml-[6%]">
          <Image
            src="/images/capturing.svg"
            alt="Capturing"
            layout="responsive"
            width={100}
            height={100}
            className="w-full md:w-auto scale-150"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap w-full">
        
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">(MEME)ORIAL</span> Gallery.
          <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
            A play on &quot;memorial,&quot; implying these memes serve as a kind of digital monument to events.
            <br />
            <br />
          </p>
          <br />
          <br />
          <Link href="https://opensea.io/collection/meme-orial-collection" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-white bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-none hover:text-[#E515D7] hover:border hover:border-[#FF3E5A] hover:shadow-lg hover:scale-105 mt-4">
            SEE THE COLLECTION
          </Link>
        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">What?</span>
          <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
            Meme - <span className="font-satoshi-bold">a distilled idea or event.</span> Reducing complex cultural events or sentiments into the smallest and densest format.
            <br />
            <br />
            Add to the Idea (meme) an additional dimension - value, and you have an even more detailed information capsule of what influences the collective zeitgeist and what value people put on individual events.
            <br />
            <br />
            <span className="font-satoshi-light"> Put a price on history.</span>
          </p>
        </div>
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4"></div>
      </div>

      
      <div className="flex flex-wrap w-full">
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">Why?</span>
          <div className="w-full md:w-auto pt-5">
            <Image
              src="/images/decline.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <p className="font-satoshi-regular text-[1.125rem] text-justify">
            Memes, with their blend of humor, <span className='font-satoshi-bold'> cultural references</span>, and often incisive commentary, spread rapidly across social networks, shaping public discourse and opinion <span className='font-satoshi-bold'> faster</span> than traditional news cycles. Their visual nature and emotional appeal make them more <span className='font-satoshi-bold'> engaging and memorable</span> than lengthy articles or broadcasts.
          </p>
        </div>
        
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <div className="w-full md:w-auto">
            <Image
              src="/images/()manif.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>

      
      <div className="flex flex-wrap w-full">
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4"></div>
        
        <div className="w-full md:w-1/5 p-4">
          <p className="font-satoshi-regular text-[1.125rem] text-justify">
            The decline of traditional <span className='font-satoshi-bold'> mainstream media </span> and the rise of social media is largely driven by the popularity of short, viral content formats, particularly memes.
            <br />
            <br />
            These <span className='font-satoshi-bold'> bite-sized</span>, highly shareable pieces of media cater to shrinking attention spans and the desire for quick, easily digestible information.
          </p>
        </div>
        
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <div className="w-full md:w-auto">
            <Image
              src="/images/declineline.svg"
              alt="Capturing"
              layout="responsive"
              width={100}
              height={100}
              className="w-full md:w-auto "
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">
          <p className="font-satoshi-regular text-[1.125rem] text-justify">
            As users increasingly prefer to consume and share these compact, impactful content pieces, traditional media outlets struggle to compete with the immediacy, relatability, and virality of meme culture, leading to a <span className='font-satoshi-bold'>shift in how information is disseminated</span> and consumed in the digital age. <span className='font-satoshi-bold'> Memes are distilled units of public discourse.</span>
            <br />
            <br />
            <span className='font-satoshi-light'> And now people can own an NFT of a meme.</span>
          </p>
        </div>
      </div>

      

      <AnimationComponent />
      
      <div className="flex flex-wrap w-full">
        
        <div className="w-full md:w-1/5 p-4">
          <span className="font-satoshi-bold text-[1.125rem]">(MEME)ORIAL</span>
          <AnimatedParagraph>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Leveraging Collective Knowledge
              <br />
              Unlike many NFT collections that rely on novel, often abstract concepts, Meme-orial Gallery taps into the vast reservoir of shared human knowledge and experience.
              <br />
              This unique approach offers several key advantages:
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf1"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A] text-transparent bg-clip-text"
            >
              1.Immediate <br />
              Recognition
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Each NFT in our collection represents a moment that is instantly recognizable to a broad audience. For example, the assassination of John F. Kennedy is a universally known event that requires no explanation, unlike a Bored Ape Yacht Club NFT that might necessitate research to understand its value.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">



        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[10%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf2"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              2. Added information value
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Each NFT meme contains a recognizable element (in pink), that gives additional information on the event. In the case of the Moon landing, the cameraman reflected in the astronaut&apos;s helmet signals the &quot;possibility&quot; that the whole thing was staged, hence it&apos;s a reference to the conspiracy theories that surround the moon landing.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf3"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              3. Added artistic value
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              The historical context of each NFT adds an educational dimension, potentially increasing their perceived value in academic and cultural circles.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center">

        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[10%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf4"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              4.Emotional and Nostalgic Value
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Investors may be drawn to NFTs representing events they lived through or that hold personal significance, adding an emotional driver to the investment.
            </p>
          </AnimatedParagraph>
        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[5%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf5"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              5. Lower Barrier to Entry
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              The familiarity of the subject matter makes our NFTs more accessible to a wider range of potential collectors, including those who may be new to the NFT space but are drawn to historical content.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[5%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf6"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              6. Cross-Generational Appeal
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              By capturing significant moments from various eras, our collection has the potential to attract collectors across different age groups, from digital natives to traditional art collectors interested in historical memorabilia.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4 -mt-[3%]">
          <AnimatedParagraph>
            <span
              id="parrf8"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              8.  Relevance Across Time
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Unlike trend-based NFTs that may lose relevance, historical moments maintain their significance.
            </p>
          </AnimatedParagraph>
        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[10%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf7"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              7. Educational Value
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              The historical context of each NFT adds an educational dimension, potentially increasing their perceived value in academic and cultural circles.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4 -mt-[3%]">
        </div>
      </div>

      
      <div className="flex flex-wrap w-full ">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf9"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              9.  Bridge Between Traditional and Digital
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Our collection serves as a bridge between traditional historical artifacts and the digital realm, potentially attracting both conventional collectors and crypto enthusiasts.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4 -mt-[3%]">
        </div>
      </div>

      
      <div className="flex flex-wrap w-full -mt-[10%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span
              id="parrf10"
              className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#FF3E5A] to-[#E719C9] text-transparent bg-clip-text"
            >
              10.  Reduced Risk
            </span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              The inherent value derived from historical significance reduces the purely speculative nature often associated with NFTs.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4 -mt-[3%]">
        </div>
      </div>

      
      <div className="flex flex-wrap w-full mt-[8%]">
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">

        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
            <span className="font-satoshi-bold text-[1.125rem]">(TL:DR)</span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              In conclusion, by grounding our NFT collection in the collective consciousness of human history, we create a unique value proposition in the NFT space. <br />

              This approach not only differentiates Meme-orial <br />

              Gallery from other collections but also provides a solid foundation for long-term potential, appealing to a wide range of individuals and institutions who appreciate the combination of historical significance and digital innovation.
            </p>
          </AnimatedParagraph>
        </div>
        
        <div className="w-full md:w-1/5 p-4">
          <AnimatedParagraph>
          <span className="font-satoshi-bold text-[1.125rem]">&nbsp;</span>
            <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
              Meme-orial Gallery represents a unique intersection of historical preservation, modern media consumption trends, and blockchain technology. <br />

              By capturing history in a format that resonates with digital natives, we&apos;re not just creating a valuable product – we&apos;re shaping how future generations will understand and interact with the past. <br />

              This NFT collection offers a compelling opportunity in the rapidly evolving digital asset space while also serving a broader cultural and educational purpose.
            </p>
          </AnimatedParagraph>
        </div>
      </div>

    </div>
  );
};

export default ManBnner;