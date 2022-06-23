/* eslint-disable */
type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string
/**
 * 描述: 文章模板信息
 */
export interface ArtTemplateInfoDTO {
  
    /**
     * 描述: 示例图Url | 类型: string | format: undefined
     */
    exampleUrl: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 模板名称 | 类型: string | format: undefined
     */
    name: string;
  

    /**
     * 描述: 路由 | 类型: string | format: undefined
     */
    route: string;
  
}


/**
 * 描述: 模板列表查询
 */
export interface ArtTemplateInfoListRequest {
  
    /**
     * 描述: 栏目类型 | 类型: string | format: undefined
      */
    type?: ('BANK' | 'SECURITIES_TRADER');
        
}


/**
 * 描述: 文章模板
 */
export interface ArtTemplateInfoVO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 示例图 | 类型: string | format: undefined
     */
    exampleUrl?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 模板名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 路由 | 类型: string | format: undefined
     */
    route?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 文章评论列表查询
 */
export interface ArticleCommentListQuery {
  
    /**
     * 描述: 文章id | 类型: string | format: undefined
     */
    articleId: string;
  

    /**
     * 描述: 评论类型 | 类型: string | format: undefined
     */
    commentType?: string;
  
}


/**
 * 描述: 文章Content更新
 */
export interface ArticleContentUpdateDTO {
  
    /**
     * 描述: 正文内容 | 类型: string | format: undefined
     */
    content: string;
  

    /**
     * 描述: 文章Id | 类型: string | format: undefined
     */
    id: string;
  
}


/**
 * 描述: 审核统计
 */
export interface AuditCountDTO {
  
    /**
     * 描述: 审核统计 | 类型: integer | format: int32
     */
    auditCount?: int32;
  

    /**
     * 描述: 驳回统计 | 类型: integer | format: int32
     */
    rejectCount?: int32;
  

    /**
     * 描述: 校对统计 | 类型: integer | format: int32
     */
    reviewCount?: int32;
  
}


/**
 * 描述: 屏蔽词新增
 */
export interface BlockWordsSaveDTO {
  
    /**
     * 描述: 新词ID | 类型: array | format: undefined
     */
    newsWordIds: string[];
        

    /**
     * 描述: 屏蔽词 | 类型: array | format: undefined
     */
    words: string[];
        
}


/**
 * 描述: 栏目-客户关系
 */
export interface ColClientListDTO {
  
    /**
     * 描述: 客户信息 | 类型: array | format: undefined
     */
    clientList?: FmClientInfoDTO[];
        

    /**
     * 描述: 栏目ids | 类型: array | format: undefined
     */
    columnIds?: string[];
        

    /**
     * 描述: 栏目名称s | 类型: array | format: undefined
     */
    columnNames?: string[];
        
}


/**
 * 描述: 栏目信息
 */
export interface ColColumnInfoDTO {
  
    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 栏目名称 | 类型: string | format: undefined
     */
    name: string;
  

    /**
     * 描述: 栏目类型 | 类型: array | format: undefined
     */
    types: ('BANK' | 'SECURITIES_TRADER')[];
        
}


/**
 * 描述: 栏目信息查询
 */
export interface ColColumnInfoRequest {
  
    /**
     * 描述: 栏目名称 | 类型: string | format: undefined
     */
    names?: string;
  
}


/**
 * 描述: 文章列表
 */
export interface ColColumnInfoVO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 栏目名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 栏目类型 | 类型: string | format: undefined
     */
    types?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 栏目资讯映射
 */
export interface ColNewsMapDTO {
  
    /**
     * 描述: 栏目id | 类型: string | format: undefined
     */
    columnId: string;
  

    /**
     * 描述: 资讯类型 | 类型: array | format: undefined
     */
    newsTypes: ('news' | 'template_news')[];
        
}


/**
 * 描述: 评论状态
 */
export interface CommentStatusDTO {
  
    /**
     * 描述: 评论id | 类型: string | format: undefined
     */
    id: string;
  

    /**
     * 描述: 评论状态 | 类型: boolean | format: undefined
     */
    status: boolean;
  
}


/**
 * 描述: 枚举信息
 */
export interface EnumDTO {
  
    /**
     * 描述: 定义code | 类型: integer | format: int32
     */
    code?: int32;
  

    /**
     * 描述: 描述 | 类型: string | format: undefined
     */
    desc?: string;
  

    /**
     * 描述: 名称 | 类型: string | format: undefined
     */
    name?: string;
  
}


/**
 * 描述: 文章审核/校对列表查询
 */
export interface FmArticleAuditListQuery {
  
    /**
     * 描述: 栏目id | 类型: array | format: undefined
     */
    columnIds?: string[];
        

    /**
     * 描述: 结束时间 | 类型: string | format: date-time
     */
    endTime?: datetime;
  

    /**
     * 描述: 开始时间 | 类型: string | format: date-time
     */
    startTime?: datetime;
  

    /**
     * 描述: 状态 | 类型: string | format: undefined
      */
    status: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        
}


/**
 * 描述: 文章评论-修改
 */
