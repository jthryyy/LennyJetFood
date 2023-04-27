import * as React from 'react'

export const useTranslateOnScroll = (): React.RefObject<HTMLDivElement> => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(-${window.scrollY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return ref
}
