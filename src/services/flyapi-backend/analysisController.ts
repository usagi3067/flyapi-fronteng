// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterfaceInfo GET /api/analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO>('/api/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listTopInvokeUser GET /api/analysis/top/user/invoke */
export async function listTopInvokeUserUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserVO>('/api/analysis/top/user/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