export interface FmArticleCommentDetailDTO {
  
    /**
     * 描述: 评论类型（审核：AUDIT、校对：REVIEW） | 类型: string | format: undefined
     */
    commentType: string;
  

    /**
     * 描述: 内容 | 类型: string | format: undefined
     */
    content: string;
  

    /**
     * 描述: 元素唯一标识 | 类型: array | format: undefined
     */
    elementIds: string[];
        

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 字段类型 | 类型: string | format: undefined
     */
    newsFieldType: string;
  
}


/**
 * 描述: 文章评论列表
 */
export interface FmArticleCommentListVO {
  
    /**
     * 描述: 当前评论 | 类型: array | format: undefined
     */
    currentList?: FmArticleCommentVO[];
        

    /**
     * 描述: 历史评论 | 类型: array | format: undefined
     */
    historyList?: FmArticleCommentVO[];
        
}


/**
 * 描述: 文章评论-新增
 */
export interface FmArticleCommentSaveDTO {
  
    /**
     * 描述: 文章id | 类型: string | format: undefined
     */
    articleId: string;
  

    /**
     * 描述: 评论类型（审核：AUDIT、校对：REVIEW） | 类型: string | format: undefined
     */
    commentType: string;
  

    /**
     * 描述: 内容 | 类型: string | format: undefined
     */
    content: string;
  

    /**
     * 描述: 元素唯一标识 | 类型: array | format: undefined
     */
    elementIds: string[];
        

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 字段类型 | 类型: string | format: undefined
     */
    newsFieldType: string;
  
}


/**
 * 描述: 文章评论信息
 */
export interface FmArticleCommentVO {
  
    /**
     * 描述: 评论时间 | 类型: string | format: date-time
     */
    commentTime?: datetime;
  

    /**
     * 描述: 评论类型 | 类型: string | format: undefined
     */
    commentType?: string;
  

    /**
     * 描述: 评论人 | 类型: string | format: undefined
     */
    commentator?: string;
  

    /**
     * 描述: 内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 元素唯一标识 | 类型: array | format: undefined
     */
    elementIds?: string[];
        

    /**
     * 描述: id | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 字段类型 | 类型: string | format: undefined
     */
    newsFieldType?: string;
  

    /**
     * 描述: 状态 | 类型: boolean | format: undefined
     */
    status?: boolean;
  
}


/**
 * 描述: 文章信息
 */
export interface FmArticleInfoDTO {
  
    /**
     * 描述: 状态 | 类型: string | format: undefined
      */
    auditStatus: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        

    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 栏目id | 类型: array | format: undefined
     */
    columnIds: string[];
        

    /**
     * 描述: 正文内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 扩展字段 | 类型: object | format: undefined
      */
    extData?: unknown;
        

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 下发客户 | 类型: array | format: undefined
     */
    pushClients?: string[];
        

    /**
     * 描述: 模板id,模板文章* | 类型: string | format: undefined
     */
    templateId?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title: string;
  

    /**
     * 描述: 文章类型 | 类型: string | format: undefined
      */
    type: ('news' | 'template_news');
        
}


/**
 * 描述: 文章详情
 */
export interface FmArticleInfoDetailVO {
  
    /**
     * 描述: 状态 | 类型: string | format: undefined
      */
    auditStatus?: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        

    /**
     * 描述: 审核人 | 类型: string | format: undefined
     */
    auditor?: string;
  

    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 栏目id | 类型: array | format: undefined
     */
    columnIds?: string[];
        

    /**
     * 描述: 正文内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: 扩展字段 | 类型: object | format: undefined
      */
    extData?: unknown;
        

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 发布时间 | 类型: string | format: date-time
     */
    publishTime?: datetime;
  

    /**
     * 描述: 下发客户ids | 类型: array | format: undefined
     */
    pushClients?: string[];
        

    /**
     * 描述: 下发时间 | 类型: string | format: date-time
     */
    pushTime?: datetime;
  

    /**
     * 描述: 推送类型 | 类型: string | format: undefined
      */
    pushType?: ('CREATE' | 'DEFAULT' | 'DELETE' | 'UPDATE');
        

    /**
     * 描述: 模板id | 类型: string | format: undefined
     */
    templateId?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 文章类型 | 类型: string | format: undefined
      */
    type?: ('news' | 'template_news');
        

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
 * 描述: 文章信息
 */
export interface FmArticleInfoListVO {
  
    /**
     * 描述: 审核状态 | 类型: string | format: undefined
      */
    auditStatus?: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        

    /**
     * 描述: 审核时间 | 类型: string | format: date-time
     */
    auditTime?: datetime;
  

    /**
     * 描述: 审核人 | 类型: string | format: undefined
     */
    auditor?: string;
  

    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 栏目名称 | 类型: string | format: undefined
     */
    columnNames?: string;
  

    /**
     * 描述: 正文内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 复审时间 | 类型: string | format: date-time
     */
    reviewTime?: datetime;
  

    /**
     * 描述: 复审人 | 类型: string | format: undefined
     */
    reviewer?: string;
  

