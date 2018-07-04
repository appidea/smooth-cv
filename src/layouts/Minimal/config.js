import { PERSONAL_DATA, PHOTO, EXPERIENCE, PLAIN, SKILLS } from '../../componentsEnum';
import { mapping } from './Components';

const config = {
  id: 'minimal',
  name: 'Minimalizm',
  componentMapping: mapping,
  zones: [
    {
      id: 1,
      accepts: [
        PERSONAL_DATA, PHOTO
      ],
      max: 2
    },
    {
      id: 2,
      accepts: [
        EXPERIENCE, SKILLS
      ],
      max: 1
    },
    {
      id: 3,
      accepts: [
        SKILLS
      ],
      max: 1
    },
    {
      id: 4,
      accepts: [
        PLAIN
      ],
      max: 3
    }
  ]
};

export default config;
