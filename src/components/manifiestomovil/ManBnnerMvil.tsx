'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const ManBnnerMvil = () => {
  return (
    <div className=" pt-[3%] px-[8%] -mb-[2%]">
      
      <div className="flex flex-col -ml-[4%]">
        <Image
          src="/images/capturing-movil.svg"
          alt="Capturing"
          width={500}
          height={300}
        />
        <div className="mt-6 pl-[4%]">
          <span className="font-satoshi-bold text-[1.125rem]">(MEME)ORIAL</span> Gallery.
          <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
            A play on &quot;memorial,&quot; implying these memes serve as a kind of digital monument to events.
          </p>
          <Link href="https://opensea.io/collection/meme-orial-collection" className="block w-full py-6 text-center text-[1rem] font-satoshi-medium text-white bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:bg-none hover:text-[#E515D7] hover:border hover:border-[#FF3E5A] hover:shadow-lg hover:scale-105 mt-8">
            SEE THE COLLECTION
          </Link>
        </div>
      </div>

      
      <div className="mt-16">
        <div className="w-full h-[2px] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A]" />

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center py-4">
                <span className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A] text-transparent bg-clip-text">
                  What?
                </span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500 transition-transform duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-4 font-satoshi-regular text-[1.125rem] text-justify overflow-hidden transition-all duration-300 ease-in-out">
                  Meme - a distilled idea or event. Reducing complex cultural events or sentiments into the smallest and densest format.
                  <br /><br />
                  Add to the Idea (meme) an additional dimension - value, and you have an even more detailed information capsule of what influences the collective zeitgeist and what value people put on individual events.
                  <br /><br />
                  Put a price on history.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <div className="w-full h-[2px] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A]" />

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center py-4">
                <span className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A] text-transparent bg-clip-text">
                  Why?
                </span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500 transition-transform duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out">
                  <Image
                    src="/images/decline.svg"
                    alt="Decline"
                    width={300}
                    height={200}
                  />
                  <p className="font-satoshi-regular text-[1.125rem] text-justify mt-4">
                    The decline of traditional <span className='font-satoshi-bold'> mainstream media </span> and the rise of social media is largely driven by the popularity of short, viral content formats, particularly memes.
                    <br />
                    <br />
                    These <span className='font-satoshi-bold'> bite-sized</span>, highly shareable pieces of media cater to shrinking attention spans and the desire for quick, easily digestible information.
                  </p>
                  <Image
                    src="/images/declineline.svg"
                    alt="Decline Line"
                    width={300}
                    height={200}
                    className="my-4"
                  />
                  <p className="font-satoshi-regular text-[1.125rem] text-justify">
                    Memes, with their blend of humor, <span className='font-satoshi-bold'> cultural references</span>, and often incisive commentary, spread rapidly across social networks, shaping public discourse and opinion <span className='font-satoshi-bold'> faster</span> than traditional news cycles. Their visual nature and emotional appeal make them more <span className='font-satoshi-bold'> engaging and memorable</span> than lengthy articles or broadcasts.
                  </p>
                  <Image
                    src="/images/()manif.svg"
                    alt="Manif"
                    width={300}
                    height={200}
                    className="my-4"
                  />
                  <p className="font-satoshi-regular text-[1.125rem] text-justify">
                    As users increasingly prefer to consume and share these compact, impactful content pieces, traditional media outlets struggle to compete with the immediacy, relatability, and virality of meme culture, leading to a <span className='font-satoshi-bold'>shift in how information is disseminated</span> and consumed in the digital age. <span className='font-satoshi-bold'> Memes are distilled units of public discourse.</span>
                    <br />
                    <br />
                    <span className='font-satoshi-light'> And now people can own an NFT of a meme.</span>
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <div className="w-full h-[2px] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A]" />


      </div>
    </div>
  )
}

export default ManBnnerMvil