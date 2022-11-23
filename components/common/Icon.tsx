// @ts-nocheck
import * as Icons from "@mui/icons-material"
import { SvgIconProps } from "@mui/material"
import { pascalCase } from "../utils/Index"

interface Props extends SvgIconProps {
  icon: string
  theme: "Filled" | "Outlined" | "Rounded" | "TwoTone" | "Sharp"
  width: number | string
  height: number | string
  iconColor?: string
  fontSize: "small" | "medium" | "large" | string
}

export default function Icon(props: Props): JSX.Element | null {
  const { height, icon: iconProp, theme, width, iconColor, ...other } = props
  const iconName = `${iconProp && pascalCase(iconProp)}${
    theme === "Filled" ? "" : theme
  }`
  const MuiIcon =
    Object.keys(Icons).indexOf(iconName) !== -1 ? Icons[iconName] : undefined
  return MuiIcon ? (
    <MuiIcon style={{ width, height }} {...other} sx={{ color: iconColor }} />
  ) : null
}

Icon.defaultProps = {
  icon: "undefined",
  theme: "Filled" as "Filled",
  width: 24,
  height: 24,
  iconColor: "undefined",
  fontSize: "medium",
}
