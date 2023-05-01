export function handleScroll() {
  const aboutSection = document.getElementById('about')

  if (aboutSection.getBoundingClientRect().top > window.innerHeight) {
    window.history.replaceState(
      {},
      document.title,
      window.location.href.split('#')[0]
    )
  }
}
