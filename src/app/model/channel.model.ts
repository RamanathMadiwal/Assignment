export interface Channel {
  _id: string;// Usually -->This will be generated and sent  from server when connected to Mongo DB
  title: string;
  description: string;
  instructorName: string;
  instructorPhotoUrl: string;
  subjectPhotoUrl: string;
  time: number;
}