    /**
     * 描述: 状态描述 | 类型: string | format: undefined
     */
    statusDesc?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  

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
 * 描述: 文章列表查询
 */
export interface FmArticleListQuery {
  
    /**
     * 描述: 栏目id | 类型: array | format: undefined
     */
    columnIds?: string[];
        

    /**
     * 描述: 创建结束时间 | 类型: string | format: date-time
     */
    createEndTime?: datetime;
  

    /**
     * 描述: 创建开始时间 | 类型: string | format: date-time
     */
    createStartTime?: datetime;
  

    /**
     * 描述: 创建人 | 类型: string | format: undefined
     */
    creator?: string;
  

    /**
     * 描述: 结束时间 | 类型: string | format: date-time
     */
    endTime?: datetime;
  

    /**
     * 描述: 关键人 | 类型: string | format: undefined
     */
    keyPerson?: string;
  

    /**
     * 描述: 关键词 | 类型: string | format: undefined
     */
    keyWord?: string;
  

    /**
     * 描述: 开始时间 | 类型: string | format: date-time
     */
    startTime?: datetime;
  

    /**
     * 描述: 状态 | 类型: string | format: undefined
      */
    status?: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        

    /**
     * 描述: 修改结束时间 | 类型: string | format: date-time
     */
    updateEndTime?: datetime;
  

    /**
     * 描述: 修改开始时间 | 类型: string | format: date-time
     */
    updateStartTime?: datetime;
  

    /**
     * 描述: 修改人 | 类型: string | format: undefined
     */
    updater?: string;
  
}


/**
 * 描述: 客户信息
 */
export interface FmClientInfoDTO {
  
    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 客户logoUrl深色系 | 类型: string | format: undefined
     */
    logoDarkUrl: string;
  

    /**
     * 描述: 客户logoUrl浅色系 | 类型: string | format: undefined
     */
    logoLightUrl: string;
  

    /**
     * 描述: 客户名称 | 类型: string | format: undefined
     */
    name: string;
  

    /**
     * 描述: 项目图片Url | 类型: string | format: undefined
     */
    projectImgUrl?: string;
  

    /**
     * 描述: 项目名称 | 类型: string | format: undefined
     */
    projectName?: string;
  

    /**
     * 描述: 客户二维码 | 类型: string | format: undefined
     */
    qrCodeUrl: string;
  

    /**
     * 描述: 口号 | 类型: string | format: undefined
     */
    slogan?: string;
  

    /**
     * 描述: 订阅信息 | 类型: array | format: undefined
     */
    subscribes: ColNewsMapDTO[];
        

    /**
     * 描述: 投资风险提示文案 | 类型: string | format: undefined
     */
    suffix: string;
  
}


/**
 * 描述: 客户列表查询
 */
export interface FmClientInfoListRequest {
  
    /**
     * 描述: 客户名称 | 类型: string | format: undefined
     */
    name?: string;
  
}


/**
 * 描述: 客户信息
 */
export interface FmClientInfoVO {
  
    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 客户logoUrl深色系 | 类型: string | format: undefined
     */
    logoDarkUrl?: string;
  

    /**
     * 描述: 客户logoUrl浅色系 | 类型: string | format: undefined
     */
    logoLightUrl?: string;
  

    /**
     * 描述: 客户名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 项目图片Url | 类型: string | format: undefined
     */
    projectImgUrl?: string;
  

    /**
     * 描述: 项目名称 | 类型: string | format: undefined
     */
    projectName?: string;
  

    /**
     * 描述: 客户二维码 | 类型: string | format: undefined
     */
    qrCodeUrl?: string;
  

    /**
     * 描述: 口号 | 类型: string | format: undefined
     */
    slogan?: string;
  

    /**
     * 描述: 投资风险提示文案 | 类型: string | format: undefined
     */
    suffix?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 模板文章信息
 */
export interface FmTmpArticleInfoVO {
  
    /**
     * 描述: 文章模板信息 | 类型: undefined | format: undefined
      */
    artTemplateInfo?: ArtTemplateInfoDTO;
        

    /**
     * 描述: 状态 | 类型: string | format: undefined
      */
    auditStatus?: ('AUDIT' | 'DEFAULT' | 'DRAFT' | 'PASS' | 'REJECT' | 'REVIEW' | 'REVIEW_PASS' | 'REVIEW_REJECT');
        

    /**
     * 描述: 审核人 | 类型: string | format: undefined
     */
    auditor?: string;
  

    /**
     * 描述: 下发客户 | 类型: string | format: undefined
     */
    clientNames?: string;
  

    /**
     * 描述: 栏目名称 | 类型: string | format: undefined
     */
    columnNames: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 发布时间 | 类型: string | format: date-time
     */
    publishTime?: datetime;
  

    /**
     * 描述: 推送状态 | 类型: string | format: undefined
      */
    pushType?: ('CREATE' | 'DEFAULT' | 'DELETE' | 'UPDATE');
        

