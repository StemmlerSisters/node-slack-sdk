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
export type BookmarksEditResponse = WebAPICallResult & {
  bookmark?: Bookmark;
  error?: string;
  needed?: string;
  ok?: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Bookmark {
  app_action_id?: string;
  app_id?: string;
  channel_id?: string;
  date_created?: number;
  date_updated?: number;
  emoji?: string;
  entity_id?: string;
  icon_url?: string;
  id?: string;
  last_updated_by_team_id?: string;
  last_updated_by_user_id?: string;
  link?: string;
  rank?: string;
  shortcut_id?: string;
  title?: string;
  type?: string;
}

export interface ResponseMetadata {
  messages?: string[];
}
