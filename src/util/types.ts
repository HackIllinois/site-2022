export type WithId<Type> = Type & { id: string; };

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type FileType = 'resume' | 'photo' | 'blobstore';

export type RegistrationType = {
  firstName: string;
  lastName: string;
  timezone: string;
  email: string;
  location: string;
  gender?: string;
  race: string[];
  degreePursued:
  | 'ASSOCIATES'
  | 'BACHELORS'
  | 'MASTERS'
  | 'PHD'
  | 'GRADUATED'
  | 'OTHER';
  graduationYear: number;
  school: string;
  major: string;
  programmingYears: number;
  programmingAbility: number;
  hasInternship?: 'YES' | 'NO';
  resumeFilename?: string;
};

export type RegistrationRole = 'attendee' | 'mentor';

export interface EventType {
  id: string;
  name: string;
  description: string;
  startTime: number;
  endTime: number;
  locations: {
    description: string;
    tags: string[];
    latitude: number;
    longitude: number;
  }[];
  sponsor?: string;
  eventType: string;
}

export type DayType = {
  date: Date;
  dayOfWeek: string;
  month: string;
  dayOfMonth: number;
  events: EventType[];
};

export type WeekType = {
  date: Date;
  index?: number;
};

export type PrizeType = {
  name: string;
  description: string;
  sponsor: string;
};

export type MentorTimeslotType = {
  id: number;
  text: string;
  email: string;
  start_date: string;
  end_date: string;
};

export type RSVPType = {
  isAttending: boolean;
};

export type ProfileType = Partial<{
  firstName: string;
  lastName: string;
  timezone: string;
  discord: string;
  avatarUrl: string;
  teamStatus: 'LOOKING_FOR_TEAM' | 'LOOKING_FOR_MEMBERS' | 'NOT_LOOKING';
  interests: string[];
  description: string;
}>;

export type ProfileResponseType = WithId<Required<ProfileType>> & { points: number };

export type ZoomLinks = {
  [id: string]: string;
};
