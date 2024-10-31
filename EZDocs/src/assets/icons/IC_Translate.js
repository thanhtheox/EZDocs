import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M22 34H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 30.96 2 29.84 2 27.6V8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 2 6.16 2 8.4 2h.8c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C22 8.08 22 10.32 22 14.8M22 34V14.8M22 34h13.6c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C42 30.96 42 29.84 42 27.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C38.96 2 37.84 2 35.6 2h-.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C22 8.08 22 10.32 22 14.8"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
