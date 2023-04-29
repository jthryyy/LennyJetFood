import * as React from 'react'

export function scrollToActiveButton(
  activeButtonRef: React.MutableRefObject<null>
): void {
  if (activeButtonRef.current) {
    (activeButtonRef.current as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }
}
