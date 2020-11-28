export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type FileType = 'resume' | 'photo' | 'blobstore';
export type RegistrationType = {
  firstName: string;
  lastName: string;
  timezone: string;
  email: string;
  location: string;
  gender: string | null;
  race: Array<any>; // NOTE: ignore the nullable part; race will always be a (non-null) array
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
  hasInternship: boolean;
  resumeFilename: string | null;
};

export interface EventType {
  name: string;
  description: string;
  startTime: number;
  endTime: number;
  locations: [
    {
      description: string;
      tags: string[];
      latitude: number;
      longitude: number;
    },
  ];
  sponsor: string;
  eventType: string;
}

export interface EventResType extends EventType {
  id: string;
}

export type DayType = {
  date: Date;
  dayOfWeek: string;
  month: string;
  dayOfMonth: number;
  events: EventType[];
};

export type WeekType = {
  index?: number;
  date: Date;
};
