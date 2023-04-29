import { RefObject, useEffect } from 'react'

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [ref, onClickOutside])
}
