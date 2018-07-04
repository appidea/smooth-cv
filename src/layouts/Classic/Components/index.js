import Photo from './Photo';
import PersonalData from './PersonalData';
import Plain from './Plain';
import Experience from './Experience';
import Skills from './Skills';

import {PHOTO, PLAIN, EXPERIENCE, PERSONAL_DATA, SKILLS} from '../../../componentsEnum';

const mapping = {
  [PHOTO]: Photo,
  [PLAIN]: Plain,
  [EXPERIENCE]: Experience,
  [PERSONAL_DATA]: PersonalData,
  [SKILLS]: Skills
};

export {
  Photo,
  PersonalData,
  Plain,
  Experience,
  Skills,
  mapping
};
