import { ImageCard } from "@components/project/ImageCard"
import { FileUploadProvider } from "@components/project/ImageCard/hooks/FileUpload"
import { SrProgressProvider } from "@components/projectDetail/hooks/SrProgress"
import { GetStaticPaths } from "next/types";

function Project() {
  return (
    <SrProgressProvider>
      <FileUploadProvider>
        <ImageCard />
      </FileUploadProvider>
    </SrProgressProvider>
  )
}

export default Project

