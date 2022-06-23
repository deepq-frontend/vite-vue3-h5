/* eslint-disable */
type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string
/**
 * 描述: undefined
 */
export interface AccessToken {
  
    /**
     * 描述: 访问令牌 | 类型: string | format: undefined
     */
    accessToken?: string;
  

    /**
     * 描述: 重定向URL | 类型: string | format: undefined
     */
    redirectUrl?: string;
  
}


/**
 * 描述: undefined
 */
export interface RespDataAccessToken {
  
    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    code?: int32;
  

    /**
     * 描述: undefined | 类型: undefined | format: undefined
      */
    data?: AccessToken;
        

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    msg?: string;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    serverTime?: string;
  
}


/**
 * 描述: undefined
 */
export interface RespDataSsoUrl {
  
    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    code?: int32;
  

    /**
     * 描述: undefined | 类型: undefined | format: undefined
      */
    data?: SsoUrl;
        

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    msg?: string;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    serverTime?: string;
  
}


/**
 * 描述: undefined
 */
export interface RespDataSsoUser {
  
    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    code?: int32;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    msg?: string;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    serverTime?: string;
  
}


/**
 * 描述: undefined
 */
export interface SsoUrl {
  
    /**
     * 描述: 获取认证码URL | 类型: string | format: undefined
     */
    authUrl?: string;
  

    /**
     * 描述: sso修改密码URL | 类型: string | format: undefined
     */
    changePassUrl?: string;
  

    /**
     * 描述: sso登出URL | 类型: string | format: undefined
     */
    logoutUrl?: string;
  

    /**
     * 描述: sso密码重置URL | 类型: string | format: undefined
     */
    resetPassUrl?: string;
  
}


  // 自动生成的未定义接口入参
  export interface getAccessTokenUsingGETParamReq {
    
    // 参数注释 授权码
    code?: string;
    
  }
  

  // 自动生成的未定义接口入参
  export interface getAccessTokenUsingOPTIONSParamReq {
    
    // 参数注释 授权码
    code?: string;
    
  }
  