import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const variants = {
    initial: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            // scale: 0.5,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        // scale: 1,
        // transition: 'ease-in',
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.05 },
        },
    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            // scale: 0.5,
            // transition: 'ease-in',
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.1 },
            },
        }
    },
}




export type Review = {
    review: string;
    name: string;
    role: string;
    company: string;
};

const reviews: Review[] = [
    {
        name: "Tim Chapdelaine",
        role: "GM",
        company: "Trabocca USA",
        review:
            "Alphabet coffee has become a more reliable and professional partner we could have imagined for a new company. Their ability to produce and ship quality as specified, promptly and accurately surpasses many more experienced companies. We also have navigated challenges quickly and effectively. How impressive the success of this new company has been in navigating the challenges in Ethiopia and globally with such poise and success from 2020 to 2022 is hard to overstate.",
    },
    {
        name: "Kaleb Mesfin",
        role: "Web Developer",
        company: "A2SV",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];
const ReviewSlider = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    function nextStep() {
        setDirection(1)
        if (index === reviews.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

    function prevStep() {
        setDirection(-1)
        if (index === 0) {
            setIndex(reviews.length - 1)
            return
        }
        setIndex(index - 1)
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="relative w-full md:w-3/4 flex justify-center h-72 md:h-96 overflow-hidden">
                <div className='w-11/12 md:w-4/5 lg:w-2/3 overflow-hidden flex justify-center mx-5 relative'>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            variants={variants}
                            animate='animate'
                            initial='initial'
                            exit='exit'
                            key={reviews[index].name}
                            custom={direction}
                            className="w-full h-full flex flex-col gap-y-5 rounded-lg items-center bg-white p-5 md:p-12 md:px-20 shadow-2xl transform duration-1000"
                        >
                            <p className="text-center text-xs sm:text-sm md:text-md">{reviews[index].review}</p>
                            <div className="flex flex-col items-center text-center">
                                <h1 className="font-bold text-lg">{reviews[index].name}</h1>
                                <h3>
                                    {reviews[index].role}, {reviews[index].company}
                                </h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button
                    type='button'
                    onClick={prevStep}
                    className="rounded-full bg-white p-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-2 md:left-10 lg:left-20 drop-shadow-md shadow-lg"
                >
                    <FaChevronLeft size={28} color="#F2A40C" />
                </button>
                <button
                    type='button'
                    onClick={nextStep}
                    className="rounded-full bg-white p-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 md:right-10  lg:right-20 drop-shadow-md shadow-lg"
                >
                    <FaChevronRight size={28} color="#F2A40C" />
                </button>
            </div>
        </div>
    )

}

export default ReviewSlider