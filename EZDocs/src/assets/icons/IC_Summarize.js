import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M32.629 33.172H19.384M2 34l9.187-3.534c.588-.226.882-.339 1.157-.486.244-.131.477-.282.696-.452.246-.192.469-.414.914-.86L32.629 9.995a4.683 4.683 0 0 0-6.623-6.622L7.331 22.046c-.445.445-.667.668-.859.914-.17.22-.32.452-.452.696-.147.275-.26.569-.486 1.157L2 34Zm0 0 3.407-8.86c.244-.633.366-.95.575-1.095a.828.828 0 0 1 .628-.133c.25.047.49.288.97.768l3.74 3.74c.48.48.72.72.768.97a.827.827 0 0 1-.133.628c-.145.209-.462.33-1.096.575L2 34Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
