import request from "../request_server7"

// select upload file
export function getStatisticsList(requestBody) {
  return request({
    url: `/statistics/select`,
    method: "POST",
    data: requestBody
  })
}