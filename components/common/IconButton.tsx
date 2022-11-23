import * as React from "react"
import {
  IconButton as MuiButton,
  IconButtonProps as MuiButtonProps,
} from "@mui/material"
import { Badge as MuiBadge } from "@mui/material"
import Icon from "./Icon"

interface Props extends MuiButtonProps {
  disabled: boolean
  icon: string
  iconColor: string
  iconTheme: "Filled" | "Outlined" | "Rounded" | "TwoTone" | "Sharp"
  badgeContent: string
  badgeColor: "default" | "primary" | "secondary" | "error"
  width: number | string
  height: number
}

export default function IconButton(props: Props): JSX.Element {
  const {
    badgeColor,
    badgeContent,
    height,
    icon,
    iconColor,
    iconTheme,
    width,
    ...other
  } = props
  const IconBadge =
    badgeContent === "" ? (
      <Icon icon={icon} theme={iconTheme} iconColor={iconColor} />
    ) : (
      <MuiBadge badgeContent={badgeContent} color={badgeColor}>
        <Icon icon={icon} theme={iconTheme} />
      </MuiBadge>
    )

  return <MuiButton {...other}>{IconBadge}</MuiButton>
}

IconButton.defaultProps = {
  disabled: false,
  icon: "favorite",
  iconColor: "#AEB7C2",
  iconTheme: "Filled" as "Filled",
  badgeContent: "",
  badgeColor: "default" as "default",
  width: 48,
  height: 48,
}
