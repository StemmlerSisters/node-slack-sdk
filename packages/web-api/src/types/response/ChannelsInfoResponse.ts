/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import type { WebAPICallResult } from '../../WebClient';
export type ChannelsInfoResponse = WebAPICallResult & {
  channel?: Channel;
  error?: string;
  needed?: string;
  ok?: boolean;
  provided?: string;
};

export interface Channel {
  created?: number;
  creator?: string;
  id?: string;
  is_archived?: boolean;
  is_channel?: boolean;
  is_general?: boolean;
  is_member?: boolean;
  is_mpim?: boolean;
  is_org_shared?: boolean;
  is_private?: boolean;
  is_shared?: boolean;
  last_read?: string;
  latest?: Latest;
  members?: string[];
  name?: string;
  name_normalized?: string;
  previous_names?: string[];
  purpose?: Purpose;
  topic?: Purpose;
  unlinked?: number;
  unread_count?: number;
  unread_count_display?: number;
}

export interface Latest {
  attachments?: Attachment[];
  blocks?: Block[];
  bot_id?: string;
  display_as_bot?: boolean;
  edited?: Edited;
  files?: File[];
  subtype?: string;
  text?: string;
  ts?: string;
  type?: string;
  upload?: boolean;
  user?: string;
  username?: string;
  x_files?: string[];
}

export interface Attachment {
  actions?: Action[];
  app_unfurl_url?: string;
  author_icon?: string;
  author_link?: string;
  author_name?: string;
  author_subname?: string;
  bot_id?: string;
  callback_id?: string;
  channel_id?: string;
  channel_name?: string;
  color?: string;
  fallback?: string;
  fields?: Field[];
  filename?: string;
  footer?: string;
  footer_icon?: string;
  from_url?: string;
  id?: number;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  indent?: boolean;
  is_app_unfurl?: boolean;
  is_msg_unfurl?: boolean;
  is_reply_unfurl?: boolean;
  is_thread_root_unfurl?: boolean;
  metadata?: Metadata;
  mimetype?: string;
  mrkdwn_in?: string[];
  msg_subtype?: string;
  original_url?: string;
  pretext?: string;
  service_icon?: string;
  service_name?: string;
  service_url?: string;
  size?: number;
  text?: string;
  thumb_height?: number;
  thumb_url?: string;
  thumb_width?: number;
  title?: string;
  title_link?: string;
  ts?: string;
  url?: string;
  video_html?: string;
  video_html_height?: number;
  video_html_width?: number;
}

export interface Action {
  confirm?: ActionConfirm;
  data_source?: string;
  id?: string;
  min_query_length?: number;
  name?: string;
  option_groups?: OptionGroup[];
  options?: Option[];
  selected_options?: Option[];
  style?: string;
  text?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface ActionConfirm {
  dismiss_text?: string;
  ok_text?: string;
  text?: string;
  title?: string;
}

export interface OptionGroup {
  text?: string;
}

export interface Option {
  text?: string;
  value?: string;
}

export interface Field {
  short?: boolean;
  title?: string;
  value?: string;
}

export interface Metadata {
  extension?: string;
  format?: string;
  original_h?: number;
  original_w?: number;
  rotation?: number;
  thumb_160?: boolean;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_64?: boolean;
  thumb_80?: boolean;
  thumb_tiny?: string;
}

export interface Block {
  accessory?: Accessory;
  alt_text?: string;
  block_id?: string;
  elements?: Element[];
  fallback?: string;
  fields?: Text[];
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  text?: Text;
  title?: Text;
  type?: string;
}

export interface Accessory {
  alt_text?: string;
  fallback?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  type?: string;
}

export interface Element {
  action_id?: string;
  alt_text?: string;
  confirm?: ElementConfirm;
  fallback?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  initial_channel?: string;
  initial_conversation?: string;
  initial_date?: string;
  initial_option?: InitialOption;
  initial_user?: string;
  min_query_length?: number;
  placeholder?: Text;
  style?: string;
  text?: Text;
  type?: string;
  url?: string;
  value?: string;
}

export interface ElementConfirm {
  confirm?: Text;
  deny?: Text;
  text?: Text;
  title?: Text;
}

export interface Text {
  emoji?: boolean;
  text?: string;
  type?: string;
  verbatim?: boolean;
}

export interface InitialOption {
  description?: Text;
  text?: Text;
  url?: string;
  value?: string;
}

export interface Edited {
  ts?: string;
  user?: string;
}

export interface File {
  created?: number;
  display_as_bot?: boolean;
  edit_link?: string;
  editable?: boolean;
  external_type?: string;
  filetype?: string;
  has_rich_preview?: boolean;
  id?: string;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  lines?: number;
  lines_more?: number;
  mimetype?: string;
  mode?: string;
  name?: string;
  permalink?: string;
  permalink_public?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  public_url_shared?: boolean;
  size?: number;
  timestamp?: number;
  title?: string;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  username?: string;
}

export interface Purpose {
  creator?: string;
  last_set?: number;
  value?: string;
}
