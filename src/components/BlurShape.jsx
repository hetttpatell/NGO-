export default function AmbientGlow({ color = '#B8860B', size = '400px', position = {}, opacity = 0.03 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        filter: 'blur(120px)',
        opacity,
        pointerEvents: 'none',
        ...position,
      }}
    />
  )
}
