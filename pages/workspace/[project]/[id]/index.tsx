import { HistoryDataProvider } from "@components/projectDetail/FileHistory/hooks/HistoryData"
import { SrProgressProvider } from "@components/projectDetail/hooks/SrProgress"
import { SrValueProvider } from "@components/projectDetail/hooks/SrValue"
import ProjectDetail from "@components/projectDetail/index"

export default function ItemInfo() {
  return (
    <SrValueProvider>
      {/* <PointValueProvider> */}
      <SrProgressProvider>
        <HistoryDataProvider>
          <ProjectDetail />
        </HistoryDataProvider>
      </SrProgressProvider>
      {/* </PointValueProvider> */}
    </SrValueProvider>
  )
}
