"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: React.ReactNode | string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)

    if (activeCard !== closestBreakpointIndex) {
      setIsChanging(true)
      setActiveCard(closestBreakpointIndex)

      // Reset the changing state after the animation completes
      setTimeout(() => {
        setIsChanging(false)
      }, 600) // This should match or exceed the total animation time (delay + duration)
    }
  })

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  // Function to scroll to a specific project
  const scrollToProject = (index: number) => {
    if (ref.current) {
      const projectElement = ref.current.querySelector(`[data-project="${index}"]`) as HTMLElement
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.div
      animate={{
        backgroundColor: "transparent",
      }}
      className="relative flex h-[30rem] justify-center md:space-x-10 overflow-y-auto rounded-md p-10 scroll-smooth snap-y snap-mandatory"
      ref={ref}
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              className="my-20 min-h-[60vh] flex flex-col justify-center snap-start snap-always"
              data-project={index}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  visibility: activeCard === index ? "visible" : "hidden",
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  visibility: activeCard === index ? "visible" : "hidden",
                }}
                transition={{ duration: 0.3 }}
                className="mt-6 max-w-lg"
              >
                {typeof item.description === "string" ? (
                  <p className="text-slate-300">{item.description}</p>
                ) : (
                  item.description
                )}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        key={`content-${activeCard}`}
        style={{ background: backgroundGradient }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isChanging ? 0 : 1,
        }}
        transition={{
          duration: 0.1,
          delay: 0.2,
        }}
        className={cn("sticky top-10 overflow-hidden rounded-md bg-white block", contentClassName)}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  )
}
