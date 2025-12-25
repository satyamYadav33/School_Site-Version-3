
export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Holiday';
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  type: 'image' | 'video';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum ProgramLevel {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
  SENIOR_SECONDARY = 'Senior Secondary'
}
