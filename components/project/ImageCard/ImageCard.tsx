import React, { useEffect } from "react"
import Image from "next/image"
import Link from "@/Link"
import Box from "@mui/material/Box"
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"
import Skeleton from "@mui/material/Skeleton"
import { motion } from "framer-motion"
import Menu from "@components/common/Menu"
import { useRouter } from "next/router"
import {
  MultipleFileUpload,
  StorageDropzoneBox,
} from "../../file/MultipleFileUpload"
import { UploadProgressValue } from "./hooks/FileUpload"
import { SrProgress } from "@components/projectDetail/hooks/SrProgress"
import { getUploadFileList, deleteFile } from "@components/api/modules/file"
import {
  ContainerBox,
  CardBox,
  CardLinkBox,
  IconCardBox,
  ImageCardBox,
  ImageListItemBox,
  ImageListItemBarBox,
  InfoCardBox,
  NextjsImageBox,
  TitleCardBox,
  WrapCardBox,
  MenuButtonBox,
  MultipleFileUploadBox,
  EmptyFileUploadContentBox,
  EmptyFileUploadTextBox,
  ImageCardMain,
  EmptyFileUploadBox,
} from "./ImageCard.styles"
import ChipsArray from "@components/common/ChipsArray"
import { CardMedia } from "@mui/material"
import axios from "axios"
interface UploadFileList {
  FPS: number
  bitrate: number
  codec: string
  date: string
  duration: string
  filename: string
  format: string
  height: number
  signedUrl: string
  size: number
  type: string
  width: number
  id: number
  srStatus: string
  srtype: string
}
interface FileList extends Array<UploadFileList> { }

