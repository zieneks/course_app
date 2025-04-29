import * as React from "react"
import Svg, { Path,SvgProps } from "react-native-svg"


type HomeIconProps = SvgProps & {
  color?: string
  size?: number
  marginTop?: number
  focused?: boolean
}
const HomeIcon: React.FC<HomeIconProps> = ({ color , size , ...props }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16.819 1.614a1.333 1.333 0 0 0-1.637 0l-12 9.334A1.333 1.333 0 0 0 2.666 12v14.667a2.667 2.667 0 0 0 2.666 2.666h21.334a2.667 2.667 0 0 0 2.666-2.666V12c0-.411-.19-.8-.514-1.052l-12-9.334Zm4.514 25.053h5.334V12.652L16 4.356 5.333 12.652v14.015h5.334V16c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.597 1.333 1.333v10.667Zm-8 0v-9.334h5.334v9.334h-5.334Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default HomeIcon
