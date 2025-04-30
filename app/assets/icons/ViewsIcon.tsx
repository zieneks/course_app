import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type ViewsIconProps = SvgProps & {
  color?: string;
  size?: number;
};

const ViewsIcon: React.FC<ViewsIconProps> = ({ color = "#000", size = 24, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32" 
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.333 28 16 22.667 22.667 28M10.4 22.667h11.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.856.436-1.976.436-4.216V10.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C24.96 4 23.84 4 21.6 4H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v5.867c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436Z"
    />
  </Svg>
);

export default ViewsIcon;
