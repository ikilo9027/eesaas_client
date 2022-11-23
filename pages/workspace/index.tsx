import { Project } from "@components/workspace/Project"
import { ProjectCreateProvider } from "@components/workspace/Project/hooks/CreateProject"

export default function Main() {
  return (
    <ProjectCreateProvider>
      <Project />
    </ProjectCreateProvider>
  )
}
