import request from '../request_server7'
import request_google from '../request_google'

export function signup(requestBody) {
  return request({
    url: '/newuser/signup',
    method: 'POST',
    data: requestBody
  })
}

export function signin(requestBody) {
  return request({
    url: '/newuser/signin',
    method: 'POST',
    data: requestBody
  })
}

export function google_signin(access_token) {
  return request_google({
    url: '/oauth2/v3/userinfo',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export function sendAuthCode(requestBody) {
  return request({
    url: '/newuser/sendemail',
    method: 'POST',
    data: requestBody
  })
}

export function checkEmail(requestBody) {
  return request({
    url: `/newuser/ckeckemail`,
    method: 'POST',
    data: requestBody
  })
}

export function checkAuthCode(requestBody) {
  return request({
    url: `/newuser/auth`,
    method: 'POST',
    data: requestBody
  })
}

export function resetPassword(requestBody) {
  return request({
    url: `/newuser/resetpw`,
    method: 'POST',
    data: requestBody
  })
}