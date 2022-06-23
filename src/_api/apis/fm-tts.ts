/* eslint-disable */
  import {Page, ResultVideoTaskDTO, ResultString, RVideoTaskDTO, RString, SyncVideoBodyVO, VideoBodyVO, VideoTaskDTO} from "../types/fm-tts";
  import request from "@/utils/request";
  type int32 = number;
type integer = number;
type int64 = (number | string);
type double = number;
type datetime = string

    // getVoiceByTextWithDq
    export const useApiFmTtsTtsDqTtsByPost = ( body: VideoBodyVO) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-tts/tts/dq-tts`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // getVoiceByTextSync
    export const useApiFmTtsTtsSyncTtsByPost = ( body: SyncVideoBodyVO) =>
      request<RVideoTaskDTO>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-tts/tts/sync/tts`,
        data: JSON.stringify(body),
        params: {}
      })
  

    // getVoiceByText
    export const useApiFmTtsTtsTtsByPost = ( body: VideoBodyVO) =>
      request<RString>({
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        url: `/fm-tts/tts/tts`,
        data: JSON.stringify(body),
        params: {}
      })
  