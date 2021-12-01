interface IIconClose {
  size?: number
  color?: string
  onClick?: () => void
}

const IconClose = ({ size = 16, color = '#000000', onClick }: IIconClose) => (
  <svg width={size} height={size} onClick={onClick} viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
)

export default IconClose