    /**
     * 描述: 状态 | 类型: string | format: undefined
     */
    status?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  
}


/**
 * 描述: 模板文章列表查询
 */
export interface FmTmpArticleListRequest {
  
    /**
     * 描述: 栏目id | 类型: array | format: undefined
     */
    columnIds?: string[];
        

    /**
     * 描述: 关键词 | 类型: string | format: undefined
     */
    keyWord?: string;
  

    /**
     * 描述: 发布结束时间 | 类型: string | format: date-time
     */
    publishEndTime?: datetime;
  

    /**
     * 描述: 发布开始时间 | 类型: string | format: date-time
     */
    publishStartTime?: datetime;
  

    /**
     * 描述: 审核状态 | 类型: string | format: undefined
     */
    status?: string;
  
}


/**
 * 描述: 基金行情
 */
export interface FundQuotesRequest {
  
    /**
     * 描述: 基金代码 | 类型: string | format: undefined
     */
    code: string;
  

    /**
     * 描述: 东财涨跌幅类型, 默认近一年 | 类型: string | format: undefined
      */
    type?: ('MAX' | 'NEAR_FIVE_YEAR' | 'NEAR_JANUARY' | 'NEAR_JUNE' | 'NEAR_MARCH' | 'NEAR_ONE_YEAR' | 'NEAR_THREE_YEAR' | 'TO_YEAR' | 'YESTERDAY');
        
}


/**
 * 描述: undefined
 */
export interface IndexExchangeDTO {
  
    /**
     * 描述: 代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 成交额 | 类型: number | format: double
     */
    dealAmount?: double;
  

    /**
     * 描述: 下跌个股数 | 类型: number | format: double
     */
    downStockCount?: double;
  

    /**
     * 描述: 名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 现价 | 类型: number | format: double
     */
    nowPrice?: double;
  

    /**
     * 描述: 涨跌幅 | 类型: number | format: double
     */
    rise?: double;
  

    /**
     * 描述: 涨跌额 | 类型: number | format: double
     */
    riseAmount?: double;
  

    /**
     * 描述: 上涨个股数 | 类型: number | format: double
     */
    riseStockCount?: double;
  

    /**
     * 描述: 平价个股数 | 类型: number | format: double
     */
    unChangePriceStockCount?: double;
  
}


/**
 * 描述: 分页请求信息
 */
export interface IndexExchangeVO {
  
    /**
     * 描述: 大盘指数代码,默认1.000001,0.399001,0.399006。
(1.)沪市；(0.)深市。 | 类型: string | format: undefined
     */
    code: string;
  

    /**
     * 描述: 请求参数 | 类型: object | format: undefined
      */
    data?: unknown;
        

    /**
     * 描述: 页码，默认1 | 类型: integer | format: int32
     */
    pageNo: int32;
  

    /**
     * 描述: 页最大记录数,默认100 | 类型: integer | format: int32
     */
    pageSize: int32;
  
}


/**
 * 描述: undefined
 */
export interface IndexIndustryDTO {
  
    /**
     * 描述: 行业代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 成交额 | 类型: number | format: undefined
     */
    dealAmount?: number;
  

    /**
     * 描述: 下跌个股数 | 类型: number | format: double
     */
    downStockCount?: double;
  

    /**
     * 描述: 今日大单净流入 | 类型: number | format: undefined
     */
    largeBuyAmount?: number;
  

    /**
     * 描述: 今日大单净流入占比 | 类型: number | format: double
     */
    largeBuyRate?: double;
  

    /**
     * 描述: 领涨股涨跌幅 | 类型: number | format: double
     */
    maximumRise?: double;
  

    /**
     * 描述: 领涨股代码 | 类型: string | format: undefined
     */
    maximumRiseStockCode?: string;
  

    /**
     * 描述: 领涨股名称 | 类型: string | format: undefined
     */
    maximumRiseStockName?: string;
  

    /**
     * 描述: 今日中单净流入 | 类型: number | format: undefined
     */
    middleBuyAmount?: number;
  

    /**
     * 描述: 今日中单净流入占比 | 类型: number | format: double
     */
    middleBuyRate?: double;
  

    /**
     * 描述: 行业名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 最新价 | 类型: number | format: double
     */
    price?: double;
  

    /**
     * 描述: 今日主力净流入额 | 类型: number | format: undefined
     */
    primeBuyAmount?: number;
  

    /**
     * 描述: 今日主力净流入占比 | 类型: number | format: double
     */
    primeBuyRate?: double;
  

    /**
     * 描述: 今日主力净流入最大股代码 | 类型: string | format: undefined
     */
    primeBuyStockCode?: string;
  

    /**
     * 描述: 今日主力净流入最大股名称 | 类型: string | format: undefined
     */
    primeBuyStockName?: string;
  

    /**
     * 描述: 今日涨跌幅 | 类型: number | format: double
     */
    rise?: double;
  

    /**
     * 描述: 上涨个股数 | 类型: number | format: double
     */
    riseStockCount?: double;
  

    /**
     * 描述: 今日小单净流入 | 类型: number | format: undefined
     */
    smallBuyAmount?: number;
  

