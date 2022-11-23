import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { ConstructionOutlined } from "@mui/icons-material"

interface krTranslateProps {
  [index: string]: string
  workspace: string
  setting: string
}

// type krTranslate = typeof krTranslate[keyof typeof krTranslate]


interface PathArray {
  breadcrumb: string | string[] | undefined
  href: string
}

interface BreadCrumb extends Array<PathArray> { }

export default function Breadcrumb() {
  const router = useRouter()
  const [nextjsBreadcrumbs, setNextjsBreadcrumbs] = React.useState<BreadCrumb>(
    []
  )

  const krTranslate: krTranslateProps = {
    workspace: "워크스페이스",
    statistics: "사용량",
    setting: "설정",
  }

  React.useEffect(() => {
    if (router.isReady) {
      const linkPath = router.asPath.split("/")
      linkPath.shift()
      const pathArray = linkPath.map((path, i) => {
        return i === 0
          ? {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/"),
          }
          : {
            breadcrumb:
              router.query.id === undefined
                ? Object.values(router.query)[i - 1]
                : Object.values(router.query)[i],
            href: "/" + linkPath.slice(0, i + 1).join("/"),
          }
      })
      setNextjsBreadcrumbs(pathArray)
    }
  }, [router.asPath, router.isReady, router.query])

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {nextjsBreadcrumbs.map((item: any, index) => {
        const last = index === nextjsBreadcrumbs.length - 1
        return last ? (
          <Typography variant="body2" sx={{ color: "#C32632" }} key={index}>
            {krTranslate[item.breadcrumb] && krTranslate[item.breadcrumb]}
            {!krTranslate[item.breadcrumb] &&
              nextjsBreadcrumbs.length === 2 &&
              "프로젝트"}
            {!krTranslate[item.breadcrumb] &&
              nextjsBreadcrumbs.length === 3 &&
              item.breadcrumb}
          </Typography>
        ) : (
          <Link key={item.breadcrumb} href={item.href}>
            <a
              style={{
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#000000DE",
              }}
            >
              {krTranslate[item.breadcrumb] && krTranslate[item.breadcrumb]}
              {!krTranslate[item.breadcrumb] &&
                nextjsBreadcrumbs.length === 3 &&
                "프로젝트"}
            </a>
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
