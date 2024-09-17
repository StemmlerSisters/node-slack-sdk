/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import type { WebAPICallResult } from '../../WebClient';
export type AdminEmojiListResponse = WebAPICallResult & {
  emoji?: { [key: string]: Emoji };
  error?: string;
  needed?: string;
  ok?: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Emoji {
  date_created?: number;
  uploaded_by?: string;
  url?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
