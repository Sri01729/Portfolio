"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface FloatingBubbleProps {
  text: string
}

export default function FloatingBubble({ text }: FloatingBubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Position state for main bubble
  const [position, setPosition] = useState({ x: 50, y: 50 })
  // Velocity state (direction and speed)
  const [velocity, setVelocity] = useState({ x: getRandomVelocity(), y: getRandomVelocity() })
  // Dragging states
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  // Reduced bubble size
  const bubbleSize = isMobile ? 140 : 200

  // Generate random velocity between -0.5 and 0.5
  function getRandomVelocity() {
    return (Math.random() - 0.5) * 2
  }

  // Change direction randomly occasionally
  useEffect(() => {
    const directionInterval = setInterval(() => {
      if (!isDragging) {
        // Slightly adjust velocity rather than completely changing it
        setVelocity((prev) => ({
          x: prev.x + (Math.random() - 0.5),
          y: prev.y + (Math.random() - 0.5),
        }))
      }
    }, 2000) // Change direction more frequently - every 2 seconds

    return () => clearInterval(directionInterval)
  }, [isDragging])

  // Handle the animation for main bubble
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const maxX = containerRect.width - bubbleSize
    const maxY = containerRect.height - bubbleSize

    const animationFrame = requestAnimationFrame(function animate() {
      // Always move the bubble, even when being dragged
      if (!isDragging) {
        setPosition((prevPos) => {
          // Calculate new position
          let newX = prevPos.x + velocity.x
          let newY = prevPos.y + velocity.y

          // Bounce off edges with new random velocities
          if (newX <= 0 || newX >= maxX) {
            // Change both x and y velocities when hitting horizontal walls
            setVelocity({
              x: -velocity.x * (0.8 + Math.random() * 0.4),
              y: getRandomVelocity(),
            })
            newX = newX <= 0 ? 0 : maxX
          }

          if (newY <= 0 || newY >= maxY) {
            // Change both x and y velocities when hitting vertical walls
            setVelocity({
              x: getRandomVelocity(),
              y: -velocity.y * (0.8 + Math.random() * 0.4),
            })
            newY = newY <= 0 ? 0 : maxY
          }

          return { x: newX, y: newY }
        })
      }

      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [velocity, bubbleSize, isDragging])

  // Handle mouse/touch down
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)

    // Get current mouse/touch position
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

    // Calculate offset from bubble center to click/touch point
    setDragOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    })
  }

  // Handle mouse/touch move
  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    // Get current mouse/touch position
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

    const containerRect = containerRef.current.getBoundingClientRect()

    // Calculate new position relative to container
    const newX = clientX - containerRect.left - dragOffset.x
    const newY = clientY - containerRect.top - dragOffset.y

    // Update position
    setPosition({
      x: Math.max(0, Math.min(containerRect.width - bubbleSize, newX)),
      y: Math.max(0, Math.min(containerRect.height - bubbleSize, newY)),
    })
  }

  // Handle mouse/touch up
  const handleDragEnd = () => {
    setIsDragging(false)
    // Generate new random velocity when drag ends with higher values
    setVelocity({
      x: getRandomVelocity(),
      y: getRandomVelocity(),
    })
  }

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove)
      window.addEventListener("touchmove", handleDragMove)
      window.addEventListener("mouseup", handleDragEnd)
      window.addEventListener("touchend", handleDragEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove)
      window.removeEventListener("touchmove", handleDragMove)
      window.removeEventListener("mouseup", handleDragEnd)
      window.removeEventListener("touchend", handleDragEnd)
    }
  }, [isDragging])

  // Split text into lines for better readability
  const textLines = text.split(" is ")

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Main bubble - more transparent with enhanced white highlight */}
      <div
        className="absolute rounded-full cursor-grab active:cursor-grabbing"
        style={{
          width: bubbleSize,
          height: bubbleSize,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          // More transparent background
          background: "rgba(255, 255, 255, 0.05)",
          // Enhanced glow effects
          boxShadow: "inset 0 0 60px rgba(255, 255, 255, 0.05), 0 0 30px rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(2px)",
          // Subtle border
          border: "1px solid rgba(255, 255, 255, 0.1)",
          // Very subtle gradient
          background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03) 70%)",
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        {/* Enhanced bubble highlight/reflection - more pronounced white shade */}
        <div
          className="absolute rounded-full"
          style={{
            width: "70%",
            height: "35%",
            left: "5%",
            top: "10%",
            // Stronger highlight gradient
            background: "linear-gradient(120deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.05))",
            borderRadius: "100% 80% 80% 100% / 100% 100% 80% 100%",
            transform: "rotate(-20deg)",
            // Add subtle glow to the highlight
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        />

        {/* Secondary smaller highlight for realism */}
        <div
          className="absolute rounded-full"
          style={{
            width: "20%",
            height: "10%",
            right: "20%",
            bottom: "30%",
            background: "linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))",
            borderRadius: "100%",
          }}
        />

        {/* Text content with enhanced visibility - adjusted for smaller size and longer text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {textLines.length > 1 ? (
            <>
              <p
                className="text-sm md:text-base font-medium text-center leading-tight"
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                {textLines[0]}
              </p>
              <p
                className="text-sm md:text-base font-medium text-center leading-tight mt-1"
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                is {textLines[1]}
              </p>
            </>
          ) : (
            <p
              className="text-xs md:text-sm font-medium text-center leading-tight"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}