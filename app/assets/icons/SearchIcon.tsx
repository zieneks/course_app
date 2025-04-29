import * as React from "react"
import Svg, { Path,SvgProps } from "react-native-svg"

type SearchIconProps = SvgProps & {
  color?: string
  size?: number
  marginTop?: number
  focused?: boolean
}


const SearchIcon: React.FC<SearchIconProps> = ({ color, size , ...props }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.06 21.081 28 28m-4-14c0 5.523-4.477 10-10 10S4 19.523 4 14 8.477 4 14 4s10 4.477 10 10Z"
    />
  </Svg>
)
export default SearchIcon