    /**
     * 描述: 今日小单净流入占比 | 类型: number | format: double
     */
    smallBuyRate?: double;
  

    /**
     * 描述: 今日超大单净流入 | 类型: number | format: undefined
     */
    superLargeBuyAmount?: number;
  

    /**
     * 描述: 今日超大单净流入占比 | 类型: number | format: double
     */
    superLargeBuyRate?: double;
  
}


/**
 * 描述: 分页请求信息
 */
export interface IndexIndustryVO {
  
    /**
     * 描述: 请求参数 | 类型: object | format: undefined
      */
    data?: unknown;
        

    /**
     * 描述: 排序字段，根据fid排序，fid默认为主力资金 | 类型: string | format: undefined
     */
    orderFiled: string;
  

    /**
     * 描述: 页码，默认1 | 类型: integer | format: int32
     */
    pageNo: int32;
  

    /**
     * 描述: 排序,默认1（倒序），0（升序）；根据fid排序，fid默认为主力资金 | 类型: integer | format: int32
     */
    pageOrder: int32;
  

    /**
     * 描述: 页最大记录数,默认100 | 类型: integer | format: int32
     */
    pageSize: int32;
  
}


/**
 * 描述: undefined
 */
export interface IndexStockDTO {
  
    /**
     * 描述: 代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 名称 | 类型: array | format: undefined
     */
    trends?: Trends[];
        
}


/**
 * 描述: 分页请求信息
 */
export interface IndexStockVO {
  
    /**
     * 描述: 个股代码,形如1.688001。1.沪市；0.深市； | 类型: string | format: undefined
     */
    code: string;
  

    /**
     * 描述: 请求参数 | 类型: object | format: undefined
      */
    data?: unknown;
        

    /**
     * 描述: 是否日级,默认分钟级 | 类型: boolean | format: undefined
     */
    minus: boolean;
  

    /**
     * 描述: 页码，默认1 | 类型: integer | format: int32
     */
    pageNo: int32;
  

    /**
     * 描述: 页最大记录数,默认100;分时最大5 | 类型: integer | format: int32
     */
    pageSize: int32;
  
}


/**
 * 描述: 个股基础信息
 */
export interface IndividualStockBaseInfoVO {
  
    /**
     * 描述: 股票代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 市场类型 | 类型: string | format: undefined
     */
    marketType?: string;
  

    /**
     * 描述: 股票名称 | 类型: string | format: undefined
     */
    name?: string;
  
}


/**
 * 描述: 新词列表查询
 */
export interface NewsWordListRequest {
  
    /**
     * 描述: 算法模型 | 类型: string | format: undefined
     */
    apiMode?: string;
  

    /**
     * 描述: 类型 | 类型: string | format: undefined
     */
    type?: string;
  
}


/**
 * 描述: 新词状态修改
 */
export interface NewsWordUpdateTypeDTO {
  
    /**
     * 描述: 新词id | 类型: string | format: undefined
     */
    id: string;
  

    /**
     * 描述: 类型 | 类型: string | format: undefined
     */
    type: string;
  
}


/**
 * 描述: 屏蔽词新增
 */
export interface NewsWordsListVO {
  
    /**
     * 描述: 算法模型 | 类型: string | format: undefined
     */
    apiMode?: string;
  

    /**
     * 描述: 审核时间 | 类型: string | format: date-time
     */
    auditTime?: datetime;
  

    /**
     * 描述: 审核人 | 类型: string | format: undefined
     */
    auditor?: string;
  

    /**
     * 描述: 所在文本 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 创建时间 | 类型: string | format: undefined
     */
    createTime?: string;
  

    /**
     * 描述: id,更新时* | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 状态 | 类型: string | format: undefined
     */
    status?: string;
  

    /**
     * 描述: 相似特征词 | 类型: string | format: undefined
     */
    synonym?: string;
  

    /**
     * 描述: 更新时间，默认服务器当前时间 | 类型: string | format: undefined
     */
    updateTime?: string;
  

    /**
     * 描述: 新词 | 类型: string | format: undefined
     */
    word?: string;
  
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
export interface PageRequestArtTemplateInfoListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: ArtTemplateInfoListRequest;
        

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
export interface PageRequestColColumnInfoRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: ColColumnInfoRequest;
        

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
export interface PageRequestFmArticleAuditListQuery {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: FmArticleAuditListQuery;
        

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
export interface PageRequestFmArticleListQuery {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: FmArticleListQuery;
        

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
export interface PageRequestFmClientInfoListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: FmClientInfoListRequest;
        

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
export interface PageRequestFmTmpArticleListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: FmTmpArticleListRequest;
        

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
export interface PageRequestNewsWordListRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: NewsWordListRequest;
        

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
export interface PageRequestPushCandidateRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: PushCandidateRequest;
        

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
export interface PageRequestPushNewsRequest {
  
    /**
     * 描述: 请求参数 | 类型: undefined | format: undefined
      */
    data?: PushNewsRequest;
        

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
 * 描述: undefined
 */
export interface PushAddDTO {
  
    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 正文 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 资讯唯一标识 | 类型: string | format: undefined
     */
    globalId?: string;
  

