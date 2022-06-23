/* eslint-disable */
type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string
/**
 * 描述: 背景音乐
 */
export interface AudioDTO {
  
    /**
     * 描述: 音量 | 类型: number | format: double
     */
    gain?: double;
  

    /**
     * 描述: 媒资 | 类型: string | format: undefined
     */
    media: string;
  
}


/**
 * 描述: 栏目信息
 */
export interface IceMaterialInfoDTO {
  
    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    autoTags?: string;
  

    /**
     * 描述: 业务类型 | 类型: string | format: undefined
     */
    businessType?: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 素材描述 | 类型: string | format: undefined
     */
    description?: string;
  

    /**
     * 描述: id,更新时* | 类型: integer | format: int64
     */
    id?: int64;
  

    /**
     * 描述: 素材/媒资ID | 类型: string | format: undefined
     */
    mediaId?: string;
  

    /**
     * 描述: 素材类型 | 类型: string | format: undefined
      */
    mediaType: ('audio' | 'image' | 'text' | 'video');
        

    /**
     * 描述: 素材地址 | 类型: string | format: undefined
     */
    mediaUrl: string;
  

    /**
     * 描述: undefined | 类型: string | format: undefined
     */
    showTags?: string;
  

    /**
     * 描述: 素材状态 | 类型: string | format: undefined
      */
    status: ('available' | 'fail' | 'init' | 'process' | 'success');
        

    /**
     * 描述: 标签 | 类型: string | format: undefined
     */
    tags?: string;
  

    /**
     * 描述: 素材标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 媒资信息
 */
export interface IceMaterialInfoVO {
  
    /**
     * 描述: 业务类型 | 类型: string | format: undefined
     */
    businessType?: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 素材描述 | 类型: string | format: undefined
     */
    description?: string;
  

    /**
     * 描述: id,更新时* | 类型: integer | format: int64
     */
    id?: int64;
  

    /**
     * 描述: 素材/媒资ID | 类型: string | format: undefined
     */
    mediaId?: string;
  

    /**
     * 描述: 素材类型 | 类型: string | format: undefined
      */
    mediaType?: ('audio' | 'image' | 'text' | 'video');
        

    /**
     * 描述: 素材地址 | 类型: string | format: undefined
     */
    mediaUrl: string;
  

    /**
     * 描述: 素材状态 | 类型: string | format: undefined
      */
    status: ('available' | 'fail' | 'init' | 'process' | 'success');
        

    /**
     * 描述: 标签 | 类型: string | format: undefined
     */
    tags?: string;
  

    /**
     * 描述: 素材标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: ICE-视频成片列表查询
 */
export interface IceVideoResultListRequest {
  
    /**
     * 描述: 结束日期 | 类型: string | format: date-time
     */
    endTime?: datetime;
  

    /**
     * 描述: 项目名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 项目ID | 类型: string | format: undefined
     */
    proProjectId?: string;
  

    /**
     * 描述: 开始日期 | 类型: string | format: date-time
     */
    startTime?: datetime;
  
}


/**
 * 描述: 非结构运营列表
 */
export interface IceVideoResultListVO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: id,更新时* | 类型: integer | format: int64
     */
    id?: int64;
  

    /**
     * 描述: 视频地址 | 类型: string | format: undefined
     */
    mediaUrl?: string;
  

    /**
     * 描述: 视频名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 生成日期 | 类型: string | format: date-time
     */
    resultDate?: datetime;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 图片
 */
export interface ImageDTO {
  
    /**
     * 描述: 高 | 类型: number | format: double
     */
    height?: double;
  

    /**
     * 描述: 媒资 | 类型: string | format: undefined
     */
    media: string;
  

    /**
     * 描述: 开始位置(时间轴) | 类型: number | format: double
     */
    timelineIn?: double;
  

    /**
     * 描述: 结束位置(时间轴) | 类型: number | format: double
     */
    timelineOut?: double;
  

    /**
     * 描述: 宽 | 类型: number | format: double
     */
    width?: double;
  

    /**
     * 描述: 位置X | 类型: number | format: double
     */
    x?: double;
  

    /**
     * 描述: 位置Y | 类型: number | format: double
     */
    y?: double;
  
}


/**
 * 描述: 媒资查询
 */
export interface MaterialRequest {
  
    /**
     * 描述: 业务类型 | 类型: string | format: undefined
     */
    businessType: string;
  
}


/**
 * 描述: 非结构视频详情
 */
export interface OpdUnstructuredOperationDetailDTO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: id,更新时* | 类型: integer | format: int64
     */
    id?: int64;
  

    /**
     * 描述: 字幕是否打开 | 类型: boolean | format: undefined
     */
    openSubtitle?: boolean;
  

    /**
     * 描述: 运营参数 | 类型: undefined | format: undefined
      */
    operationData?: TextToVideoOperationDataDTO;
        

    /**
     * 描述: 片段 | 类型: array | format: undefined
     */
    part: UnstructuredVideoPartDTO[];
        

    /**
     * 描述: 视频标题 | 类型: string | format: undefined
     */
    title: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  

    /**
     * 描述: 更新人 | 类型: string | format: undefined
     */
    updater?: string;
  
}


/**
 * 描述: 非结构运营列表查询
 */
export interface OpdUnstructuredOperationListRequest {
  
    /**
     * 描述: 结束时间 | 类型: string | format: date-time
     */
    endTime?: datetime;
  

    /**
     * 描述: 开始时间 | 类型: string | format: date-time
     */
    startTime?: datetime;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  
}


/**
 * 描述: 非结构运营列表
 */
export interface OpdUnstructuredOptionListVO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: id,更新时* | 类型: integer | format: int64
     */
    id?: int64;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


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
 * 描述: 分页请求信息
 */
export interface PageRequestIceVideoResultListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: IceVideoResultListRequest;
        

