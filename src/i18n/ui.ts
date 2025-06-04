export const languages = {
  en: 'EN',
  nl: 'NL',
}

export const defaultLang = 'en'
export const showDefaultLang = false

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.booking': 'Booking',
    'nav.facilities': 'Facilities',
    'nav.photos': 'Photos',
    'nav.contact': 'Contact',
    'nav.cancellation-terms': 'Cancellation Terms',
    'index.section.facilities.title': 'Facilities',
    'index.section.facilities.text':
      'Amenities and features available for tenants, both within the individual apartment unit and in the building or complex.',
    'index.section.booking.title': 'Booking',
    'index.section.booking.text': 'Book your time in our appartmnt right now',
    'index.section.photos.title': 'Photos',
    'index.section.photos.text':
      'Take a look in our extensive gallery of photos from our beautiful apartment.',
    'index.section.button': 'Read More',
  },
  nl: {
    'nav.booking': 'Boeking',
    'nav.facilities': 'Faciliteiten',
    'nav.photos': 'Fotos',
    'nav.cancellation-terms': 'Annuleringsvoorwaarden',
    'index.section.facilities.title': 'Faciliteiten',
    'index.section.facilities.text':
      'Voorzieningen en functies beschikbaar voor huurders, zowel in de individuele appartementseenheid als in het gebouw of complex.',
    'index.section.booking.title': 'Booking',
    'index.section.booking.text': 'Boek nu uw tijd in ons appartement.',
    'index.section.photos.title': 'Photos',
    'index.section.photos.text':
      'Neem een kijkje in onze uitgebreide fotogalerij van ons prachtige appartement.',
    'index.section.button': 'Lees Meer',
  },
} as const

export const routes = {
  en: {
    booking: 'booking',
    facilities: 'facilities',
    photos: 'photos',
    contact: 'contact',
    'cancellation-terms': 'cancellation-terms',
  },
  nl: {
    booking: 'boeking',
    facilities: 'faciliteiten',
    photos: 'fotos',
    contact: 'contact',
    'cancellation-terms': 'annuleringsvoorwaarden',
  },
}