    /**
     * 描述: 原文发布时间 | 类型: string | format: undefined
     */
    publishTime?: string;
  

    /**
     * 描述: 来源 | 类型: string | format: undefined
     */
    source?: string;
  

    /**
     * 描述: 文章标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 资讯链接 | 类型: string | format: undefined
     */
    url?: string;
  

    /**
     * 描述: 版权媒体 | 类型: string | format: undefined
     */
    webSource?: string;
  
}


/**
 * 描述: 下发文章
 */
export interface PushArticleVO {
  
    /**
     * 描述: 模板信息 | 类型: undefined | format: undefined
      */
    artTemplate?: ArtTemplateInfoVO;
        

    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 内容 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 扩展字段 | 类型: object | format: undefined
      */
    extData?: unknown;
        

    /**
     * 描述: 下发时间 | 类型: string | format: date-time
     */
    pushTime?: datetime;
  

    /**
     * 描述: 下发人 | 类型: string | format: undefined
     */
    pusher?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 文章类型 | 类型: string | format: undefined
      */
    type?: ('news' | 'template_news');
        
}


/**
 * 描述: undefined
 */
export interface PushCandidateDTO {
  
    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 筛选时间 | 类型: string | format: date-time
     */
    chooseTime?: datetime;
  

    /**
     * 描述: 筛选人 | 类型: string | format: undefined
     */
    chooser?: string;
  

    /**
     * 描述: 正文 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: id | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 发布时间 | 类型: string | format: date-time
     */
    publishTime?: datetime;
  

    /**
     * 描述: 推送摘要 | 类型: string | format: undefined
     */
    pushBrief?: string;
  

    /**
     * 描述: 推送标题 | 类型: string | format: undefined
     */
    pushTitle?: string;
  

    /**
     * 描述: 备注 | 类型: string | format: undefined
     */
    tips?: string;
  

    /**
     * 描述: 文章标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 更新人 | 类型: string | format: undefined
     */
    updateBy?: string;
  

    /**
     * 描述: 更新时间 | 类型: string | format: date-time
     */
    updateTime?: datetime;
  

    /**
     * 描述: 原文链接 | 类型: string | format: undefined
     */
    url?: string;
  

    /**
     * 描述: 版权媒体 | 类型: string | format: undefined
     */
    webSource?: string;
  
}


/**
 * 描述: undefined
 */
export interface PushCandidateRequest {
  
    /**
     * 描述: 筛选时间终点 | 类型: string | format: undefined
     */
    chooseTimeEnd?: string;
  

    /**
     * 描述: 筛选时间起点 | 类型: string | format: undefined
     */
    chooseTimeStart?: string;
  

    /**
     * 描述: 筛选人 | 类型: string | format: undefined
     */
    chooser?: string;
  

    /**
     * 描述: 排序顺序 | 类型: string | format: undefined
     */
    order?: string;
  

    /**
     * 描述: 时间排序参数 | 类型: string | format: undefined
     */
    orderBy?: string;
  

    /**
     * 描述: 发布时间终点 | 类型: string | format: undefined
     */
    publishTimeEnd?: string;
  

    /**
     * 描述: 发布时间起点 | 类型: string | format: undefined
     */
    publishTimeStart?: string;
  

    /**
     * 描述: 编辑人 | 类型: string | format: undefined
     */
    updateBy?: string;
  

    /**
     * 描述: 编辑时间终点 | 类型: string | format: undefined
     */
    updateTimeEnd?: string;
  

    /**
     * 描述: 编辑时间起点 | 类型: string | format: undefined
     */
    updateTimeStart?: string;
  
}


/**
 * 描述: 推送资讯
 */
export interface PushNewsInfoVO {
  
    /**
     * 描述: 摘要 | 类型: string | format: undefined
     */
    brief?: string;
  

    /**
     * 描述: 正文 | 类型: string | format: undefined
     */
    content?: string;
  

    /**
     * 描述: 资讯唯一标识 | 类型: string | format: undefined
     */
    globalId?: string;
  

    /**
     * 描述: 入选时间 | 类型: string | format: date-time
     */
    operationTime?: datetime;
  

    /**
     * 描述: 操作人 | 类型: string | format: undefined
     */
    operator?: string;
  

    /**
     * 描述: 发布时间 | 类型: string | format: date-time
     */
    publishTime?: datetime;
  

    /**
     * 描述: 是否推送 | 类型: boolean | format: undefined
     */
    pushed?: boolean;
  

    /**
     * 描述: 来源 | 类型: string | format: undefined
     */
    source?: string;
  

    /**
     * 描述: 标题 | 类型: string | format: undefined
     */
    title?: string;
  

    /**
     * 描述: 资讯链接 | 类型: string | format: undefined
     */
    url?: string;
  

    /**
     * 描述: 版权媒体 | 类型: string | format: undefined
     */
    webSource?: string;
  
}


/**
 * 描述: undefined
 */
export interface PushNewsRequest {
  
