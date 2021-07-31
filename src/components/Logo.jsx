const Logo = ({ width, height, color, top, bottom, left, right }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 49 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ position: 'absolute', top: `${top}`, left: `${left}` }}
    >
      <rect
        x='2'
        y='2'
        width='8'
        height='31'
        rx='4'
        stroke={color}
        strokeWidth='4'
      />
      <rect
        x='49'
        width='12'
        height='35'
        rx='6'
        transform='rotate(90 49 0)'
        fill={color}
      />
    </svg>
  )
}

export default Logo
