/* eslint-disable */
  import {AudioDTO, IceMaterialInfoDTO, IceMaterialInfoVO, IceVideoResultListRequest, IceVideoResultListVO, ImageDTO, MaterialRequest, OpdUnstructuredOperationDetailDTO, OpdUnstructuredOperationListRequest, OpdUnstructuredOptionListVO, Page, PageRequestIceVideoResultListRequest, PageRequestOpdUnstructuredOperationListRequest, RecommendMediaDTO, ResultIceMaterialInfoVO, ResultListIceMaterialInfoVO, ResultListIceVideoResultListVO, ResultListOpdUnstructuredOptionListVO, ResultListRecommendMediaDTO, ResultOpdUnstructuredOperationDetailDTO, ResultUnstructuredVideoPartDTO, ResultVoid, ResultLong, ResultString, RIceMaterialInfoVO, RListIceMaterialInfoVO, RListIceVideoResultListVO, RListOpdUnstructuredOptionListVO, RListRecommendMediaDTO, ROpdUnstructuredOperationDetailDTO, RUnstructuredVideoPartDTO, RVoid, RLong, RString, SubtitleDTO, TextToVideoOperationDataDTO, UnstructuredPartAddRequest, UnstructuredVideoPartDTO, uploadImgApiUsingPOSTParamReq, txtSearchImagesUsingGETParamReq} from "../types/fm-video";
  import request from "@/utils/request";
  type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string

    // 查询默认媒资
    export const useApiFmVideoMediaDefaultMediaByPost = ( body: MaterialRequest) =>
      request<RIceMaterialInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/media/defaultMedia`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 新增素材
    export const useApiFmVideoMediaInsertByPost = ( body: IceMaterialInfoDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/media/insert`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 查询媒资列表
    export const useApiFmVideoMediaListByPost = ( body: MaterialRequest) =>
      request<RListIceMaterialInfoVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/media/list`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 注册媒资
    export const useApiFmVideoMediaRegisterByPost = ( body: IceMaterialInfoDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/media/register`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 新增或更新素材-MediaUrl
    export const useApiFmVideoMediaSaveOrUpdateByUrlByPost = ( body: IceMaterialInfoDTO) =>
      request<RVoid>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/media/saveOrUpdateByUrl`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 上传背景音乐素材
    export const useApiFmVideoMediaUploadBackAudioByPost = ( body: unknown) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'multipart/form-data'
        },
        url: `/fm-video/media/uploadBackAudio`,
        data: body,
        params: {}
      })
  

    // 上传图片素材
    export const useApiFmVideoMediaUploadImgByPost = ( body: unknown) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'multipart/form-data'
        },
        url: `/fm-video/media/uploadImg`,
        data: body,
        params: {}
      })
  

    // 上传图片素材-算法侧
    export const useApiFmVideoMediaUploadImgApiByPost = (params: uploadImgApiUsingPOSTParamReq,  body: unknown) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'multipart/form-data'
        },
        url: `/fm-video/media/uploadImgApi`,
        data: body,
        params: params
      })
  

    // 非结构运营-新增片段
    export const useApiFmVideoUnstructuredAddPartByPost = ( body: UnstructuredPartAddRequest) =>
      request<RUnstructuredVideoPartDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/unstructured/addPart`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 删除非结构运营
    export const useApiFmVideoUnstructuredDeleteIdByDelete = (id: int64) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-video/unstructured/delete/${id}`,
        data: {},
        params: {}
      })
  

    // 非结构运营详情
    export const useApiFmVideoUnstructuredDetailIdByGet = (id: int64) =>
      request<ROpdUnstructuredOperationDetailDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-video/unstructured/detail/${id}`,
        data: {},
        params: {}
      })
  

    // 非结构运营列表
    export const useApiFmVideoUnstructuredListPageByPost = ( body: PageRequestOpdUnstructuredOperationListRequest) =>
      request<RListOpdUnstructuredOptionListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/unstructured/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 视频合成
    export const useApiFmVideoUnstructuredMergeIdByGet = (id: int64) =>
      request<RVoid>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-video/unstructured/merge/${id}`,
        data: {},
        params: {}
      })
  

    // 新增非结构运营
    export const useApiFmVideoUnstructuredSaveByPost = ( body: OpdUnstructuredOperationDetailDTO) =>
      request<RLong>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/unstructured/save`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 关键字搜图
    export const useApiFmVideoUnstructuredTxtSearchImagesByGet = (params: txtSearchImagesUsingGETParamReq) =>
      request<RListRecommendMediaDTO>({
        method: 'get',
        headers: {
          
        },
        url: `/fm-video/unstructured/txtSearchImages`,
        data: {},
        params: params
      })
  

    // 修改非结构运营
    export const useApiFmVideoUnstructuredUpdateByPut = ( body: OpdUnstructuredOperationDetailDTO) =>
      request<RVoid>({
        method: 'put',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/unstructured/update`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 视频成片列表
    export const useApiFmVideoVideoListPageByPost = ( body: PageRequestIceVideoResultListRequest) =>
      request<RListIceVideoResultListVO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-video/video/listPage`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // 删除视频成片
    export const useApiFmVideoVideoIdByDelete = (id: int64) =>
      request<RVoid>({
        method: 'delete',
        headers: {
          
        },
        url: `/fm-video/video/${id}`,
        data: {},
        params: {}
      })
  