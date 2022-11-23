import request from "../request_server7"

// 워크 스페이스 조회
export function getWorkspace(params) {
  return request({
    url: `/workspace/user/${params.userId}`,
    method: "GET",
  })
}

// 워크 스페이스 생성
export function setWorkspace(requestBody) {
  return request({
    url: "/workspace/add",
    method: "POST",
    data: requestBody,
  })
}

// 워크 스페이스 삭제
export function deleteWorkspace(params) {
  return request({
    url: `/workspace/delete/${params.workspaceId}`,
    method: "DELETE",
  })
}

// 워크 스페이스 이름변경
export function renameWorkspace(params) {
  return request({
    url: `/workspace/rename/${params.workspaceId}/${params.workspaceName}`,
    method: "GET",
  })
}