    /**
     * 描述: 页码，默认1 | 类型: integer | format: int32
     */
    pageNo: int32;
  

    /**
     * 描述: 页最大记录数,默认10 | 类型: integer | format: int32
     */
    pageSize: int32;
  
}


/**
 * 描述: 分页请求信息
 */
export interface PageRequestOpdUnstructuredOperationListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: OpdUnstructuredOperationListRequest;
        

    /**
     * 描述: 页码，默认1 | 类型: integer | format: int32
     */
    pageNo: int32;
  

    /**
     * 描述: 页最大记录数,默认10 | 类型: integer | format: int32
     */
    pageSize: int32;
  
}


/**
 * 描述: 推荐素材
 */
export interface RecommendMediaDTO {
  
    /**
     * 描述: 图片 | 类型: array | format: undefined
     */
    img?: string[];
        

    /**
     * 描述: 关键字 | 类型: string | format: undefined
     */
    keyWord?: string;
  
}


/**
 * 描述: undefined
 */
export interface ResultIceMaterialInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: IceMaterialInfoVO;
        
}


/**
 * 描述: undefined
 */
export interface ResultListIceMaterialInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: IceMaterialInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListIceVideoResultListVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: IceVideoResultListVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListOpdUnstructuredOptionListVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: OpdUnstructuredOptionListVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListRecommendMediaDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: RecommendMediaDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultOpdUnstructuredOperationDetailDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: OpdUnstructuredOperationDetailDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultUnstructuredVideoPartDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: UnstructuredVideoPartDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultVoid {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        
}


/**
 * 描述: undefined
 */
export interface ResultLong {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: integer | format: int64
     */
    result: int64;
  
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
export interface RIceMaterialInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultIceMaterialInfoVO;
        

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
export interface RListIceMaterialInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListIceMaterialInfoVO;
        

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
export interface RListIceVideoResultListVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListIceVideoResultListVO;
        

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
export interface RListOpdUnstructuredOptionListVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListOpdUnstructuredOptionListVO;
        

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
export interface RListRecommendMediaDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListRecommendMediaDTO;
        

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
export interface ROpdUnstructuredOperationDetailDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultOpdUnstructuredOperationDetailDTO;
        

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
export interface RUnstructuredVideoPartDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultUnstructuredVideoPartDTO;
        

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
export interface RVoid {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultVoid;
        

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
export interface RLong {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultLong;
        

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
 * 描述: 字幕
 */
export interface SubtitleDTO {
  
    /**
     * 描述: 样式 | 类型: string | format: undefined
     */
    align?: string;
  

    /**
     * 描述: 样式 | 类型: string | format: undefined
     */
    alignment?: string;
  

    /**
     * 描述: 内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 字体 | 类型: string | format: undefined
     */
    font?: string;
  

    /**
     * 描述: 字幕颜色，十六进制 | 类型: string | format: undefined
     */
    fontColor?: string;
  

    /**
     * 描述: 字体大小 | 类型: integer | format: int32
     */
    fontSize?: int32;
  

    /**
     * 描述: 开始位置(时间轴) | 类型: number | format: double
     */
    timelineIn?: double;
  

    /**
     * 描述: 结束位置(时间轴) | 类型: number | format: double
     */
    timelineOut?: double;
  

    /**
     * 描述: 字幕宽度 | 类型: number | format: double
     */
    width?: double;
  

    /**
     * 描述: 位置X | 类型: number | format: double
     */
    x?: double;
  

    /**
     * 描述: 位置Y | 类型: number | format: double
     */
    y?: double;
  
}


/**
 * 描述: 文本转视频运营数据
 */
export interface TextToVideoOperationDataDTO {
  
    /**
     * 描述: 音频 | 类型: undefined | format: undefined
      */
    audio?: AudioDTO;
        

    /**
     * 描述: 背景图 | 类型: string | format: undefined
     */
    backGroundImg?: string;
  

    /**
     * 描述: 视频基础高 | 类型: integer | format: int32
     */
    baseHeight?: int32;
  

    /**
     * 描述: 视频基础宽 | 类型: integer | format: int32
     */
    baseWidth?: int32;
  

    /**
     * 描述: 文本 | 类型: string | format: undefined
     */
    content: string;
  

    /**
     * 描述: 图片 | 类型: array | format: undefined
     */
    images?: ImageDTO[];
        

    /**
     * 描述: 字幕 | 类型: array | format: undefined
     */
    subtitles?: SubtitleDTO[];
        
}


/**
 * 描述: 非结构增加片段请求体
 */
export interface UnstructuredPartAddRequest {
  
    /**
     * 描述: 片段内容 | 类型: string | format: undefined
     */
    content: string;
  

    /**
     * 描述: 非结构运营id | 类型: integer | format: int64
     */
    id: int64;
  
}


/**
 * 描述: 非结构视频片段
 */
export interface UnstructuredVideoPartDTO {
  
    /**
     * 描述: 运营参数 | 类型: undefined | format: undefined
      */
    operationData?: TextToVideoOperationDataDTO;
        

    /**
     * 描述: 推荐素材 | 类型: array | format: undefined
     */
    recommendMedia?: RecommendMediaDTO[];
        

    /**
     * 描述: 顺序 | 类型: integer | format: int32
     */
    sort: int32;
  
}


  // 自动生成的未定义接口入参
  export interface uploadImgApiUsingPOSTParamReq {
    
    // 参数注释 tags
    tags: string;
    
  }
  

  // 自动生成的未定义接口入参
  export interface txtSearchImagesUsingGETParamReq {
    
    // 参数注释 word
    word: string;
    
  }
  