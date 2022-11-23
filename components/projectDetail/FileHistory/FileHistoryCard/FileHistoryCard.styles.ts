import {
  Box,
  CardContent,
  CardMedia,
  Checkbox,
  ImageListItemBar,
  Typography,
} from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const FileHistoryCardMain = styled(Box, { name: "FileHistoryCardMain" })(
  sx({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  })
)

const InfoTypography = styled(Typography, { name: "InfoTypography" })({
  fontSize: "13px",
  color: "#4E5A68",
  fontWeight: "regular",
}) as typeof Typography

const HistoryCardMediaBox = styled(Box, { name: "HistoryCardMediaBox" })(
  sx({
    display: "flex",
    flexDirection: "row",
    width: "auto",
  })
)

const HistoryCardMedia = styled(CardMedia, { name: "HistoryCardMedia" })(
  sx({
    display: "block",
    width: "40%",
    height: {
      xs: "145px",
      sm: "160px",
      md: "160px",
      lg: "160px",
      xl: "160px",
    },
    objectFit: "fill",
  })
) as typeof CardMedia

const HistoryCardContentBox = styled(Box, { name: "HistoryCardContentBox" })(
  sx({
    flex: "1 0 auto",
    pr: 0,
    pt: 0,
    width: "60%",
  })
)

const HistoryCardContent = styled(CardContent, { name: "HistoryCardContent" })(
  sx({
    flex: "1 0 auto",
    pr: 0,
    pt: 0,
  })
)

const HistoryCardContentMain = styled(Box, { name: "HistoryCardContentMain" })(
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 0,
    flexWrap: "wrap",
  })
)

const MenuButtonBox = styled(Box, { name: "MenuButtonBox" })(sx({}))

const FileNameTypography = styled(Typography, { name: "FileNameTypography" })(
  sx({
    color: "#232F34",
    variant: "body2",
    fontWeight: "700",
    width: "155px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  })
) as typeof Typography

const TypeTypography = styled(Typography, { name: "VersionTypography" })(
  sx({ py: "7px", variant: "subtitle1", color: "#C32632" })
) as typeof Typography

const DateTypography = styled(Typography, { name: "DateTypography" })(
  sx({ variant: "body2", color: "#424242" })
) as typeof Typography

const HistoryCardActionsBox = styled(Box, { name: "HistoryCardActionsBox" })(
  sx({
    display: "inline-flex",
    flexShrink: 1,
    alignItems: "center",
    pl: 1,
  })
)

const HistoryCardCheckbox = styled(Checkbox, { name: "HistoryCardCheckbox" })(
  sx({
    color: "rgb(35, 47, 52, 0.8)",
    "&.Mui-checked": {
      color: "#C32632",
    },
  })
)

const CircleBox = styled(Box, { name: "HistoryCardCheckbox" })(
  sx({
    position: "absolute",
    width: { xs: "48px", sm: "64px", md: "64px", lg: "64px", xl: "64px" },
  })
)

export {
  FileHistoryCardMain,
  InfoTypography,
  HistoryCardMediaBox,
  HistoryCardMedia,
  HistoryCardContentBox,
  HistoryCardContent,
  HistoryCardContentMain,
  MenuButtonBox,
  FileNameTypography,
  TypeTypography,
  DateTypography,
  HistoryCardActionsBox,
  HistoryCardCheckbox,
  CircleBox,
}
