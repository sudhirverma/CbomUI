import { forwardRef } from "react";

// Custom styles for MKTypography
import MKTypographyRoot from "./MKTypographyRoot";

const MKTypography = forwardRef(
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest }: any,
    ref
  ) => (
    <MKTypographyRoot
      { ...rest }
      ref={ ref }
      ownerState={ {
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
      } }
    >
      { children }
    </MKTypographyRoot>
  )
);

export default MKTypography;