export default function ImageCard() {
  const router = useRouter()
  const queries = router.query
  const [project, setProject] = React.useState<string | string[] | undefined>(
    ""
  )
  const [itemData, setItemData] = React.useState<FileList>([])
  const { progress } = UploadProgressValue()
  const [progressCount, setProgressCount] = React.useState(0)
  const [itemDataisReady, setItemDataisReady] = React.useState(false)
  const [itemDataLength, setItemDataLength] = React.useState(0)
  const [userId, setUserId] = React.useState<string | null>("")
  const [uploadStorageValue, setUploadStorageValue] = React.useState(0)
  const { srProgress, setSrProgress } = SrProgress()

  const sampleImage = [
    "샘플 이미지.jpeg",
    "샘플 이미지2.jpg",
    "샘플 이미지3.png",
  ]

  useEffect(() => {
    const progress = setTimeout(() => {
      setItemDataisReady(true)
    }, 1000)

    return () => clearTimeout(progress)
  }, [])

  React.useEffect(() => {
    if (router.isReady) {
      setProject(queries.project)
    }
  }, [queries.project, router.isReady])

  async function onDelete(id: number) {
    let params = {
      fileId: id,
    }
    await deleteFile(params)
      .then((data) => {
        fetchGetUploadFileList()
      })
      .catch((err) => {
        console.log("delete error--->", err)
      })
    // setFiles((curr) => curr.filter((fw) => fw.id !== id))
  }

  function formatDate(date: string) {
    // return moment(date).format("YYYY-MM-DD HH:mm:ss")
    return date
  }

  async function fetchGetUploadFileList() {
    let params = {
      userId: sessionStorage.getItem("userId"),
      workspaceTitle: queries.project,
    }
    await getUploadFileList(params)
      .then((data) => {
        setItemData(data.data)
        setItemDataLength(data.data.length)
        setSrProgress("ready")
        let process = data.data.filter(
          (file: any) => file.srStatus === "processing"
        )
        if (process.length > 0) {
          // 프로그래스 on / off
          setProgressCount(progressCount + 1)
        } else {
          setProgressCount(0)
        }
      })
      .catch((err) => {
        router.push("/workspace")
      })
  }

  useEffect(() => {
    if (progressCount === 0) {
      return
    }

    const progress = setTimeout(() => {
      fetchGetUploadFileList()
    }, 5000)

    return () => clearTimeout(progress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressCount])

  useEffect(() => {
    // fetchGetUploadFileList()
    if (queries.project !== undefined) {
      fetchGetUploadFileList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries.project])

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId"))
    if (userId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/workspace/getsize/${userId}`)
        .then((data) => {
          setUploadStorageValue(parseInt(data.data))
        })
    }
  }, [userId])

  return (
    <ContainerBox maxWidth={false}>
      <MultipleFileUploadBox>
        {uploadStorageValue >= 30 ? (
          <StorageDropzoneBox>
            <Box sx={{ color: "red" }}>사용가능 용량 초과 입니다.</Box>
          </StorageDropzoneBox>
        ) : (
          <MultipleFileUpload onSelect={fetchGetUploadFileList} />
        )}
      </MultipleFileUploadBox>
      <ImageCardMain>
        {itemData && itemData.length > 0 && srProgress === "upload" && (
          <ImageListItemBox>
            <CardBox>
              <WrapCardBox>
                <IconCardBox>
                  <Skeleton variant="text" />
                </IconCardBox>
                <CardLinkBox>
                  <TitleCardBox>
                    <Skeleton variant="text" />
                  </TitleCardBox>
                  <ImageCardBox>
                    <NextjsImageBox>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: "100%",
                          height: {
                            xs: "255px",
                            sm: "255px",
                            md: "255px",
                            lg: "255px",
                            xl: "306px",
                          },
                        }}
                      />
                    </NextjsImageBox>
                  </ImageCardBox>
                </CardLinkBox>
                <InfoCardBox>
                  <Skeleton variant="text" />
                </InfoCardBox>
              </WrapCardBox>
            </CardBox>
          </ImageListItemBox>
        )}
        {itemData && itemData.length === 0 && srProgress === "upload" && (
          <ImageListItemBox>
            <CardBox>
              <WrapCardBox>
                <IconCardBox>
                  <Skeleton variant="text" />
                </IconCardBox>
                <CardLinkBox>
                  <TitleCardBox>
                    <Skeleton variant="text" />
                  </TitleCardBox>
                  <ImageCardBox>
                    <NextjsImageBox>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: "100%",
                          height: {
                            xs: "255px",
                            sm: "255px",
                            md: "255px",
                            lg: "255px",
                            xl: "306px",
                          },
                        }}
                      />
                    </NextjsImageBox>
                  </ImageCardBox>
                </CardLinkBox>
                <InfoCardBox>
                  <Skeleton variant="text" />
                </InfoCardBox>
              </WrapCardBox>
            </CardBox>
          </ImageListItemBox>
        )}
        {itemData &&
          itemData.length > 0 &&
          itemData.map((item, index) => (
            <ImageListItemBox key={index}>
              <motion.div
                style={{ borderRadius: "14px" }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "rgba(0,0,0,0.3) 5px 10px 10px",
                }}
              >
                <CardBox>
                  <WrapCardBox>
                    <IconCardBox>
                      <Box
                        sx={{
                          lineHeight: "34px",
                          fontSize: "36px",
                        }}
                      >
                        {progress > 0 && progress < 100 && (
                          <ImageListItemBarBox
                            title={<ChipsArray status="processing" />}
                            position="top"
                            actionPosition="left"
                          />
                        )}
                        {progress === 100 ? (
                          <ImageListItemBarBox
                            title={<ChipsArray status="processed" />}
                            position="top"
                            actionPosition="left"
                          />
                        ) : (
                          <ChipsArray status={item.srStatus} />
                        )}
                      </Box>
                    </IconCardBox>
                    <CardLinkBox>
                      <Link
                        href={`/workspace/${project}/${item.filename}?fileId=${item.id}`}
                      >
                        <TitleCardBox>{item.filename}</TitleCardBox>
                      </Link>
                      <ImageCardBox>
                        <Link
                          href={`/workspace/${project}/${item.filename}?fileId=${item.id}`}
                        >
                          <NextjsImageBox>
                            <CardMedia
                              component="img"
                              src={item.signedUrl}
                              sx={{
                                position: "relative",
                                objectFit: "fill",
                                width: "100%",
                                height: "306px",
                              }}
                            />
                          </NextjsImageBox>
                        </Link>
                      </ImageCardBox>
                    </CardLinkBox>
                    <InfoCardBox>{formatDate(item.date)}</InfoCardBox>
                  </WrapCardBox>
                  <MenuButtonBox>
                    <Menu
                      iconColor="#AEB7C2"
                      iconTheme="Filled"
                      onDelete={onDelete} // id={files[index].id}
                      fileInfo={item}
                    />
                  </MenuButtonBox>
                </CardBox>
              </motion.div>
            </ImageListItemBox>
          ))}
        {itemData &&
          itemData.length === 0 &&
          itemDataisReady === false &&
          sampleImage.map((value, index) => (
            <ImageListItemBox key={index}>
              <CardBox>
                <WrapCardBox>
                  <IconCardBox>
                    <Skeleton variant="text" />
                  </IconCardBox>
                  <CardLinkBox>
                    <TitleCardBox>
                      <Skeleton variant="text" />
                    </TitleCardBox>
                    <ImageCardBox>
                      <NextjsImageBox>
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            width: "100%",
                            height: {
                              xs: "255px",
                              sm: "255px",
                              md: "255px",
                              lg: "255px",
                              xl: "306px",
                            },
                          }}
                        />
                      </NextjsImageBox>
                    </ImageCardBox>
                  </CardLinkBox>
                  <InfoCardBox>
                    <Skeleton variant="text" />
                  </InfoCardBox>
                </WrapCardBox>
              </CardBox>
            </ImageListItemBox>
          ))}
      </ImageCardMain>
      {itemDataisReady && itemData.length === 0 && srProgress === "ready" && (
        <EmptyFileUploadBox>
          <EmptyFileUploadContentBox>
            <SentimentDissatisfiedIcon
              sx={{ color: "#E9E9ED", width: "120px", height: "120px" }}
            />
            <EmptyFileUploadTextBox>
              업로드된 파일이 없습니다.
            </EmptyFileUploadTextBox>
          </EmptyFileUploadContentBox>
        </EmptyFileUploadBox>
      )}
    </ContainerBox>
  )
}
