interface ILiMenu {
  [key: string]: string
}

const LiMenu = ({ value, id }: ILiMenu) => (
  <li id={id}>{value}</li>
)

export default LiMenu
