import { SetStateAction, useEffect, useState } from "react"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { height, styled } from "@mui/system"
import Icon from "./Icon"
import ImgZoom from "./ImgZoom"
import ImgSlider from "./ImgSlider"
import { DialogTitle } from "@mui/material"
import IconButton from "./IconButton"
import ReactCompareImage from 'react-compare-image';
import { CatchingPokemonSharp } from "@mui/icons-material"

interface Props {
  // leftImage: string
  // rightImage: string
  // leftImageLabel: string
  // rightImageLabel: string
  leftImageList: string[]
  rightImageList: string[]
  originImageList: string[]
  handleClose: () => void
}

const ZoomButton = styled(Button)({
  color: "#848484",
  borderColor: "#DBDBDB",
  borderRadius: 0,
  maxWidth: "36px",
  minWidth: "36px",
  "& .MuiButton-startIcon": {
    margin: 0,
  },
  "&:hover": {
    borderColor: "#DBDBDB",
  },
})

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}

const VideoCompareTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <IconButton
      icon="Close"
      iconColor="black"
      onClick={onClose}
      sx={{
        position: "absolute",
        left: "0px",
        top: "4px",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
    />
  )
}

export default function VideoCompare(props: Props) {
  const { handleClose, leftImageList, rightImageList, originImageList } = props
  const [isHide, setIsHide] = useState<boolean>(false)
  const [isUpdown, setIsUpdown] = useState<boolean>(false)
  const [rowIndex, setRowIndex] = useState<number>(0)
  const [leftImage, setLeftImage] = useState<string>(leftImageList[0])
  const [rightImage, setRightImage] = useState<string>(rightImageList[0])

  console.log(' leftImageList, rightImageList, originImageList ', leftImageList, rightImageList, originImageList)
  // const sampleImage = [
  //   "https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg",
  //   "https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg",
  //   "https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg",
  //   "https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg",
  //   "https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg",
  // ]

  function handlerOnOff() {
    setIsHide(!isHide)
  }

  function onClickImg(i: number) {
    setLeftImage(leftImageList[i])
    setRightImage(rightImageList[i])
    setIsUpdown(false)

    if (rowIndex == i) {
      setIsUpdown(!isUpdown)
      setRowIndex(-1)
    } else {
      setRowIndex(i)
    }
  }

  function activeImg(i: number) {
    if (rowIndex === i) {
      return false;
    } else {
      return true;
    }
  }

  const ThumbnailImgBox = styled('div')({
    backgroundColor: '#0000007d',
    height: isHide ? '40px' : '150px',
    width: '100%',
    position: 'relative',
    bottom: isHide ? '-5px' : '105px',
    margin: '0 auto',
    textAlign: 'center',
    ['@media (max-width:760px)']: {
      height: isHide ? '40px' : '110px',
      bottom: isHide ? '-5px' : '65px',
    },
    ['@media (max-width:586px)']: {
      height: isHide ? '30px' : '90px',
      bottom: isHide ? '-16px' : '45px'
    },
    ['@media (max-width:515px)']: {
      overflowX: 'scroll',
      bottom: '-10px',
      height: '100px',
      '&::-webkit-scrollbar': {
        height: '5px'
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '2px',
        background: '#ccc',
      }
    },
  });

  const ThumbnailScrollBox = styled('div')({
    ['@media (max-width:515px)']: {
      bottom: '-10px',
      width: `${135 * (originImageList.length)}px`,
    }
  });

  const ThumbnailImg = styled('img')({
    cursor: 'pointer',
    height: '80px',
    width: '110px',
    margin: '35px 15px',
    display: isHide ? 'none' : 'inline-block',
    ['@media (max-width:820px)']: {
      height: '70px',
      width: '95px',
      margin: '40px 15px',
    },
    ['@media (max-width:760px)']: {
      height: '55px',
      width: '75px',
      margin: '25px 15px',
    },
    ['@media (max-width:586px)']: {
      height: '40px',
      width: '60px'
    },
    ['@media (max-width:515px)']: {
      float: 'left',
      height: '55px',
      width: '75px',
      margin: '17px 15px',
    },
  });

  const HideBox = styled('div')({
    position: 'fixed',
    color: 'white',
    textAlign: 'center',
    lineHeight: '40px',
    width: '60px',
    height: '40px',
    ['@media (max-width:760px)']: {
      height: '30px',
      lineHeight: '30px',
    },
    ['@media (max-width:586px)']: {
      fontSize: '12px',
      height: '30px',
      lineHeight: '30px',
    },
    ['@media (max-width:515px)']: {
      display: 'none'
    },
  });

  const ImageFrame = styled('div')({
    // display: 'flex',
    // alignItems: 'center',
    display: 'inline-block',
    height: 'auto',
    width: '400px',
    objectFit: 'contain',
    // ['@media (max-width:820px)']: {
    //   width: '680px',
    // },
    // ['@media (max-width:760px)']: {
    //   width: '550px',
    // },
    // ['@media (max-width:586px)']: {
    //   fontSize: '12px',
    //   height: '30px',
    //   lineHeight: '30px',
    // },
    // ['@media (max-width:515px)']: {
    //   display: 'none'
    // },
  });
  return (
    <>
      <div style={{ height: '40px', width: '100%' }}>
        <VideoCompareTitle onClose={handleClose} />
      </div>
      <div style={{
        textAlign: 'center', backgroundColor: '#525252', position: 'relative', top: '45px'
      }}>
        < ImageFrame >
          <ReactCompareImage
            leftImage={leftImage}
            rightImage={rightImage}
            handleSize={20}
          />


        </ImageFrame>

      </div >
      <ThumbnailImgBox>
        <HideBox
          onClick={handlerOnOff}
        >
          hide
        </HideBox>
        <ThumbnailScrollBox>

          <div style={{ margin: '0 auto', textAlign: 'center' }}>
            {Object.values(originImageList).map((image, index) => (
              <ThumbnailImg
                onClick={() => onClickImg(index)}
                src={image}
                key={`thumbnail${index}`}
                style={{ border: activeImg(index) ? '' : '2px solid orange' }}
              />
            ))
            }
          </div>
        </ThumbnailScrollBox>
      </ThumbnailImgBox>
    </>
  )
}
