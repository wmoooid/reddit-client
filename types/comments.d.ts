export type CommentsResponsePostInfoType = {
  kind: 't3';
  data: {
    approved_at_utc: null;
    subreddit: string;
    selftext: string;
    user_reports: never[];
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: never[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: string;
    parent_whitelist_status: string;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: {};
    thumbnail_width: number;
    author_flair_template_id: string;
    is_original_content: boolean;
    author_fullname: string;
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: {};
    link_flair_text: null;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: [];
    gildings: { gid_1: number };
    post_hint: string;
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: {
      images: {
        source: { url: string; width: number; height: number };
        resolutions: { url: string; width: number; height: number }[];
        variants: {
          gif: {
            source: { url: string; width: number; height: number };
            resolutions: { url: string; width: number; height: number }[];
          };
          mp4: {
            source: { url: string; width: number; height: number };
            resolutions: { url: string; width: number; height: number }[];
          };
        };
        id: string;
      }[];
      enabled: boolean;
    };
    all_awardings: {
      giver_coin_reward: null;
      subreddit_id: null;
      is_new: boolean;
      days_of_drip_extension: number;
      coin_price: number;
      id: string;
      penny_donate: null;
      coin_reward: number;
      icon_url: string;
      days_of_premium: number;
      icon_height: number;
      tiers_by_required_awardings: null;
      resized_icons: { url: string; width: number; height: number }[];
      icon_width: number;
      static_icon_width: number;
      start_date: null;
      is_enabled: boolean;
      awardings_required_to_grant_benefits: null;
      description: string;
      end_date: null;
      subreddit_coin_reward: number;
      count: number;
      static_icon_height: number;
      name: string;
      resized_static_icons: { url: string; width: number; height: number }[];
      icon_format: null;
      award_sub_type: string;
      penny_price: null;
      award_type: string;
      static_icon_url: string;
    }[];
    awarders: never[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    treatment_tags: never[];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    num_duplicates: number;
    report_reasons: null;
    author: string;
    discussion_type: null;
    num_comments: number;
    send_replies: boolean;
    media: {
      reddit_video: {
        bitrate_kbps: number;
        fallback_url: string;
        height: number;
        width: number;
        scrubber_media_url: string;
        dash_url: string;
        duration: number;
        hls_url: string;
        is_gif: boolean;
        transcoding_status: string;
      };
    };
    contest_mode: boolean;
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    mod_reports: never[];
    is_video: boolean;
  };
};

export type CommentsResponseCommentsType = {
  kind: 'Listing';
  data: {
    after: null;
    dist: null;
    modhash: null;
    geo_filter: string;
    children: {
      kind: 't1';
      data: {
        subreddit_id: string;
        approved_at_utc: null;
        author_is_blocked: boolean;
        comment_type: null;
        awarders: any[];
        mod_reason_by: null;
        banned_by: null;
        author_flair_type: string;
        total_awards_received: number;
        subreddit: string;
        author_flair_template_id: null;
        likes: null;
        replies: string;
        user_reports: any[];
        saved: boolean;
        id: string;
        banned_at_utc: null;
        mod_reason_title: null;
        gilded: number;
        archived: boolean;
        collapsed_reason_code: null;
        no_follow: boolean;
        author: string;
        can_mod_post: boolean;
        created_utc: number;
        send_replies: boolean;
        parent_id: string;
        score: number;
        author_fullname: string;
        approved_by: null;
        mod_note: null;
        all_awardings: any[];
        collapsed: boolean;
        body: string;
        edited: boolean;
        top_awarded_type: null;
        author_flair_css_class: null;
        name: string;
        is_submitter: boolean;
        downs: number;
        author_flair_richtext: any[];
        author_patreon_flair: boolean;
        body_html: string;
        removal_reason: null;
        collapsed_reason: null;
        distinguished: string;
        associated_award: null;
        stickied: boolean;
        author_premium: boolean;
        can_gild: boolean;
        gildings: {};
        unrepliable_reason: null;
        author_flair_text_color: null;
        score_hidden: boolean;
        permalink: string;
        subreddit_type: string;
        locked: boolean;
        report_reasons: null;
        created: number;
        author_flair_text: null;
        treatment_tags: any[];
        link_id: string;
        subreddit_name_prefixed: string;
        controversiality: number;
        depth: number;
        author_flair_background_color: null;
        collapsed_because_crowd_control: null;
        mod_reports: any[];
        num_reports: null;
        ups: number;
      };
    }[];
    before: null;
  };
};
