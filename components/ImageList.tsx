export {}
// import Image from "next/image"
// import Link from "@/Link"
// import Box from "@mui/material/Box"
// import ImageListItem from "@mui/material/ImageListItem"
// import ImageListItemBar from "@mui/material/ImageListItemBar"
// import { motion } from "framer-motion"
// import Menu from "@components/common/Menu"
// import { useRouter } from "next/router"
// import Container from "@mui/material/Container"
// import CircularProgress from "@components/common/CircularProgress"
// import { MultipleFileUpload } from "@components/file/MultipleFileUpload"
// import { styled } from "@mui/material/styles"
// import React from "react"
// import { FileError } from "react-dropzone"
// import { fontSize } from "@mui/system"

// const ImageContainer = styled(Container)(() => ({
//   maxWidth: 1992,
// }))

// const ImageListItemBox = styled(ImageListItem)({
//   display: "inline-block",
//   marginTop: "36px",
//   padding: "0px 18px",
//   verticalAlign: "top",
//   boxSizing: "border-box",
// })

// const CardBox = styled(Box)({
//   overflow: "hidden",
//   position: "relative",
//   backgroundColor: "white",
//   borderRadius: "14px",
//   boxShadow: "4px 12px 30px 6px rgb(0 0 0 / 9%)",
//   width: "408px",
//   height: "530px",
// })

// const WrapCardBox = styled(Box)({
//   display: "block",
//   position: "relative",
//   padding: "25px 24px 0",
//   boxSizing: "border-box",
// })

// const IconCardBox = styled(Box)({
//   display: "block",
//   height: "36px",
//   marginTop: "-1px",
//   paddingRight: "20px",
// })

// const CardLinkBox = styled(Box)({
//   display: "block",
//   margin: "0 -24px",
//   cursor: "pointer",
// })

// const ImageCardBox = styled(Box)({
//   display: "block",
//   height: "306px",
//   marginTop: "71px",
// })

// const TitleCardBox = styled(Box)({
//   height: "80px",
//   fontSize: "30px",
//   fontWeight: "bold",
//   lineHeight: "40px",
//   overflow: "hidden",
//   marginTop: "13px",
//   padding: "0 24px",
// })

// const InfoCardBox = styled(Box)({
//   position: "absolute",
//   marginTop: "24px",
//   top: "156px",
//   height: "20px",
//   left: "0",
//   right: "84px",
//   paddingLeft: "24px",
//   fontWeight: "300",
//   fontSize: "14px",
//   color: "#4E5A68",
//   lineHeight: "20px",
//   overflow: "hidden",
// })

// interface Props {
//   width?: number
//   height?: number
//   itemData: Array<ItemData>
// }

// interface ItemData {
//   id: number
//   img: string
//   title: string
//   subtitle: string
// }

// export interface UploadableFile {
//   file: File
//   errors: FileError[]
//   url: string
// }

// type UploadContextType = {
//   files: UploadableFile[]
//   setFiles: React.Dispatch<React.SetStateAction<UploadableFile[]>>
// }

// const UploadContext = React.createContext<UploadContextType | UploadableFile[]>(
//   []
// )

// export default function ImageList(props: Props) {
//   const { width, height } = props

//   const router = useRouter()
//   const { project } = router.query

//   const [files, setFiles] = React.useState<UploadableFile[]>([])

//   const filesValue = React.useMemo(
//     () => ({ files, setFiles }),
//     [files, setFiles]
//   )

//   const itemData =
//     files.length && files[files.length - 1].url
//       ? files.map((data, index) => ({
//           id: index,
//           img: data.url,
//           title: "Breakfast",
//           subtitle: "Input: 640 x 425 px",
//         }))
//       : []

//   return (
//     <ImageContainer>
//       <Box
//         sx={{
//           width: {
//             lg: `calc(100% - 240px)`,
//             xl: `calc(100% - 240px)`,
//           },
//           height: "150px",
//           position: "relative",
//           left: { xs: "0px", sm: "0px", md: "0px", lg: "240px" },
//         }}
//       >
//         <UploadContext.Provider value={filesValue}>
//           <MultipleFileUpload />
//         </UploadContext.Provider>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           display: "grid",
//           flexGrow: 1,
//           flexDirection: "column",
//           width: {
//             lg: `calc(100% - 240px)`,
//             xl: `calc(100% - 240px)`,
//           },
//           height: {
//             xs: `calc(100% - 64px)`,
//             sm: `calc(100% - 64px)`,
//             md: `calc(100% - 64px)`,
//             lg: `calc(100% - 64px)`,
//             xl: `calc(100% - 64px)`,
//           },
//           gridTemplateColumns: {
//             xs: "repeat(1, 1fr)",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//             lg: "repeat(3, 1fr)",
//             xl: "repeat(4, 1fr)",
//           },

//           px: 2,
//           pb: 2,
//           gap: 0.5,
//           position: "relative",
//           left: { xs: "0px", sm: "0px", md: "0px", lg: "240px" },
//           // top: "64px",
//         }}
//       >
//         {itemData.map((item, index) => (
//           <ImageListItemBox key={index}>
//             <CardBox>
//               <WrapCardBox>
//                 <IconCardBox>
//                   <Menu iconColor="#AEB7C2" iconTheme="Filled" />
//                 </IconCardBox>
//                 <CardLinkBox>
//                   <Link href={`/workspace/${project}/${item.title}`}>
//                     <TitleCardBox>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     </TitleCardBox>
//                   </Link>
//                   <ImageCardBox>
//                     <Link href={`/workspace/${project}/${item.title}`}>
//                       <Image
//                         src={item.img}
//                         alt="/favicon.png"
//                         width={408}
//                         height={306}
//                         // width="100%"
//                         // height="100%"
//                         // layout="responsive"
//                         loading="lazy"
//                       />
//                     </Link>
//                   </ImageCardBox>
//                 </CardLinkBox>
//                 <InfoCardBox>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                 </InfoCardBox>
//               </WrapCardBox>
//             </CardBox>
//           </ImageListItemBox>

//           // <ImageListItem
//           //   key={item.id}
//           //   sx={{
//           //     display: "grid",
//           //     flexGrow: 1,
//           //     flexDirection: "column",
//           //     width: "100%",
//           //   }}
//           // >
//           //   {/* <motion.div whileHover={{ scale: 0.99 }}>
//           //     <Link href={`/workspace/${project}/${item.title}`}>
//           //       <a>
//           //         <Image
//           //           src={item.img}
//           //           alt="/favicon.png"
//           //           width={415}
//           //           height={272}
//           //           // width="100%"
//           //           // height="100%"
//           //           // layout="responsive"
//           //           loading="lazy"
//           //         />
//           //       </a>
//           //     </Link>
//           //     <ImageListItemBar
//           //       sx={{
//           //         width: 80,
//           //         background: "rgba(0,0,0,0)",
//           //       }}
//           //       title={<CircularProgress />}
//           //       position="top"
//           //       actionPosition="left"
//           //     />
//           //     <ImageListItemBar
//           //       title={item.title}
//           //       subtitle={item.subtitle}
//           //       actionIcon={<Menu iconColor="white" />}
//           //     />
//           //   </motion.div> */}
//           //   )
//           // </ImageListItem>
//         ))}
//       </Box>
//     </ImageContainer>
//   )
// }

// // const itemData = [
// //   {
// //     id:1,
// //     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=415&h=293&fit=crop&auto=format",
// //     title: "Breakfast",
// //     subtitle: "Input: 640 x 425 px",
// //   }
// // ]

// ImageList.defaultProps = { width: 415, height: 272 }

// export { UploadContext }
