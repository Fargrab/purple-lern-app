import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill={props.fill ?? "#D2D2D2"} {...props}>
    <Path d="M9.144 20.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1 3.41 3.41 0 0 0 1.013-2.422V9.866c0-.735-.328-1.431-.895-1.902l-6.662-5.29a3.115 3.115 0 0 0-3.958.071L3.467 7.963A2.474 2.474 0 0 0 2.5 9.867v8.703C2.5 20.464 4.047 22 5.956 22h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z" />
  </Svg>
);
export default HomeIcon;
