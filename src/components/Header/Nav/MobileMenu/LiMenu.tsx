interface IProps {
  value: string
  id: string
}

const LiMenu = ({ value, id }: IProps) => (
  <li id={id}>{value}</li>
)

export default LiMenu
