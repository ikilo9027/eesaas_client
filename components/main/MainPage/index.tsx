import { MainPageAppBar } from "../MainPageAppBar"
import MainPageTitle from "./MainPageTitle"
import MainPageContent from "./MainPageContent"
import MainPageFooter from "./MainPageFooter"
export default function MainPage() {
  return (
    <>
      <MainPageAppBar logoColor={"#C32632"} />
      <MainPageTitle />
      <MainPageContent />
      <MainPageFooter />
    </>
  )
}
