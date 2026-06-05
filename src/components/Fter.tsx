"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      setSticky(true);
    }
  }, [inView]);

  return (
    <footer
      ref={ref}
      className={`flex flex-col items-center justify-center py-4 z-50 bg-white text-black ${
        mounted && sticky ? 'sticky bottom-0' : ''
      }`}
    >
      <div className="mb-4 z-50">
        <Image
          src="/images/LogoMemeorial.svg"
          alt="Memeorial Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      <div className="z-10 flex space-x-4">
        <a
          href="https://www.instagram.com/memeorialart/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <Image
            src="/images/Icoinstagram.svg"
            alt="Instagram Icon"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://x.com/Memeorialart?t=2y3O9tYiNCTyMbxx1x8yow&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:opacity-80"
        >
          <Image
            src="/images/IcoTwitter.svg"
            alt="Twitter Icon"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://opensea.io/collection/meme-orial-collection"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenSea"
          className="hover:opacity-80"
        >
          <Image
            src="/images/IcoOpensea.svg"
            alt="OpenSea Icon"
            width={24}
            height={24}
          />
        </a>
      </div>
      <p className="font-satoshi-light text-[0.7rem] text-neutral-400 mt-5 z-10">
        Developed by{' '}
        <a
          href="https://conecta.net.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E515D7] transition-colors"
        >
          Conecta.NET
        </a>
      </p>
    </footer>
  );
}
