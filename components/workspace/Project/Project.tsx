import React, { useEffect } from "react"
import Image from "next/image"
import Link from "@/Link"
import { Box, CardMedia, Container } from "@mui/material"
import Skeleton from "@mui/material/Skeleton"
import ImageIcon from "@mui/icons-material/Image"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import ProjectCreate from "./ProjectCreate"
import { ProjectCreateValue } from "./hooks/CreateProject"
import {
  getWorkspace,
  deleteWorkspace,
} from "@components/api/modules/workspace"
import {
  EmptyFileUploadBox,
  EmptyFileUploadContentBox,
  EmptyFileUploadTextBox,
} from "@components/project/ImageCard/ImageCard.styles"
import {
  ProjectCardMain,
  ButtonBox,
  ProjectListItemBox,
  ProjectBox,
  CardLinkBox,
  ImageCardBox,
  NextjsImageBox,
  InfoMainBox,
  InfoBox,
  TitleCardBox,
  WrapCardBox,
  InfoTitleBox,
  InfoTitleTypography,
  InfoTypography,
  InfoTypographyBox,
  ProjectMenuBox,
} from "./Project.styles"
import ProjectMenu from "./ProjectMenu"
import router from "next/router"
import moment from "moment"

export default function Project() {
  const { createProject, setCreateProject } = ProjectCreateValue()
  const [projectReady, setProjectReady] = React.useState(false)
  const [projectCreateStatus, setProjectCreateStatus] = React.useState("ready")

  function formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss")
    // return date
  }

  function handleCreateProject() {
    setProjectCreateStatus("create")
    fetchGetWorkspace()
  }

  async function fetchGetWorkspace() {
    let params = {
      userId: sessionStorage.getItem("userId"),
    }
    await getWorkspace(params).then((data) => {
      setCreateProject(data.data)
      setProjectCreateStatus("ready")
    })
  }

  async function fetchDeleteProject(id: number) {
    let params = {
      workspaceId: id,
    }
    await deleteWorkspace(params).then(() => {
      fetchGetWorkspace()
    })
  }

  function onDelete(id: number) {
    fetchDeleteProject(id)
    // setCreateProject((curr) => curr.filter((item) => item.id !== id))
  }

  function onClickImageCard(item: any) {
    console.log('.router--------', router.asPath)
    // href={`/workspace/${item.workspaceid}`}
    router.push(`/workspace/${item.workspaceid}`)
  }
  useEffect(() => {
    fetchGetWorkspace()
    const progress = setTimeout(() => {
      setProjectReady(true)
    }, 1000)

    return () => clearTimeout(progress)
  }, [])
  return (
    <Container sx={{ maxWidth: "1296px" }} maxWidth={false}>
      <Box
        sx={{
          width: { xs: "100%", sm: "98%", md: "98%", lg: "98%", xl: "1309px" },
          height: "40px",
        }}
      >
        <ButtonBox component="div">
          {projectReady && <ProjectCreate getWorkspace={handleCreateProject} />}
          {/* getWorkspace={ } deleteWorkspace={ }  */}
        </ButtonBox>
      </Box>

      <ProjectCardMain component="main">
        {createProject.map((item, index) => (
          <ProjectListItemBox key={index}>
            <div onClick={() => onClickImageCard(item)}>
              <ProjectBox>
                <WrapCardBox>
                  <CardLinkBox>
                    <ImageCardBox>
                      <NextjsImageBox>
                        {/* 
                        ??????????????? ?????? ??????????????? ??????
                        ??????????????? ???????????? ???????????? ?????? ??? ??????
                         */}
                        {item.signedUrl !== "" ? (
                          <CardMedia
                            component="img"
                            src={item.signedUrl}
                            sx={{
                              position: "relative",
                              objectFit: "fill",
                              width: "100%",
                              height: {
                                xs: "128px",
                                sm: "200px",
                                md: "200px",
                                lg: "200px",
                                xl: "200px",
                              },
                            }}
                          />
                        ) : (
                          <ImageIcon
                            sx={{
                              color: "#E9E9ED",
                              width: "100%",
                              height: {
                                xs: "128px",
                                sm: "200px",
                                md: "200px",
                                lg: "200px",
                                xl: "200px",
                              },
                            }}
                          />
                        )}
                      </NextjsImageBox>
                    </ImageCardBox>
                    <InfoMainBox>
                      <TitleCardBox>{item.workspacetitle}</TitleCardBox>
                      <InfoBox>
                        <InfoTitleBox>
                          <InfoTitleTypography component="div">
                            ?????? ??????
                          </InfoTitleTypography>
                          <InfoTitleTypography component="div">
                            ?????? ??????
                          </InfoTitleTypography>
                        </InfoTitleBox>
                        <InfoTypographyBox>
                          <InfoTypography component="div">
                            {/* 
                            ??????????????? ?????? ??????????????? ??????
                            ??????????????? ???????????? ???????????? ?????? ??? ?????? 
                        */}
                            {/* {item.info} */}
                            {`${item.imagenum} ?????????, ${item.videonum} ?????????`}
                          </InfoTypography>
                          <InfoTypography component="div">
                            {formatDate(item.createTime)}
                          </InfoTypography>
                        </InfoTypographyBox>
                      </InfoBox>
                    </InfoMainBox>
                  </CardLinkBox>
                </WrapCardBox>
              </ProjectBox>
            </div>
            <ProjectMenuBox>
              <ProjectMenu
                iconTheme="TwoTone"
                iconColor="rgb(35, 47, 52, 0.8)"
                onDelete={onDelete}
                id={item.workspaceid}
              />
            </ProjectMenuBox>
          </ProjectListItemBox>
        ))}
        {createProject &&
          createProject.length > 0 &&
          projectCreateStatus === "create" && (
            <ProjectListItemBox>
              <ProjectBox>
                <WrapCardBox>
                  <CardLinkBox>
                    <ImageCardBox>
                      <NextjsImageBox>
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            width: "100%",
                            height: {
                              xs: "128px",
                              sm: "200px",
                              md: "200px",
                              lg: "200px",
                              xl: "200px",
                            },
                          }}
                        />
                      </NextjsImageBox>
                    </ImageCardBox>
                    <InfoMainBox>
                      <TitleCardBox>
                        <Skeleton variant="text" width="100%" />
                      </TitleCardBox>
                      <InfoBox>
                        <InfoTitleBox>
                          <Skeleton variant="text" width="50px" height="40px" />
                          <Skeleton variant="text" width="50px" height="40px" />
                        </InfoTitleBox>
                        <InfoTypographyBox>
                          <Skeleton variant="text" width="80px" height="40px" />
                          <Skeleton variant="text" width="80px" height="40px" />
                        </InfoTypographyBox>
                      </InfoBox>
                    </InfoMainBox>
                  </CardLinkBox>
                </WrapCardBox>
              </ProjectBox>
            </ProjectListItemBox>
          )}
      </ProjectCardMain>

      {projectReady && createProject.length === 0 && (
        <EmptyFileUploadBox>
          <EmptyFileUploadContentBox>
            <AddReactionIcon
              sx={{ color: "#E9E9ED", width: "120px", height: "120px" }}
            />
            <EmptyFileUploadTextBox>
              ??????????????? ????????? ?????????.
            </EmptyFileUploadTextBox>
          </EmptyFileUploadContentBox>
        </EmptyFileUploadBox>
      )}
    </Container>
  )
}
