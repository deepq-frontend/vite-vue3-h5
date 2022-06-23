/* eslint-disable */
  import {ArtTemplateInfoDTO, ArtTemplateInfoListRequest, ArtTemplateInfoVO, ArticleCommentListQuery, ArticleContentUpdateDTO, AuditCountDTO, BlockWordsSaveDTO, ColClientListDTO, ColColumnInfoDTO, ColColumnInfoRequest, ColColumnInfoVO, ColNewsMapDTO, CommentStatusDTO, EnumDTO, FmArticleAuditListQuery, FmArticleCommentDetailDTO, FmArticleCommentListVO, FmArticleCommentSaveDTO, FmArticleCommentVO, FmArticleInfoDTO, FmArticleInfoDetailVO, FmArticleInfoListVO, FmArticleListQuery, FmClientInfoDTO, FmClientInfoListRequest, FmClientInfoVO, FmTmpArticleInfoVO, FmTmpArticleListRequest, FundQuotesRequest, IndexExchangeDTO, IndexExchangeVO, IndexIndustryDTO, IndexIndustryVO, IndexStockDTO, IndexStockVO, IndividualStockBaseInfoVO, NewsWordListRequest, NewsWordUpdateTypeDTO, NewsWordsListVO, Page, PageRequestArtTemplateInfoListRequest, PageRequestColColumnInfoRequest, PageRequestFmArticleAuditListQuery, PageRequestFmArticleListQuery, PageRequestFmClientInfoListRequest, PageRequestFmTmpArticleListRequest, PageRequestNewsWordListRequest, PageRequestPushCandidateRequest, PageRequestPushNewsRequest, PushAddDTO, PushArticleVO, PushCandidateDTO, PushCandidateRequest, PushNewsInfoVO, PushNewsRequest, PushUpdateMsgDTO, PushUpdateTipDTO, ResultAuditCountDTO, ResultColClientListDTO, ResultColColumnInfoDTO, ResultFmArticleCommentListVO, ResultFmArticleInfoDetailVO, ResultFmClientInfoDTO, ResultIndexStockDTO, ResultListArtTemplateInfoVO, ResultListColColumnInfoDTO, ResultListColColumnInfoVO, ResultListEnumDTO, ResultListFmArticleInfoListVO, ResultListFmClientInfoVO, ResultListFmTmpArticleInfoVO, ResultListIndexExchangeDTO, ResultListIndexIndustryDTO, ResultListIndividualStockBaseInfoVO, ResultListNewsWordsListVO, ResultListPushCandidateDTO, ResultListPushNewsInfoVO, ResultListStockHelpVO, ResultListString, ResultMapIntInt, ResultPushArticleVO, ResultStockNetInfoVO, ResultVoid, ResultLong, ResultString, RAuditCountDTO, RColClientListDTO, RColColumnInfoDTO, RFmArticleCommentListVO, RFmArticleInfoDetailVO, RFmClientInfoDTO, RIndexStockDTO, RListArtTemplateInfoVO, RListColColumnInfoDTO, RListColColumnInfoVO, RListEnumDTO, RListFmArticleInfoListVO, RListFmClientInfoVO, RListFmTmpArticleInfoVO, RListIndexExchangeDTO, RListIndexIndustryDTO, RListIndividualStockBaseInfoVO, RListNewsWordsListVO, RListPushCandidateDTO, RListPushNewsInfoVO, RListStockHelpVO, RListString, RMapIntInt, RPushArticleVO, RStockNetInfoVO, RVoid, RLong, RString, StockHelpVO, StockNetInfoVO, Trends, getLenovoInfoUsingGETParamReq, getStockHelpUsingGETParamReq} from "../types/fm-article";
  import request from "@/utils/request";
  type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string

    // 全部审核状态
    export const useApiFmArticleArticleAllAuditStatusByGet = () =>
      request<RListEnumDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/allAuditStatus`,
        data: {},
        params: {}
      })
  

    // 查询全部资讯类型
    export const useApiFmArticleArticleAllNewsTypeByGet = () =>
      request<RListEnumDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/allNewsType`,
        data: {},
        params: {}
      })
  

    // 文章审核列表
    export const useApiFmArticleArticleAuditListPageByPost = ( body: PageRequestFmArticleAuditListQuery) =>
      request<RListFmArticleInfoListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/audit/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 模板-审核文章-发布
    export const useApiFmArticleArticleAuditPassIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/audit/pass/${id}`,
        data: {},
        params: {}
      })
  

    // 模板-审核文章-驳回
    export const useApiFmArticleArticleAuditRejectIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/audit/reject/${id}`,
        data: {},
        params: {}
      })
  

    // 新增评论
    export const useApiFmArticleArticleCommentInsertByPost = ( body: FmArticleCommentSaveDTO) =>
      request<RLong>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/comment/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 评论列表
    export const useApiFmArticleArticleCommentListByPost = ( body: ArticleCommentListQuery) =>
      request<RFmArticleCommentListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/comment/list`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 修改评论
    export const useApiFmArticleArticleCommentUpdateByPut = ( body: FmArticleCommentDetailDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/comment/update`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 修改评论状态
    export const useApiFmArticleArticleCommentUpdateStatusByPut = ( body: CommentStatusDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/comment/updateStatus`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 删除评论
    export const useApiFmArticleArticleCommentIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/article/comment/${id}`,
        data: {},
        params: {}
      })
  

    // 复制链接-数组
    export const useApiFmArticleArticleCopyLinkIdByGet = (id: string) =>
      request<RListString>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/copyLink/${id}`,
        data: {},
        params: {}
      })
  

    // 复制链接
    export const useApiFmArticleArticleCopyLinkIdClientIdByGet = (clientId: string, id: string) =>
      request<RString>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/copyLink/${id}/${clientId}`,
        data: {},
        params: {}
      })
  

    // 删除文章
    export const useApiFmArticleArticleDeleteIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/article/delete/${id}`,
        data: {},
        params: {}
      })
  

    // 文章详情
    export const useApiFmArticleArticleDetailIdByGet = (id: string) =>
      request<RFmArticleInfoDetailVO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/detail/${id}`,
        data: {},
        params: {}
      })
  

    // 模板文章-下架
    export const useApiFmArticleArticleDownIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/down/${id}`,
        data: {},
        params: {}
      })
  

    // 导出文章word
    export const useApiFmArticleArticleDownloadWordIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/download/word/${id}`,
        data: {},
        params: {}
      })
  

    // 新增文章
    export const useApiFmArticleArticleInsertByPost = ( body: FmArticleInfoDTO) =>
      request<RLong>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 文章列表
    export const useApiFmArticleArticleListPageByPost = ( body: PageRequestFmArticleListQuery) =>
      request<RListFmArticleInfoListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 侧边栏文章审核推送
    export const useApiFmArticleArticleMsgPushByGet = () =>
      request<RAuditCountDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/msg/push`,
        data: {},
        params: {}
      })
  

    // 普通文章-审核-通过
    export const useApiFmArticleArticleNewsAuditPassIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/news/audit/pass/${id}`,
        data: {},
        params: {}
      })
  

    // 普通文章-审核-驳回
    export const useApiFmArticleArticleNewsAuditRejectIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/news/audit/reject/${id}`,
        data: {},
        params: {}
      })
  

    // 普通文章-校对-通过
    export const useApiFmArticleArticleNewsReviewPassIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/news/review/pass/${id}`,
        data: {},
        params: {}
      })
  

    // 普通文章-校对-驳回
    export const useApiFmArticleArticleNewsReviewRejectIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/news/review/reject/${id}`,
        data: {},
        params: {}
      })
  

    // 模板文章-上架
    export const useApiFmArticleArticlePushIdByGet = (id: string) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/push/${id}`,
        data: {},
        params: {}
      })
  

    // 文章校对列表
    export const useApiFmArticleArticleReviewListPageByPost = ( body: PageRequestFmArticleAuditListQuery) =>
      request<RListFmArticleInfoListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/review/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 文章预览
    export const useApiFmArticleArticleReviewIdClientIdByGet = (clientId: string, id: string) =>
      request<RPushArticleVO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/review/${id}/${clientId}`,
        data: {},
        params: {}
      })
  

    // 克隆模板文章
    export const useApiFmArticleArticleTmpCloneArticleIdByGet = (id: string) =>
      request<RLong>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/tmp/cloneArticle/${id}`,
        data: {},
        params: {}
      })
  

    // 模板文章列表
    export const useApiFmArticleArticleTmpListPageByPost = ( body: PageRequestFmTmpArticleListRequest) =>
      request<RListFmTmpArticleInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/tmp/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 下发客户列表
    export const useApiFmArticleArticleTmpPushClientArticleIdByGet = (articleId: string) =>
      request<RListFmClientInfoVO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/article/tmp/push/client/${articleId}`,
        data: {},
        params: {}
      })
  

    // 修改文章
    export const useApiFmArticleArticleUpdateByPut = ( body: FmArticleInfoDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/update`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 修改文章内容
    export const useApiFmArticleArticleUpdateContentByPut = ( body: ArticleContentUpdateDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/article/updateContent`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 上传压缩文章解析入库
    export const useApiFmArticleArticleUploadZipByPost = ( body: unknown) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'multipart/form-data'
        },
        url: `/fm-article/article/uploadZip`,
        data: body,
        params: {}
      })
  

    // 屏蔽词新增
    export const useApiFmArticleBlockWordsInsertByPost = ( body: BlockWordsSaveDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/block/words/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 删除客户信息
    export const useApiFmArticleClientDeleteIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/client/delete/${id}`,
        data: {},
        params: {}
      })
  

    // 查询客户详情
    export const useApiFmArticleClientDetailIdByGet = (id: string) =>
      request<RFmClientInfoDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/client/detail/${id}`,
        data: {},
        params: {}
      })
  

    // 新增客户信息
    export const useApiFmArticleClientInsertByPost = ( body: FmClientInfoDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/client/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 查询客户列表
    export const useApiFmArticleClientListPageByPost = ( body: PageRequestFmClientInfoListRequest) =>
      request<RListFmClientInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/client/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 修改客户信息
    export const useApiFmArticleClientUpdateByPut = ( body: FmClientInfoDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/client/update`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 查询全部栏目
    export const useApiFmArticleColAllByGet = () =>
      request<RListColColumnInfoDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/col/all`,
        data: {},
        params: {}
      })
  

    // 查询全部栏目类型
    export const useApiFmArticleColAllColTypeByGet = () =>
      request<RListEnumDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/col/allColType`,
        data: {},
        params: {}
      })
  

    // 删除栏目
    export const useApiFmArticleColDeleteIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/col/delete/${id}`,
        data: {},
        params: {}
      })
  

    // 查询栏目详情
    export const useApiFmArticleColDetailIdByGet = (id: string) =>
      request<RColColumnInfoDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/col/detail/${id}`,
        data: {},
        params: {}
      })
  

    // 新增栏目
    export const useApiFmArticleColInsertByPost = ( body: ColColumnInfoDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/col/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 查询栏目列表
    export const useApiFmArticleColListPageByPost = ( body: PageRequestColColumnInfoRequest) =>
      request<RListColColumnInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/col/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 修改栏目
    export const useApiFmArticleColUpdateByPut = ( body: ColColumnInfoDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/col/update`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 查询模板栏目关系
    export const useApiFmArticleColTmpGetColTmpMapperTemplateIdByGet = (templateId: string) =>
      request<RColClientListDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/colTmp/getColTmpMapper/${templateId}`,
        data: {},
        params: {}
      })
  

    // 文件上传
    export const useApiFmArticleCommonFileUploadByPost = ( body: unknown) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'multipart/form-data'
        },
        url: `/fm-article/common/fileUpload`,
        data: body,
        params: {}
      })
  

    // getIndexExchange
    export const useApiFmArticleExternalIndexExchangeByPost = ( body: IndexExchangeVO) =>
      request<RListIndexExchangeDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/external/index/exchange`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // getIndexIndustry
    export const useApiFmArticleExternalIndexIndustryByPost = ( body: IndexIndustryVO) =>
      request<RListIndexIndustryDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/external/index/industry`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // getIndexStock
    export const useApiFmArticleExternalIndexStockByPost = ( body: IndexStockVO) =>
      request<RIndexStockDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/external/index/stock`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // getIndexStockDistribution
    export const useApiFmArticleExternalIndexStockDistributionByGet = () =>
      request<RMapIntInt>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/external/index/stock/distribution`,
        data: {},
        params: {}
      })
  

    // 获取算法模型
    export const useApiFmArticleNewsWordsApiModeByGet = () =>
      request<RListEnumDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/news/words/apiMode`,
        data: {},
        params: {}
      })
  

    // 新词列表查询
    export const useApiFmArticleNewsWordsListByPost = ( body: PageRequestNewsWordListRequest) =>
      request<RListNewsWordsListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/news/words/list`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 获取新词类型（状态）
    export const useApiFmArticleNewsWordsNewsWordTypeByGet = () =>
      request<RListEnumDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/news/words/newsWordType`,
        data: {},
        params: {}
      })
  

    // 新词类型变更
    export const useApiFmArticleNewsWordsUpdateTypeByPut = ( body: NewsWordUpdateTypeDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/news/words/updateType`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 新词删除
    export const useApiFmArticleNewsWordsIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/news/words/${id}`,
        data: {},
        params: {}
      })
  

    // 查询推送资讯列表
    export const useApiFmArticlePushByPost = ( body: PageRequestPushNewsRequest) =>
      request<RListPushNewsInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/push`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 添加文章至推送库
    export const useApiFmArticlePushAddByPost = ( body: undefined[]) =>
      request<RListString>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/push/add`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 资讯候选列表获取
    export const useApiFmArticlePushCandidateByPost = ( body: PageRequestPushCandidateRequest) =>
      request<RListPushCandidateDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/push/candidate`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 删除推送文章
    export const useApiFmArticlePushDeleteIdByDelete = (id: string) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-article/push/delete/${id}`,
        data: {},
        params: {}
      })
  

    // 修改推送相关信息
    export const useApiFmArticlePushMsgByPost = ( body: PushUpdateMsgDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/push/msg`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 获取中心媒体库数据源
    export const useApiFmArticlePushSourceByGet = () =>
      request<RListString>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/push/source`,
        data: {},
        params: {}
      })
  

    // 修改备注
    export const useApiFmArticlePushTipsByPost = ( body: PushUpdateTipDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/push/tips`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 获取联想个股
    export const useApiFmArticleStockGetLenovoByGet = (params: getLenovoInfoUsingGETParamReq) =>
      request<RListIndividualStockBaseInfoVO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/stock/getLenovo`,
        data: {},
        params: params
      })
  

    // 个股行情数据
    export const useApiFmArticleStockGetStockByPost = ( body: FundQuotesRequest) =>
      request<RStockNetInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/stock/getStock`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 获取个股辅助原始信息
    export const useApiFmArticleStockHelpByGet = (params: getStockHelpUsingGETParamReq) =>
      request<RListStockHelpVO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-article/stock/help`,
        data: {},
        params: params
      })
  

    // 查询模板列表
    export const useApiFmArticleTmpListPageByPost = ( body: PageRequestArtTemplateInfoListRequest) =>
      request<RListArtTemplateInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-article/tmp/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  