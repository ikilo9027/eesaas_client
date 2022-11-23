import * as React from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
// import { styled, experimental_sx as sx } from "@mui/system"

interface GenreButtonProps {
  genreClicked: boolean
}

// const GenreButton = styled(Button)<GenreButtonProps>(({ genreClicked }) =>
//   sx({
//     width: "90px",
//     height: "85px",
//     borderRadius: "50%",
//     border: genreClicked ? 0 : 1,
//     borderColor: "#BDBDBD",
//     color: genreClicked ? "#C32632" : "black",
//     fontSize: 20,
//     backgroundColor: genreClicked ? "rgba(195, 38, 50, 0.1)" : "white",
//     "&:hover": {
//       backgroundColor: genreClicked ? "rgba(195, 38, 50, 0.1)" : "white",
//     },
//   })
// )

export default function GenreButtonGroup({ genreValue }: any) {
  const [genreClicked, setGenreClicked] = React.useState<boolean[]>([
    false,
    false,
    false,
    false,
  ])

  const genreClick = (index: number) => {
    const changeGenre = genreClicked.map((_, genreIndex) =>
      index === genreIndex ? true : false
    )
    setGenreClicked(changeGenre)
    genreValue(genreButtonData[changeGenre.indexOf(true)])
  }

  const genreButtonData = ["사람", "풍경", "사물", "기타"]
  const genreButtonImageData = ["영화", "TV", "애니", "기타"]

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {genreButtonData.map((name, index) => (
        <Button
          key={index}
          onClick={() => genreClick(index)}
          // genreClicked={genreClicked[index]}
          sx={{
            width: "90px",
            height: "85px",
            borderRadius: "50%",
            border: genreClicked[index] ? 0 : 1,
            borderColor: "#BDBDBD",
            color: genreClicked[index] ? "#C32632" : "black",
            fontSize: 20,
            backgroundColor: genreClicked[index]
              ? "rgba(195, 38, 50, 0.1)"
              : "white",
            "&:hover": {
              backgroundColor: genreClicked[index]
                ? "rgba(195, 38, 50, 0.1)"
                : "white",
            },
          }}
        >
          {name}
        </Button>
      ))}
    </Box>
  )
}
