import { useEffect, useRef, useState } from 'react'

const useHover = () => {
  // useHover custom hook from https://usehooks.com/useHover/
  // The one only works once
  const [value, setValue] = useState(false)
  console.log('useHover is called')
  const ref = useRef(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', handleMouseOver)
      node.addEventListener('mouseleave', handleMouseOut)

      return () => {
        node.removeEventListener('mouseenter', handleMouseOver)
        node.removeEventListener('mouseleave', handleMouseOut)
      }
    }
  }, [ref.current])

  return [ref, value]
}

export default useHover
