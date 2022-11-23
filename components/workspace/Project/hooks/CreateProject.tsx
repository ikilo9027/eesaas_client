import React, { createContext, useContext, useState, useMemo } from "react"

interface ProjectCreateProviderProps {
  children: React.ReactNode
}

interface ProjectDataProps {
  createTime: string
  imagenum: number
  signedUrl: string
  videonum: number
  workspaceid: number
  workspacetitle: string
}

type ProjectDataType = {
  createProject: ProjectDataProps[]
  setCreateProject: React.Dispatch<React.SetStateAction<ProjectDataProps[]>>
}

const ProjectDataContext = createContext<ProjectDataType>({
  createProject: [],
  setCreateProject: () => { },
})

export function ProjectCreateProvider({
  children,
}: ProjectCreateProviderProps) {
  const [createProject, setCreateProject] = useState<ProjectDataProps[]>([])

  const ProjectDataValue = useMemo(
    () => ({ createProject, setCreateProject }),
    [createProject, setCreateProject]
  )

  return (
    <ProjectDataContext.Provider value={ProjectDataValue}>
      {children}
    </ProjectDataContext.Provider>
  )
}

export const ProjectCreateValue = () => useContext(ProjectDataContext)
