"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function CustomTimeline() {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);


  const [hasBeenViewed1, setHasBeenViewed1] = useState(false);
  const [hasBeenViewed2, setHasBeenViewed2] = useState(false);
  const [hasBeenViewed3, setHasBeenViewed3] = useState(false);
  const [hasBeenViewed4, setHasBeenViewed4] = useState(false);
  const [hasBeenViewed5, setHasBeenViewed5] = useState(false);


  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);
  const inView5 = useInView(ref5);


  useEffect(() => {
    if (inView1 && !hasBeenViewed1) setHasBeenViewed1(true);
  }, [inView1, hasBeenViewed1]);

  useEffect(() => {
    if (inView2 && !hasBeenViewed2) setHasBeenViewed2(true);
  }, [inView2, hasBeenViewed2]);

  useEffect(() => {
    if (inView3 && !hasBeenViewed3) setHasBeenViewed3(true);
  }, [inView3, hasBeenViewed3]);

  useEffect(() => {
    if (inView4 && !hasBeenViewed4) setHasBeenViewed4(true);
  }, [inView4, hasBeenViewed4]);

  useEffect(() => {
    if (inView5 && !hasBeenViewed5) setHasBeenViewed5(true);
  }, [inView5, hasBeenViewed5]);

  return (
    <Timeline position="alternate">
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
          Curator Driven
          </h2>
          <motion.p
            ref={ref1}
            className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000]  text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Our publishing process is guided by experienced curators who carefully select and approve each submission to ensure it meets our quality and artistic standards. This guarantees that every NFT we publish resonates with our community and maintains the integrity of our platform.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
          Instant Reaction on Viral Events
          </h2>
          <motion.p
            ref={ref2}
            className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            We swiftly respond to trending viral moments by creating and publishing NFTs that capture these events in real-time. This ensures that our collection stays current and allows you to own a piece of history as it happens, reflecting the dynamic nature of the digital world.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
          Open to Suggestions:
          </h2>
          <motion.p
            ref={ref3}
            className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] md:  text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            We invite individuals to actively participate by suggesting historical events they&apos;d like us to publish and sharing their own design ideas. Your input helps shape our NFT collection, ensuring it reflects the interests and creativity of our community, and makes the publishing process more collaborative and inclusive.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
          <TimelineConnector
            sx={{
              background: 'linear-gradient(0deg, #FF3E5A 0%, #E515D7 100%)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <h2 className="font-satoshi-medium text-[1.125rem] text-[#FF3E5A]">
          Let the Market Decide
          </h2>
          <motion.p
            ref={ref4}
            className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000]  text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenViewed4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            We empower the community to determine the value of each NFT by allowing open bidding and trading. By releasing NFTs representing significant historical events, we let market dynamics establish their price point, reflecting the collective wisdom of crowds how the society prices a historical event.
          </motion.p>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
