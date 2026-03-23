import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only run on devices with a precise pointer (mouse), not touch screens
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100
    let rafId

    const lerp = (a, b, t) => a + (b - a) * t

    // Track mouse position; reveal cursors on first move
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.opacity  = '1'
      ring.style.opacity = '1'
    }

    // Smooth ring via lerp each frame
    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.13)
      ringY = lerp(ringY, mouseY, 0.13)
      dot.style.transform  = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${ringX}px,  ${ringY}px)  translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }

    // Hover states
    const onEnter = () => {
      dot.classList.add('is-hovering')
      ring.classList.add('is-hovering')
    }
    const onLeave = () => {
      dot.classList.remove('is-hovering')
      ring.classList.remove('is-hovering')
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    // Attach hover listeners to all interactive elements
    const targets = document.querySelectorAll(
      'a, button, .work-card__image, input, textarea, [role="button"]'
    )
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
