import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hder: React.FC = () => {
  return (
    <header className="
      sticky top-0 w-full bg-white z-50 shadow-md
      h-14 md:h-20
    ">
      <div className="
        flex items-center h-full 
        px-[8%] md:px-[5%]
      ">
        <Link href="/" className="
          w-44 h-auto
          py-4 md:py-3
        ">
          <Image
            src="/images/LogoMemeorial.svg"
            alt="Logo Memeorial"
            width={500}
            height={40}
            className="w-full h-auto object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Hder;
