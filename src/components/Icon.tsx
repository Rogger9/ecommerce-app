import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

interface IconProps {
  iconStyle: string
  handleClick?: React.MouseEventHandler<SVGSVGElement>
}

const Icon = ({ iconStyle, icon, size = 'lg', handleClick }: IconProps & FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={[iconStyle as IconPrefix, icon as IconName]} size={size} onClick={handleClick} />
)

export default Icon
