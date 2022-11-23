import request2 from '../request_local'

export function setReview(requestBody) {
  return request2({
    url: '/reviews/create',
    method: 'POST',
    data: requestBody,
  })
}