"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

const cards = [
    {
        title: "1.Immediate Recognition",
        content: "Each NFT in our collection represents a moment that is instantly recognizable to a broad audience. For example, the assassination of John F. Kennedy is a universally known event that requires no explanation, unlike a Bored Ape Yacht Club NFT that might necessitate research to understand its value."
    },
    {
        title: "2. Added information value",
        content: "Each NFT meme contains a recognizable element (in pink), that gives additional information on the event. In the case of the Moon landing, the cameraman reflected in the astronaut's helmet signals the \"possibility\" that the whole thing was staged, hence it's a reference to the conspiracy theories that surround the moon landing."
    },
    {
        title: "3. Added artistic value",
        content: "The historical context of each NFT adds an educational dimension, potentially increasing their perceived value in academic and cultural circles."
    },
    {
        title: "4. Emotional and Nostalgic Value",
        content: "Investors may be drawn to NFTs representing events they lived through or that hold personal significance, adding an emotional driver to the investment."
    },
    {
        title: "5. Lower Barrier to Entry ",
        content: "The familiarity of the subject matter makes our NFTs more accessible to a wider range of potential collectors, including those who may be new to the NFT space but are drawn to historical content. "
    },
    {
        title: "6. Cross-Generational Appeal ",
        content: "By capturing significant moments from various eras, our collection has the potential to attract collectors across different age groups, from digital natives to traditional art collectors interested in historical memorabilia. "
    },
    {
        title: "7. Educational Value ",
        content: "The historical context of each NFT adds an educational dimension, potentially increasing their perceived value in academic and cultural circles. "
    },
    {
        title: "8.  Relevance Across Time ",
        content: "Unlike trend-based NFTs that may lose relevance, historical moments maintain their significance."
    },
    {
        title: "9.  Bridge Between Traditional and Digital ",
        content: "Our collection serves as a bridge between traditional historical artifacts and the digital realm, potentially attracting both conventional collectors and crypto enthusiasts."
    },
    {
        title: "10.  Reduced Risk",
        content: "The inherent value derived from historical significance reduces the purely speculative nature often associated with NFTs."
    },
]

const ManCarrTxt: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (!isDragging) {
            const timer = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [isDragging]);

    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold && currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((prev) => prev - 1);
        } else if (info.offset.x < -swipeThreshold && currentIndex < cards.length - 1) {
            setDirection(1);
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    return (
        <div className="w-full max-w-md mx-auto px-4 py-8">
            <div className="relative w-full h-[19rem] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(event, info) => {
                            setIsDragging(false);
                            handleDragEnd(event, info);
                        }}
                        whileTap={{ cursor: "grabbing" }}
                        className="absolute w-full h-full rounded-lg bg-gradient-to-r from-[#FF3E5A] to-[#E515D7] p-8 flex flex-col touch-none"
                    >
                        <div className="pointer-events-none">
                            <h2 className="font-satoshi-bold text-[1.125rem] text-left text-white mb-4">
                                {cards[currentIndex].title}
                            </h2>
                            <p className="font-satoshi-regular text-[1rem] text-justify text-white flex-grow overflow-y-auto">
                                {cards[currentIndex].content}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-[#FF3E5A]' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ManCarrTxt