    /**
     * 描述: 资讯类型 | 类型: integer | format: int32
     */
    newsType?: int32;
  

    /**
     * 描述: 发布时间终点 | 类型: string | format: undefined
     */
    publishTimeEnd?: string;
  

    /**
     * 描述: 发布时间起点 | 类型: string | format: undefined
     */
    publishTimeStart?: string;
  

    /**
     * 描述: 版权媒体集合 | 类型: array | format: undefined
     */
    webSources?: string[];
        
}


/**
 * 描述: undefined
 */
export interface PushUpdateMsgDTO {
  
    /**
     * 描述: 资讯id | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 推送摘要 | 类型: string | format: undefined
     */
    pushBrief?: string;
  

    /**
     * 描述: 推送标题 | 类型: string | format: undefined
     */
    pushTitle?: string;
  
}


/**
 * 描述: undefined
 */
export interface PushUpdateTipDTO {
  
    /**
     * 描述: 资讯id | 类型: string | format: undefined
     */
    id?: string;
  

    /**
     * 描述: 备注 | 类型: string | format: undefined
     */
    tips?: string;
  
}


/**
 * 描述: undefined
 */
export interface ResultAuditCountDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: AuditCountDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultColClientListDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: ColClientListDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultColColumnInfoDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: ColColumnInfoDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultFmArticleCommentListVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: FmArticleCommentListVO;
        
}


/**
 * 描述: undefined
 */
export interface ResultFmArticleInfoDetailVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: FmArticleInfoDetailVO;
        
}


/**
 * 描述: undefined
 */
export interface ResultFmClientInfoDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: FmClientInfoDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultIndexStockDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: IndexStockDTO;
        
}


/**
 * 描述: undefined
 */
export interface ResultListArtTemplateInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: ArtTemplateInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListColColumnInfoDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: ColColumnInfoDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListColColumnInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: ColColumnInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListEnumDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: EnumDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListFmArticleInfoListVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: FmArticleInfoListVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListFmClientInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: FmClientInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListFmTmpArticleInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: FmTmpArticleInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListIndexExchangeDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: IndexExchangeDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListIndexIndustryDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: IndexIndustryDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListIndividualStockBaseInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: IndividualStockBaseInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListNewsWordsListVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: NewsWordsListVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListPushCandidateDTO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: PushCandidateDTO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListPushNewsInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: PushNewsInfoVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListStockHelpVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: StockHelpVO[];
        
}


/**
 * 描述: undefined
 */
export interface ResultListString {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: array | format: undefined
     */
    result: string[];
        
}


/**
 * 描述: undefined
 */
export interface ResultMapIntInt {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: object | format: undefined
      */
    result?: unknown;
        
}


/**
 * 描述: undefined
 */
export interface ResultPushArticleVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: PushArticleVO;
        
}


/**
 * 描述: undefined
 */
export interface ResultStockNetInfoVO {
  
    /**
     * 描述: 分页数据 | 类型: undefined | format: undefined
      */
    page?: Page;
        

    /**
     * 描述: 业务数据结果 | 类型: undefined | format: undefined
      */
    result?: StockNetInfoVO;
        
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
     * 描述: 业务数据结果 | 类型: string | format: undefined
     */
    result: string;
  
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
export interface RAuditCountDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultAuditCountDTO;
        

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
export interface RColClientListDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultColClientListDTO;
        

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
export interface RColColumnInfoDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultColColumnInfoDTO;
        

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
export interface RFmArticleCommentListVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultFmArticleCommentListVO;
        

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
export interface RFmArticleInfoDetailVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultFmArticleInfoDetailVO;
        

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
export interface RFmClientInfoDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultFmClientInfoDTO;
        

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
export interface RIndexStockDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultIndexStockDTO;
        

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
export interface RListArtTemplateInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListArtTemplateInfoVO;
        

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
export interface RListColColumnInfoDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListColColumnInfoDTO;
        

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
export interface RListColColumnInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListColColumnInfoVO;
        

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
export interface RListEnumDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListEnumDTO;
        

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
export interface RListFmArticleInfoListVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListFmArticleInfoListVO;
        

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
export interface RListFmClientInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListFmClientInfoVO;
        

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
export interface RListFmTmpArticleInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListFmTmpArticleInfoVO;
        

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
export interface RListIndexExchangeDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListIndexExchangeDTO;
        

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
export interface RListIndexIndustryDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListIndexIndustryDTO;
        

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
export interface RListIndividualStockBaseInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListIndividualStockBaseInfoVO;
        

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
export interface RListNewsWordsListVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListNewsWordsListVO;
        

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
export interface RListPushCandidateDTO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListPushCandidateDTO;
        

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
export interface RListPushNewsInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListPushNewsInfoVO;
        

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
export interface RListStockHelpVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListStockHelpVO;
        

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
export interface RListString {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultListString;
        

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
export interface RMapIntInt {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultMapIntInt;
        

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
export interface RPushArticleVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultPushArticleVO;
        

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
export interface RStockNetInfoVO {
  
