/* eslint-disable */
type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string
/**
 * 描述: undefined
 */
export interface Page {
  
    /**
     * 描述: 页总数 | 类型: integer | format: int32
     */
    pageCount?: int32;
  

    /**
     * 描述: 页码 | 类型: integer | format: int32
     */
    pageNo?: int32;
  

    /**
     * 描述: 页大小 | 类型: integer | format: int32
     */
    pageSize?: int32;
  

    /**
     * 描述: 总条数 | 类型: integer | format: int32
     */
    totalCount?: int32;
  
}


/**
 * 描述: undefined
 */
export interface ResultVideoTaskDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: VideoTaskDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultString {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: string | format: undefined
     */
    result: string;
  
}


/**
 * 描述: 统一返回对象
 */
export interface RVideoTaskDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultVideoTaskDTO;
        

    /**
     * 描述: undefined | 类型: boolean | format: undefined
     */
    fail?: boolean;
  

    /**
     * 描述: 描述 | 类型: string | format: undefined
     */
    msg?: string;
  

    /**
     * 描述: 标识 | 类型: boolean | format: undefined
     */
    success: boolean;
  
}


/**
 * 描述: 统一返回对象
 */
export interface RString {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultString;
        

    /**
     * 描述: undefined | 类型: boolean | format: undefined
     */
    fail?: boolean;
  

    /**
     * 描述: 描述 | 类型: string | format: undefined
     */
    msg?: string;
  

    /**
     * 描述: 标识 | 类型: boolean | format: undefined
     */
    success: boolean;
  
}


/**
 * 描述: TTS语音
 */
export interface SyncVideoBodyVO {
  
    /**
     * 描述: 开启字幕功能 | 类型: boolean | format: undefined
     */
    enableSubtitle?: boolean;
  

    /**
     * 描述: 语调(-500~500) | 类型: integer | format: int32
     */
    pitchRate?: int32;
  

    /**
     * 描述: 语速(-500~500) | 类型: integer | format: int32
     */
    speechRate?: int32;
  

    /**
     * 描述: 语音文本 | 类型: string | format: undefined
     */
    text: string;
  

    /**
     * 描述: 发音人 | 类型: string | format: undefined
     */
    voice?: string;
  
}


/**
 * 描述: undefined
 */
export interface VideoBodyVO {
  
    /**
     * 描述: undefined | 类型: boolean | format: undefined
     */
    enableSubtitle?: boolean;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    markKey?: string;
  

    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    orderGroup?: int32;
  

    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    pitchRate?: int32;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    projectId?: string;
  

    /**
     * 描述: undefined | 类型: integer | format: int32
     */
    speechRate?: int32;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    text?: string;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    voice?: string;
  
}


/**
 * 描述: 语音任务
 */
export interface VideoTaskDTO {
  
    /**
     * 描述: 文本 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 语调 | 类型: integer | format: int32
     */
    pitchRate?: int32;
  

    /**
     * 描述: 语速 | 类型: integer | format: int32
     */
    speechRate?: int32;
  

    /**
     * 描述: 字幕标注 | 类型: array | format: undefined
     */
    subtitle?: string[];
        

    /**
     * 描述: 语音链接 | 类型: string | format: undefined
     */
    videoUrl?: string;
  

    /**
     * 描述: 发音人 | 类型: string | format: undefined
     */
    voice?: string;
  
}
