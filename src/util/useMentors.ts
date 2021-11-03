import { useState, useEffect } from 'react';
import { Mentor } from './types';
import { getMentors } from './api';

const useMentors = () : Mentor[] => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  useEffect(() => {
    const retrieveMentors = async () => {
      const json : Mentor[] = await getMentors();
      setMentors(json);
    };
    retrieveMentors();
  }, [setMentors]);
  return mentors;
};

export default useMentors;
