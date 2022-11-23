import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import { Interpolation, Theme } from '@emotion/react';
import { JSX } from '@emotion/react/jsx-runtime';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props: { children: any; open: any; value: any; }) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const AirbnbSlider = withStyles({
  root: {
    color: '#C32632',
    height: 3,
    padding: '13px 0',
    marginTop: '10px'
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);
function AirbnbThumbComponent(props: JSX.IntrinsicAttributes & { css?: Interpolation<Theme>; } & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & { css?: Interpolation<Theme>; }) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

interface Props {
  setStartTime: React.Dispatch<React.SetStateAction<number>>
  setEndTime: React.Dispatch<React.SetStateAction<number>>
  startTime: number
  endTime: number
  video_duration: number
}

export default function CustomizedSlider(props: Props) {
  const classes = useStyles();
  const { setStartTime, setEndTime, startTime, endTime, video_duration } = props

  function handleOnChange(event: any, value: any) {
    setStartTime(value[0])
    setEndTime(value[1])
  }

  function formatTime(time: number) {
    console.log(video_duration, time)
    let total_sec = Number(Math.floor((video_duration / 100) * time))
    let hour = Math.floor(total_sec / 3600);
    let min = Math.floor((total_sec % 3600) / 60);
    let sec = Math.floor(total_sec % 60);

    let format_hour = hour.toString().length == 1 ? "0" + hour : hour;
    let format_min = min.toString().length == 1 ? "0" + min : min;
    let format_sec = sec.toString().length == 1 ? "0" + sec : sec;
    return `${format_hour}:${format_min}:${format_sec}`
  }

  return (
    <div className={classes.root}>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[0, 100]}
        onChange={handleOnChange}
      />
      start_time:{formatTime(startTime)} end_time:{formatTime(endTime)}
    </div>
  );
}

// CustomizedSlider.defaultProps = {
//   video_duration:
// }