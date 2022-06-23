/* eslint-disable */
  import {AccessToken, RespDataAccessToken, RespDataSsoUrl, RespDataSsoUser, SsoUrl, getAccessTokenUsingGETParamReq, getAccessTokenUsingOPTIONSParamReq} from "../types/sso-client-api";
  import request from "@/utils/request";
  type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string

    // 单点登录地址
    export const useApiFmArticleSsoLogoutUrlByGet = () =>
      request<RespDataSsoUrl>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/sso/logoutUrl`,
        data: {},
        params: {}
      })
  

    // 单点登录地址
    export const useApiFmArticleSsoLogoutUrlByPost = () =>
      request<RespDataSsoUrl>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/sso/logoutUrl`,
        data: {},
        params: {}
      })
  

    // 当前用户信息
    export const useApiFmArticleSsoMeByGet = () =>
      request<RespDataSsoUser>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/sso/me`,
        data: {},
        params: {}
      })
  

    // 单点登录地址
    export const useApiFmArticleSsoSsoUrlByGet = () =>
      request<RespDataSsoUrl>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/sso/ssoUrl`,
        data: {},
        params: {}
      })
  

    // 单点登录地址
    export const useApiFmArticleSsoSsoUrlByPost = () =>
      request<RespDataSsoUrl>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/sso/ssoUrl`,
        data: {},
        params: {}
      })
  

    // 获取访问令牌
    export const useApiFmArticleSsoTokenByGet = (params: getAccessTokenUsingGETParamReq) =>
      request<RespDataAccessToken>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/sso/token`,
        data: {},
        params: params
      })
  

    // 获取访问令牌
    export const useApiFmArticleSsoTokenByOptions = (params: getAccessTokenUsingOPTIONSParamReq) =>
      request<RespDataAccessToken>({
        method: 'options',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/sso/token`,
        data: {},
        params: params
      })
  