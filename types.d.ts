export interface Project {
  id: string;
  title: string;
  image: string;
  github: ?string;
  link: string;
  description: string;
  longDescription: string;
  tags: ?string[];
  topics: ?string[];
}

export type ProjectContextType = {
  projects: Project[];
  saveProjects: (projects: Project[]) => void;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export type AppStore = {
  isDark: boolean;
  projects: Project[] | null;
};

export type AppStoreContext = [
  state: AppStore,
  setState: (state: AppStore) => void
];

export type ISkillCard = { id: number; title: string; description: string };
export interface ITagColors {
  tag: string;
  class: string;
}

export interface IZoomPayload {
  agenda: string;
  default_password: boolean;
  duration: string | number;
  password: string;
  pre_schedule: boolean;
  schedule_for: string;
  settings: Settings;
  start_time: string;
  template_id: string;
  timezone: string;
  topic: string;
}
export interface Settings {
  allow_multiple_devices: boolean;
  alternative_hosts_email_notification: boolean;
  close_registration: boolean;
  contact_email: string;
  contact_name: string;
  email_notification: boolean;
  encryption_type: string;
  host_video: boolean;
  join_before_host: boolean;
  meeting_authentication: boolean;
  meeting_invitees?: MeetingInviteesEntity[] | null;
  mute_upon_entry: boolean;
  participant_video: boolean;
  private_meeting: boolean;
  registrants_confirmation_email: boolean;
  registrants_email_notification: boolean;
  registration_type: number;
  show_share_button: boolean;
  use_pmi: boolean;
  waiting_room: boolean;
  watermark: boolean;
  host_save_video_order: boolean;
  alternative_host_update_polls: boolean;
}
export interface MeetingInviteesEntity {
  email: string;
}

export type TUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  type: number;
  pmi: number;
  timezone: string;
  verified: number;
  created_at: string;
  last_login_time: string;
  pic_url: string;
  language: string;
  phone_number: string;
  status: string;
  role_id: string;
};

export type TMeetingForm = {
  password: string;
  showPassword: boolean;
  topic: string;
};
