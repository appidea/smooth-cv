import {PERSONAL_DATA, PHOTO, EXPERIENCE, PLAIN, SKILLS} from '../componentsEnum';

const defaultState = [
  {
    id: PERSONAL_DATA,
    description: {
      icon: 'far fa-id-card',
      name: 'Dane osobiste',
      longtext: 'Ten komponent służy do prezentacji danych osobistych: imienia, nazwiska, telefonu, opcjonalnie również daty urodzenia.'
    },
    firstName: 'Imię',
    lastName: 'Nazwisko',
    birthdate: 'Data urodzenia',
    address: 'Adres',
    email: 'Email',
    tel: 'Telefon'
  },
  {
    id: PHOTO,
    description: {
      icon: 'fas fa-camera-retro',
      name: 'Zdjęcie/obraz',
      longtext: 'Ten komponent służy do prezentacji wybranego przez siebie zdjęcia / obrazu. Może być zastosowany do prezentacji sylwetki bądź jako element ozdobny'
    },
    url: ''
  },
  {
    id: EXPERIENCE,
    description: {
      icon: 'fab fa-black-tie',
      name: 'Doświadczenie',
      longtext: 'Komponent ten służy do prezentacji dokonań osoby w dowolnym okresie czasowym. Może służyć jako np. prezentacja doświadczenia zawodowego bądź toku edukacji.'
    },
    entries: [
      {
        yearFrom: 2010,
        yearTo: 2012,
        place: 'Firma',
        role: 'Pozycja'
      }
    ]
  },
  {
    id: SKILLS,
    description: {
      icon: 'fas fa-wrench',
      name: 'Umiejętności',
      longtext: 'Komponent ten służy do prezentacji umiejętności.'
    },
    entries: [
      {
        thing: 'JavaScript',
        year: '2001',
        level: 5,
        logo: ''
      }
    ]
  },
  {
    id: PLAIN,
    description: {
      icon: 'fas fa-font',
      name: 'Pole tekstowe',
      longtext: 'Komponent ten służy do prezentacji dowolnego tekstu. Tekst ten można formatować tj. pogrubiać, pochylać itd.'
    },
    content: ''
  }
];

const components = (state = defaultState, params) => {
  switch (params.type) {
    default:
      return state;
  }
};

export default components;
