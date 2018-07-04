import { PERSONAL_DATA, PHOTO, EXPERIENCE, PLAIN, SKILLS } from '../../componentsEnum';
import { mapping } from './Components';

const config = {
  id: 'modern',
  name: 'Nowatorski',
  componentMapping: mapping,
  zones: [
    {
      id: 1,
      accepts: [
        PERSONAL_DATA
      ],
      max: 1
    },
    {
      id: 2,
      accepts: [
        EXPERIENCE
      ],
      max: 1
    },
    {
      id: 3,
      accepts: [
        EXPERIENCE, SKILLS
      ],
      max: 1
    },
    {
      id: 4,
      accepts: [
        PLAIN
      ],
      max: 1
    }
  ]
};

export default config;
