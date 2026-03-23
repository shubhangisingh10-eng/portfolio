import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every `.reveal` element on the page.
 * When an element enters the viewport it receives the `in-view` class,
 * which triggers its CSS fade-up transition.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
