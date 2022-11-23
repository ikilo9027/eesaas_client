import * as React from 'react';
import { styled, experimental_sx as sx } from "@mui/system"
import { Box, CardMedia } from '@mui/material';
import VideoPlayer from 'react-video-player-extended';
import TimeSlider from "@components/common/TimeSlider"

interface Props {
  segmentationList: string[]
  fileCardData: FileCardDataProps
}

interface FileCardDataProps {
  type: "image" | "video"
  url: string
  duration: number
}

export default function VideoEditorBox(props: Props) {
  const { segmentationList, fileCardData } = props
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false);

  const SegmentationFrameBox = styled(Box, { name: "SegmentationFrameBox" })(
    sx({
      border: '1px solid red',
      width: '100%',
      height: '57px',
      margin: '15px 0',
      // display: 'inline-block'
      textAlign: 'center',
      ['@media (max-width:680px)']: {
        height: '50px'
      },
      ['@media (max-width:615px)']: {
        height: '45px'
      },
      ['@media (max-width:560px)']: {
        height: '40px'
      },
      ['@media (max-width:515px)']: {
        height: '35px'
      }
      // ['@media (max-width:515px)']: {
      //   height: '35px'
      // }
    })
  )
  const SegmentationFrame = styled(Box, { name: "SegmentationFrame" })(
    sx({
      // border: '1px solid blue',
      height: '100%',
      width: 'auto',
      display: 'inline-block',
      lineHeight: '45px',

    })
  )

  // React.useEffect(() => {
  // }, [startTime])

  // React.useEffect(() => {
  // }, [endTime])
  return (
    <Box sx={{ width: '100%' }}>
      {/* <CardMedia
        component="video"
        src={fileCardData.url}
        sx={{
          position: "relative",
          objectFit: "fill",
          width: "100%",
          height: "100%",
        }}
      /> */}
      {/* <VideoPlayer
        url={fileCardData.url}
        isPlaying={isPlaying}
        volume={volume}
        onPlay={handlePlay}
        onPause={handlePause}
        onVolume={handleVolume}
        width={'100%'}
        timeStart={0}
      /> */}
      {/* <SegmentationFrameBox >
        {segmentationList.map((data, index) => (
          <SegmentationFrame key={`segmentation_${index}`}>
            <CardMedia
              component="img"
              src={data}
              sx={{
                position: "relative",
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
            />

          </SegmentationFrame>
        ))}
      </SegmentationFrameBox> */}
      <CardMedia
        component={fileCardData.type}
        controls
        src={fileCardData.url}
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <TimeSlider setStartTime={setStartTime} setEndTime={setEndTime} startTime={startTime} endTime={endTime} video_duration={fileCardData.duration} />
    </Box>
  );
}