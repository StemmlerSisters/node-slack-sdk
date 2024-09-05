/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import type { WebAPICallResult } from '../../WebClient';
export type AuthTeamsListResponse = WebAPICallResult & {
  error?: string;
  needed?: string;
  ok?: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  teams?: Team[];
};

export interface ResponseMetadata {
  next_cursor?: string;
}

export interface Team {
  icon?: Icon;
  id?: string;
  name?: string;
}

export interface Icon {
  image_102?: string;
  image_132?: string;
  image_230?: string;
  image_34?: string;
  image_44?: string;
  image_68?: string;
  image_88?: string;
  image_default?: boolean;
}
