import Button from "@components/common/Button"
import { styled, experimental_sx as sx } from '@mui/system';


const StatisticsInfoTitleUl = styled('ul')({
  listStyle: 'none',
  color: 'black',
  padding: 0,
  margin: 0,
  textAlign: 'center',
  display: 'flex',
  marginTop: '50px'
});

const StatisticsInfoTitleLi = styled('li')({
  width: '100%',
  fontWeight: 500,
  color: '#2e2e2e',
  fontSize: '30px',
});

const StatisticsInfoContentUl = styled('ul')({
  listStyle: 'none',
  color: 'black',
  padding: 0,
  margin: 0,
  textAlign: 'center',
  display: 'flex'
});

const StatisticsInfoContentLi = styled('li')({
  width: '100%',
  fontWeight: 500,
  color: '#2e2e2e',
  fontSize: '30px',
  marginTop: '20px',
  marginBottom: '80px',
  padding: '5px 0'
});

const StatisticsInfoBox = styled('div')({
  padding: '0 40px',
  ['@media (min-width:1535px)']: {
    marginLeft: '240px'
  }
});

const MultipleSelectBox = styled('div')({
  textAlign: 'right'
});

const SelectTypography = styled('span')({
  padding: '10px 10px 10px 5px',
  lineHeight: '58px'
});

const SearchButton = styled(Button, { name: "SearchButton" })(
  sx({
    width: { xs: "110px", sm: "116px", md: "116px", lg: "116px", xl: "116px" },
    height: { xs: "36px", sm: "40px", md: "40px", lg: "40px", xl: "40px" },
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      md: "0.875rem",
      lg: "0.875rem",
      xl: "0.875rem",
    },
    borderRadius: "4px",
    margin: '0 0 0 20px'
  })
)

export {
  StatisticsInfoTitleUl,
  StatisticsInfoTitleLi,
  StatisticsInfoContentUl,
  StatisticsInfoContentLi,
  StatisticsInfoBox,
  MultipleSelectBox,
  SelectTypography,
  SearchButton,
}