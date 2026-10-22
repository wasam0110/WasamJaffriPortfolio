import { useRef } from 'react'

const MAX_OFFSET = 4

export default function Magnetic({ children, className = '' }) {
  const targetRef = useRef(null)

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = targetRef.current?.getBoundingClientRect()
    if (!bounds) return
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * MAX_OFFSET * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * MAX_OFFSET * 2
    targetRef.current.style.setProperty('--mag-x', `${x.toFixed(1)}px`)
    targetRef.current.style.setProperty('--mag-y', `${y.toFixed(1)}px`)
  }

  const reset = () => {
    targetRef.current?.style.setProperty('--mag-x', '0px')
    targetRef.current?.style.setProperty('--mag-y', '0px')
  }

  return (
    <span
      ref={targetRef}
      className={`magnetic-target ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </span>
  )
}
