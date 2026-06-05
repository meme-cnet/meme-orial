'use client'

import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const TldrAccordion = () => {
  return (
    <div className="py-[5%] px-[8%]">
      <div className="w-full h-[2px] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A]" />

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center py-4">
              <span className="font-satoshi-bold text-[1.125rem] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A] text-transparent bg-clip-text">
                (TL:DR)
              </span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
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
                <p className="mb-4">
                  In conclusion, by grounding our NFT collection in the collective consciousness of human history, we create a unique value proposition in the NFT space.
                </p>
                <p className="mb-4">
                  This approach not only differentiates Meme-orial Gallery from other collections but also provides a solid foundation for long-term potential, appealing to a wide range of individuals and institutions who appreciate the combination of historical significance and digital innovation.
                </p>
                <p className="mb-4">
                  Meme-orial Gallery represents a unique intersection of historical preservation, modern media consumption trends, and blockchain technology.
                </p>
                <p className="mb-4">
                  By capturing history in a format that resonates with digital natives, we&apos;re not just creating a valuable product – we&apos;re shaping how future generations will understand and interact with the past.
                </p>
                <p>
                  This NFT collection offers a compelling opportunity in the rapidly evolving digital asset space while also serving a broader cultural and educational purpose.
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      <div className="w-full h-[2px] bg-gradient-to-r from-[#E719C9] to-[#FF3E5A]" />
    </div>
  )
}

export default TldrAccordion