    /**
     * 描述: 状态码 | 类型: integer | format: int32
     */
    code: int32;
  

    /**
     * 描述: 业务数据 | 类型: undefined | format: undefined
      */
    data?: ResultStockNetInfoVO;
        

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
 * 描述: 个股辅助信息
 */
export interface StockHelpVO {
  
    /**
     * 描述: 代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 名称 | 类型: string | format: undefined
     */
    name?: string;
  
}


/**
 * 描述: 股票净值
 */
export interface StockNetInfoVO {
  
    /**
     * 描述: 代码 | 类型: string | format: undefined
     */
    code?: string;
  

    /**
     * 描述: 名称 | 类型: string | format: undefined
     */
    name?: string;
  

    /**
     * 描述: 净值 | 类型: number | format: undefined
     */
    net?: number;
  

    /**
     * 描述: 净值日期 | 类型: string | format: date
     */
    netDate?: date;
  

    /**
     * 描述: 东财涨跌幅类型, 默认近一年 | 类型: string | format: undefined
      */
    type?: ('MAX' | 'NEAR_FIVE_YEAR' | 'NEAR_JANUARY' | 'NEAR_JUNE' | 'NEAR_MARCH' | 'NEAR_ONE_YEAR' | 'NEAR_THREE_YEAR' | 'TO_YEAR' | 'YESTERDAY');
        

    /**
     * 描述: 涨跌幅 | 类型: number | format: undefined
     */
    ups?: number;
  
}


/**
 * 描述: undefined
 */
export interface Trends {
  
    /**
     * 描述: 振幅 | 类型: number | format: double
     */
    changeRate?: double;
  

    /**
     * 描述: 收盘价 | 类型: number | format: double
     */
    closePrice?: double;
  

    /**
     * 描述: 成交额 | 类型: number | format: undefined
     */
    dealAmount?: number;
  

    /**
     * 描述: 5日成交额均值倍数 | 类型: number | format: double
     */
    dealAmount5DaysRate?: double;
  

    /**
     * 描述: 成交量 | 类型: number | format: double
     */
    dealCount?: double;
  

    /**
     * 描述: 换手率 | 类型: number | format: double
     */
    exchangeRate?: double;
  

    /**
     * 描述: 最高价 | 类型: number | format: double
     */
    highestPrice?: double;
  

    /**
     * 描述: 今日散户净流入 | 类型: number | format: undefined
     */
    inferiorBuyAmount?: number;
  

    /**
     * 描述: 今日散户净流入占比 | 类型: number | format: double
     */
    inferiorBuyRate?: double;
  

    /**
     * 描述: 今日大单净流入 | 类型: number | format: undefined
     */
    largeBuyAmount?: number;
  

    /**
     * 描述: 今日大单净流入占比 | 类型: number | format: double
     */
    largeBuyRate?: double;
  

    /**
     * 描述: 最低价 | 类型: number | format: double
     */
    lowestPrice?: double;
  

    /**
     * 描述: 今日中单净流入 | 类型: number | format: undefined
     */
    middleBuyAmount?: number;
  

    /**
     * 描述: 今日中单净流入占比 | 类型: number | format: double
     */
    middleBuyRate?: double;
  

    /**
     * 描述: 现价 | 类型: number | format: double
     */
    nowPrice?: double;
  

    /**
     * 描述: 开盘价 | 类型: number | format: double
     */
    openPrice?: double;
  

    /**
     * 描述: 今日主力净流入额 | 类型: number | format: undefined
     */
    primeBuyAmount?: number;
  

    /**
     * 描述: 今日主力净流入占比 | 类型: number | format: double
     */
    primeBuyRate?: double;
  

    /**
     * 描述: 涨跌幅 | 类型: number | format: double
     */
    rise?: double;
  

    /**
     * 描述: 涨跌额 | 类型: number | format: double
     */
    riseAmount?: double;
  

    /**
     * 描述: 今日小单净流入 | 类型: number | format: undefined
     */
    smallBuyAmount?: number;
  

    /**
     * 描述: 今日小单净流入占比 | 类型: number | format: double
     */
    smallBuyRate?: double;
  

    /**
     * 描述: 今日超大单净流入 | 类型: number | format: undefined
     */
    superLargeBuyAmount?: number;
  

    /**
     * 描述: 今日超大单净流入占比 | 类型: number | format: double
     */
    superLargeBuyRate?: double;
  

    /**
     * 描述: 时间，分时：2021-11-25 09:30；日级：2021-11-25 | 类型: string | format: undefined
     */
    time?: string;
  
}


  // 自动生成的未定义接口入参
  export interface getLenovoInfoUsingGETParamReq {
    
    // 参数注释 关键词
    keyWord?: string;
    
  }
  

  // 自动生成的未定义接口入参
  export interface getStockHelpUsingGETParamReq {
    
    // 参数注释 关键词
    keyWord?: string;
    
  }
  