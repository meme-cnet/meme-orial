'use client'

import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

export default function RightPositionedTimeline() {
  return (
    <Timeline position="right">
      <TimelineItem
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      >
        <TimelineSeparator className="relative">
          <span className="absolute -left-6 text-[#FF3E5A] text-xl font-bold pt-1">
            1
          </span>
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
          <p className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] text-justify">
            Our publishing process is guided by experienced curators who carefully select and approve each submission to ensure it meets our quality and artistic standards. This guarantees that every NFT we publish resonates with our community and maintains the integrity of our platform.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      >
        <TimelineSeparator className="relative">
          <span className="absolute -left-6 text-[#FF3E5A] text-xl font-bold pt-1">
            2
          </span>
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
          <p className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] text-justify">
            We swiftly respond to trending viral moments by creating and publishing NFTs that capture these events in real-time. This ensures that our collection stays current and allows you to own a piece of history as it happens, reflecting the dynamic nature of the digital world.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      >
        <TimelineSeparator className="relative">
          <span className="absolute -left-6 text-[#FF3E5A] text-xl font-bold pt-1">
            3
          </span>
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
          <p className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] text-justify">
            We invite individuals to actively participate by suggesting historical events they&apos;d like us to publish and sharing their own design ideas. Your input helps shape our NFT collection, ensuring it reflects the interests and creativity of our community, and makes the publishing process more collaborative and inclusive.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      >
        <TimelineSeparator className="relative">
          <span className="absolute -left-6 text-[#FF3E5A] text-xl font-bold pt-1">
            4
          </span>
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
          <p className="font-satoshi-regular pt-4 text-[1.125rem] text-[#000] text-justify">
            We empower the community to determine the value of each NFT by allowing open bidding and trading. By releasing NFTs representing significant historical events, we let market dynamics establish their price point, reflecting the collective wisdom of crowds how the society prices a historical event.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      >
      </TimelineItem>
    </Timeline>
  )
}