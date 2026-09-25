export const legalDetails = {
  brand: "Сэйлон",
  fullName: "Индивидуальный предприниматель Уланова Татьяна Сергеевна",
  shortName: "ИП Уланова Татьяна Сергеевна",
  inn: "519041595280",
  ogrnip: "318519000023900",
  registrationAddress: "183038, г. Мурманск, пр-кт Ленина, д. 24, кв. 39",
  postalAddress: "183031, г. Мурманск, ул. Свердлова, д. 44, корп. 1",
  phone: "+7 (911) 337-77-55",
  phoneHref: "tel:+79113377755",
  email: "ulanova-ts@yandex.ru",
  emailHref: "mailto:ulanova-ts@yandex.ru",
  taxNotice: "Без НДС",
  effectiveDate: "25 сентября 2026 г.",
} as const;

export const legalRegistrationLine = `ИНН ${legalDetails.inn} · ОГРНИП ${legalDetails.ogrnip}`;
