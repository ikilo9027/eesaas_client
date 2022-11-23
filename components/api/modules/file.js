import request from "../request_server7"
// import request2 from "../request_local"

// select upload file
export function getUploadFileList(params) {
  return request({
    url: `/workspaceboards/user/${params.userId}/${params.workspaceTitle}`,
    method: "GET",
  })
}

// upload file detail
export function getDetailFile(params) {
  return request({
    url: `/workspaceboards/info/${params.fileId}`,
    method: "GET",
  })
}

// delete upload file
export function deleteFile(params) {
  return request({
    url: `/workspaceboards/delete/${params.fileId}`,
    method: "DELETE",
  })
}

// file sr start
export function setSrFile(requestBody, type) {
  return request({
    url: `/sroption/Sr/${type}/jobs`,
    method: "POST",
    data: requestBody,
  })
}

// file sr history select
export function getSrHistroy(params) {
  return request({
    url: `/sroption/info/${params.fileId}`,
    method: "GET",
  })
}

// file sr history delete
export function deleteSrHistroy(params) {
  return request({
    url: `/sroption/delete/${params.fileId}`,
    method: "DELETE",
  })
}

export function getProgressState(params) {
  return request({
    url: `/sroption/status/${params.srId}`,
    method: "GET",
  })
}

export function getSrBeforeAfter(params) {
  if (params.type === "sr") {
    return request({
      url: `/sroption/compare/${params.before}/${params.after}`,
      method: "GET",
    })
  } else {
    return request({
      url: `/sroption/compare/0/${params.after}`,
      method: "GET",
    })
  }
}

export function getSrVideoBeforeAfter(params) {
  if (params.type === "sr") {
    return request({
      url: `/sroption/Vcompare/${params.before}/${params.after}`,
      method: "GET",
    })
  } else {
    return request({
      url: `/sroption/Vcompare/0/${params.after}`,
      method: "GET",
    })
  }
}

export function getSegmentationList(requestBody) {
  return request({
    url: `/workspaceboards/segmentation`,
    method: "POST",
    data: requestBody
  })
}
