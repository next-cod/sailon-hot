import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedLegalPage, type LocalizedDocument } from "@/components/LocalizedLegalPage";
import { legalDetails, legalRegistrationLine } from "@/config/legal-details";

const operator = `${legalDetails.fullName}, ${legalRegistrationLine}`;

const documents = {
  offer: {
    ru: {
      title: "Публичная оферта",
      intro: "Условия предоставления доступа к сервису Сэйлон, бесплатного тестирования и дальнейшего использования платных тарифов.",
      sections: [
        {
          title: "Общие положения и акцепт",
          paragraphs: [
            `${operator}, далее — «Исполнитель», предлагает заключить договор на изложенных ниже условиях. Оферта адресована физическим лицам, индивидуальным предпринимателям и организациям, использующим Сэйлон для работы с обращениями клиентов.`,
            "Акцептом оферты считается регистрация в сервисе, начало бесплатного теста либо оплата согласованного тарифа. Нажатие кнопки на сайте без последующего подтверждения регистрации или заказа не создаёт обязанности оплатить услугу.",
          ],
        },
        {
          title: "Сервис и бесплатный тест",
          paragraphs: [
            "Сэйлон предоставляет программные функции AI-продавца для обработки входящих обращений, настройки знаний, правил, сценариев и каналов связи. Конкретный состав функций определяется выбранным тарифом и интерфейсом сервиса.",
            "Если в интерфейсе доступен бесплатный тест, его продолжительность, объём кредитов и ограничения указываются до начала тестирования. На дату этой редакции сайт сообщает о 14 днях тестирования и 10 000 бесплатных кредитов. Бесплатный тест не продлевается в платный тариф автоматически, если пользователь отдельно не подтвердил иные условия.",
          ],
        },
        {
          title: "Цена и порядок расчётов",
          paragraphs: [
            `Актуальные ориентиры стоимости размещены в разделе тарифов. Окончательные состав услуги, расчётный период и цена подтверждаются до оплаты. Все цены указаны в рублях, ${legalDetails.taxNotice.toLowerCase()}.`,
            `На дату этой редакции сайт не принимает оплату и не сохраняет платёжные данные. Для подключения платного тарифа пользователь связывается с Исполнителем по адресу ${legalDetails.email}; способ оплаты и документы направляются отдельно. Автоматические и периодические списания не производятся.`,
            "Доступ к платному тарифу активируется после подтверждения оплаты согласованным способом. Документы, подтверждающие расчёт, предоставляются в порядке, установленном законодательством.",
          ],
        },
        {
          title: "Права и обязанности сторон",
          paragraphs: [
            "Исполнитель предоставляет доступ к оплаченным функциям, обеспечивает разумные меры защиты и устраняет подтверждённые технические неисправности. Пользователь предоставляет достоверные данные, сохраняет доступ к своей учётной записи и использует сервис законно.",
            "Пользователь самостоятельно отвечает за материалы, инструкции, базы знаний и персональные данные, которые загружает в сервис, а также за законность сообщений своим клиентам. Запрещены мошенничество, спам, нарушение прав третьих лиц, попытки обойти ограничения и вмешательство в работу сервиса.",
          ],
        },
        {
          title: "Отказ, возврат и приостановление",
          paragraphs: [
            `Запрос на прекращение платного доступа, отключение будущих списаний или возврат направляется на ${legalDetails.email}. Обращение должно позволять идентифицировать заказ и плательщика.`,
            "Возврат производится в случаях и размере, предусмотренных законом и условиями конкретного заказа, с учётом уже оказанной части услуги и фактически понесённых расходов. Исполнитель вправе временно ограничить доступ при нарушении оферты, угрозе безопасности или необходимости технических работ, уведомив пользователя доступным способом.",
          ],
        },
        {
          title: "Ответственность и заключительные положения",
          paragraphs: [
            "Сэйлон является программным инструментом и не гарантирует определённое количество продаж, заявок или иной коммерческий результат. Исполнитель отвечает за нарушение обязательств в пределах, установленных применимым законодательством.",
            `Претензии направляются на ${legalDetails.email} или по почтовому адресу ${legalDetails.postalAddress}. К отношениям сторон применяется законодательство Российской Федерации. Новая редакция оферты действует с момента публикации и не изменяет уже оплаченный период задним числом, если иное не предусмотрено законом.`,
          ],
        },
      ],
    },
    en: {
      title: "Public offer",
      intro: "Terms for access to Saleon, the free trial, and subsequent use of paid plans.",
      sections: [
        { title: "General terms and acceptance", paragraphs: [`${operator} (the “Provider”) offers access to Saleon on these terms.`, "The agreement is accepted when the user registers, starts a free trial, or pays for an agreed plan. Clicking a website button alone does not create a payment obligation."] },
        { title: "Service and free trial", paragraphs: ["Saleon provides AI sales-assistant functions for inbound requests, business knowledge, rules, scenarios, and communication channels.", "The interface states the current trial duration and limits. At this revision, the website describes a 14-day trial with 10,000 credits. It does not convert into a paid plan automatically unless the user separately agrees otherwise."] },
        { title: "Price and settlement", paragraphs: [`Plan prices are shown in rubles and ${legalDetails.taxNotice.toLowerCase()}. The final scope, billing period, and price are confirmed before payment.`, `The website does not currently accept payments or store payment details. The user contacts the Provider at ${legalDetails.email} to receive the agreed payment method and documents. There are no automatic or recurring charges.`] },
        { title: "Rights and responsibilities", paragraphs: ["The Provider supplies paid access and takes reasonable security measures. The user supplies accurate details, protects account access, and uses the service lawfully.", "The user is responsible for uploaded materials, instructions, knowledge bases, and the lawful processing of customer data."] },
        { title: "Cancellation and refunds", paragraphs: [`Cancellation, future-charge, and refund requests may be sent to ${legalDetails.email}. Refunds are handled under applicable law and the specific order, taking into account services already supplied and documented costs.`] },
        { title: "Liability and final terms", paragraphs: ["Saleon is a software tool and does not guarantee a specific sales or revenue result.", `Russian law applies. Claims may be sent to ${legalDetails.email} or ${legalDetails.postalAddress}. The Russian text prevails if translations differ.`] },
      ],
    },
  },
  terms: {
    ru: {
      title: "Пользовательское соглашение",
      intro: "Правила использования сайта, учётной записи и функций сервиса Сэйлон.",
      sections: [
        { title: "Статус соглашения", paragraphs: [`Соглашение регулирует использование сайта и сервиса Сэйлон, предоставляемого ${operator}. Используя доступные функции, пользователь подтверждает, что ознакомился с соглашением и обязуется соблюдать его.`] },
        { title: "Учётная запись", paragraphs: ["Пользователь указывает достоверные контактные данные, не передаёт доступ посторонним и незамедлительно сообщает о подозрении на компрометацию учётной записи. Действия, выполненные после корректной авторизации, считаются действиями пользователя, пока не доказано иное."] },
        { title: "Допустимое использование", paragraphs: ["Сервис можно использовать для законной автоматизации общения с клиентами. Нельзя распространять запрещённую информацию, спам, вредоносный код, нарушать права третьих лиц, выдавать ответы AI за обязательные юридические или финансовые гарантии либо пытаться получить несанкционированный доступ к системе."] },
        { title: "Материалы пользователя", paragraphs: ["Пользователь сохраняет права на загруженные материалы и предоставляет Исполнителю право обрабатывать их только в объёме, необходимом для работы сервиса. Пользователь подтверждает наличие законных оснований для загрузки таких материалов и содержащихся в них данных."] },
        { title: "Интеллектуальные права", paragraphs: ["Исключительные права на программный код, интерфейс, дизайн, товарные обозначения и иные элементы Сэйлона принадлежат их правообладателям. Оплата тарифа предоставляет ограниченное право использования функций сервиса и не передаёт исключительные права."] },
        { title: "Изменение и прекращение доступа", paragraphs: ["Исполнитель может обновлять функции и документы, сохраняя оплаченный объём услуг либо предлагая соразмерную замену. Доступ может быть ограничен при нарушении соглашения, угрозе безопасности или технических работах. Вопросы принимаются по адресу поддержки, указанному внизу страницы."] },
      ],
    },
    en: {
      title: "Terms of use",
      intro: "Rules for using the Saleon website, account, and service features.",
      sections: [
        { title: "Status of these terms", paragraphs: [`These terms govern the Saleon website and service provided by ${operator}. By using available functions, the user agrees to follow them.`] },
        { title: "Account", paragraphs: ["Users must provide accurate contact details, keep access secure, and promptly report suspected compromise."] },
        { title: "Acceptable use", paragraphs: ["Saleon may be used for lawful customer communication. Spam, prohibited content, malware, infringement, unauthorized access attempts, and misleading guarantees are prohibited."] },
        { title: "User materials", paragraphs: ["Users retain rights to uploaded materials and allow the Provider to process them only as necessary to operate the service. Users must have lawful grounds to upload those materials and data."] },
        { title: "Intellectual property", paragraphs: ["Payment grants a limited right to use the service. It does not transfer rights to Saleon code, interface, design, or branding."] },
        { title: "Changes and termination", paragraphs: ["The Provider may update functions and documents. Access may be restricted for violations, security threats, or maintenance. The Russian text prevails if translations differ."] },
      ],
    },
  },
  privacy: {
    ru: {
      title: "Политика обработки персональных данных",
      intro: "Как оператор получает, использует, хранит и защищает персональные данные посетителей и пользователей Сэйлона.",
      sections: [
        { title: "Оператор", paragraphs: [`Оператор персональных данных — ${operator}. Адрес регистрации: ${legalDetails.registrationAddress}. Обращения по вопросам персональных данных принимаются по адресу ${legalDetails.email}.`] },
        { title: "Какие данные обрабатываются", paragraphs: ["В зависимости от используемой функции оператор может обрабатывать имя, телефон, электронную почту, сведения о компании и заказе, данные учётной записи, обращения в поддержку, настройки бота и материалы, которые пользователь самостоятельно передаёт сервису.", "При работе сайта и информационных систем могут автоматически фиксироваться технические сведения: IP-адрес, тип браузера и устройства, дата и время обращения, адрес запрошенной страницы и диагностические события. На дату этой редакции оплата на сайте не принимается. После подключения оплаты полные реквизиты банковской карты будет обрабатывать платёжный провайдер; оператору они передаваться не будут."] },
        { title: "Цели и основания", paragraphs: ["Данные используются для регистрации и предоставления доступа, настройки и поддержки сервиса, исполнения договора и расчётов, отправки обязательных уведомлений, обеспечения безопасности, рассмотрения обращений и исполнения требований закона.", "Основаниями обработки являются согласие пользователя, заключение и исполнение договора, обязанности оператора по закону, а также осуществление прав и законных интересов оператора при условии, что права пользователя не нарушаются."] },
        { title: "Действия с данными и получатели", paragraphs: ["Оператор может собирать, записывать, систематизировать, хранить, уточнять, использовать, передавать уполномоченным обработчикам, обезличивать, блокировать и удалять данные с использованием автоматизированных средств и без них.", "Доступ к необходимому объёму данных могут получать поставщики CRM, хостинга, связи, технической поддержки, платёжные организации и иные подрядчики, участвующие в работе сервиса, на основании договора и с обязанностью соблюдать конфиденциальность. Данные также могут быть переданы государственным органам в случаях, установленных законом."] },
        { title: "Хранение и защита", paragraphs: ["Данные хранятся не дольше, чем этого требуют заявленные цели, договор и обязательные сроки по закону. После достижения целей или отзыва согласия данные удаляются, уничтожаются или обезличиваются, если отсутствует иное законное основание для обработки.", "При сборе персональных данных граждан Российской Федерации через интернет оператор обеспечивает выполнение требований о первичной записи и хранении с использованием баз данных, находящихся на территории Российской Федерации. Применяются организационные и технические меры защиты, соответствующие характеру данных и рискам."] },
        { title: "Права пользователя", paragraphs: [`Пользователь может запросить сведения об обработке, уточнение, блокирование или удаление данных, а также отозвать согласие, направив обращение на ${legalDetails.email}. В запросе нужно указать данные, позволяющие идентифицировать заявителя. Отзыв не отменяет обработку, которая необходима по договору или закону. Политика может обновляться; актуальная редакция публикуется на этой странице.`] },
      ],
    },
    en: {
      title: "Personal data policy",
      intro: "How the operator receives, uses, stores, and protects personal data of Saleon visitors and users.",
      sections: [
        { title: "Operator", paragraphs: [`The data operator is ${operator}. Registered address: ${legalDetails.registrationAddress}. Privacy requests may be sent to ${legalDetails.email}.`] },
        { title: "Data processed", paragraphs: ["Depending on the function used, the operator may process a name, phone number, email, company and order details, account data, support requests, bot settings, and materials supplied by the user.", "Technical systems may record an IP address, browser and device type, request time, requested page, and diagnostic events. The website does not currently accept payments. If payment is added later, full bank-card details will be processed by the payment provider and will not be supplied to the operator."] },
        { title: "Purposes and legal grounds", paragraphs: ["Data is used to register users, provide and support the service, perform agreements and payments, send required notices, secure the service, handle requests, and comply with law."] },
        { title: "Processing and recipients", paragraphs: ["Required data may be processed by contracted CRM, hosting, communications, support, and payment providers under confidentiality duties, or disclosed when required by law."] },
        { title: "Retention and security", paragraphs: ["Data is retained only for the relevant purpose, agreement, and mandatory legal periods, then deleted or anonymized unless another lawful ground applies. Reasonable organizational and technical safeguards are used."] },
        { title: "User rights", paragraphs: [`Users may request access, correction, blocking, deletion, or withdrawal of consent at ${legalDetails.email}. The Russian text prevails if translations differ.`] },
      ],
    },
  },
  consent: {
    ru: {
      title: "Согласие на обработку персональных данных",
      intro: "Отдельное согласие пользователя на обработку сведений, передаваемых через формы сайта, регистрацию и обращения в поддержку.",
      sections: [
        { title: "Кому предоставляется согласие", paragraphs: [`Согласие предоставляется оператору: ${operator}. Адрес регистрации: ${legalDetails.registrationAddress}.`] },
        { title: "Перечень данных", paragraphs: ["Согласие распространяется на имя, номер телефона, адрес электронной почты, сведения о компании и запросе, а также иные данные, которые пользователь добровольно указывает в форме или передаёт при обращении."] },
        { title: "Цели обработки", paragraphs: ["Данные обрабатываются для ответа на обращение, регистрации, предоставления бесплатного теста, создания учётной записи, подключения и настройки сервиса, заключения и исполнения договора и оказания поддержки."] },
        { title: "Разрешённые действия", paragraphs: ["Пользователь разрешает сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу уполномоченным подрядчикам в необходимом объёме, обезличивание, блокирование, удаление и уничтожение данных с применением средств автоматизации и без них."] },
        { title: "Срок действия", paragraphs: ["Согласие действует до достижения целей обработки или до его отзыва, если обработка не должна продолжаться по договору или закону. Обязательные бухгалтерские и иные документы хранятся в течение сроков, установленных законодательством."] },
        { title: "Отзыв согласия", paragraphs: [`Отозвать согласие можно письмом на ${legalDetails.email} или по адресу ${legalDetails.postalAddress}. В обращении следует указать имя и контакт, использованный при передаче данных. Оператор прекращает обработку в установленный законом срок, если не имеется иного правового основания.`] },
      ],
    },
    en: {
      title: "Personal data consent",
      intro: "Separate consent for data submitted through website forms, registration, and support requests.",
      sections: [
        { title: "Operator", paragraphs: [`Consent is given to ${operator}, registered at ${legalDetails.registrationAddress}.`] },
        { title: "Data covered", paragraphs: ["Consent covers a name, phone number, email, company and request details, and other data voluntarily submitted by the user."] },
        { title: "Purposes", paragraphs: ["Data may be used to answer the request, register the user, provide a trial, create an account, configure the service, perform the agreement, and provide support."] },
        { title: "Permitted processing", paragraphs: ["The operator may collect, record, organize, store, update, retrieve, use, disclose to authorized contractors as necessary, anonymize, block, delete, and destroy the data."] },
        { title: "Duration", paragraphs: ["Consent remains effective until the purposes are achieved or consent is withdrawn, unless continued processing is required by an agreement or law."] },
        { title: "Withdrawal", paragraphs: [`Consent may be withdrawn at ${legalDetails.email} or ${legalDetails.postalAddress}. The request should identify the user and the contact originally supplied.`] },
      ],
    },
  },
  cookies: {
    ru: {
      title: "Политика использования файлов cookie",
      intro: "Как сайт Сэйлона использует cookie и аналогичные технологии браузера.",
      sections: [
        { title: "Текущее использование", paragraphs: ["На дату этой редакции сайт не использует рекламные или аналитические cookie. Для сохранения выбранного языка и однократного показа отдельных элементов интерфейса браузер может использовать локальное и сессионное хранилище. Эти записи не предназначены для отслеживания пользователя на других сайтах."] },
        { title: "Необходимые технологии", paragraphs: ["После подключения регистрации, CRM и оплаты могут использоваться строго необходимые cookie или аналогичные записи для авторизации, защиты сессии, предотвращения мошенничества, сохранения настроек и корректной работы платёжного сценария. Без них отдельные функции могут не работать."] },
        { title: "Аналитика и реклама", paragraphs: ["Если на сайте появятся системы аналитики, рекламные пиксели или иные необязательные технологии, политика будет обновлена, а пользователю будет предоставлен предусмотренный законом способ управления согласием до их применения."] },
        { title: "Срок хранения", paragraphs: ["Сессионные записи удаляются после завершения сессии браузера. Постоянные записи сохраняются только на срок, необходимый для соответствующей функции, либо до удаления пользователем. Конкретные сроки сторонних сервисов указываются после их подключения."] },
        { title: "Управление настройками", paragraphs: ["Пользователь может удалить cookie и данные сайтов в настройках браузера, запретить их сохранение или использовать приватный режим. Ограничение необходимых технологий может привести к выходу из учётной записи или недоступности части функций."] },
        { title: "Контакты и обновления", paragraphs: [`Вопросы можно направить на ${legalDetails.email}. Актуальная версия политики всегда размещается на этой странице.`] },
      ],
    },
    en: {
      title: "Cookie policy",
      intro: "How the Saleon website uses cookies and similar browser technologies.",
      sections: [
        { title: "Current use", paragraphs: ["At this revision, the website does not use advertising or analytics cookies. Local and session storage may retain the selected language and prevent repeated display of certain interface elements."] },
        { title: "Essential technologies", paragraphs: ["When registration, CRM, and payment functions are connected, essential cookies or similar records may be used for authorization, session security, fraud prevention, preferences, and checkout operation."] },
        { title: "Analytics and advertising", paragraphs: ["If optional analytics or advertising technologies are added, this policy will be updated and legally required controls will be provided before they are used."] },
        { title: "Retention", paragraphs: ["Session records are removed after the browser session. Persistent records are kept only as long as required for their function or until the user deletes them."] },
        { title: "Browser controls", paragraphs: ["Users may delete or block site data in browser settings. Blocking essential technologies may prevent some functions from working."] },
        { title: "Contact and updates", paragraphs: [`Questions may be sent to ${legalDetails.email}. The Russian text prevails if translations differ.`] },
      ],
    },
  },
} satisfies Record<string, LocalizedDocument>;

type DocumentSlug = keyof typeof documents;

export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const document = documents[slug as DocumentSlug];
  return { title: document ? `${document.ru.title} — Сэйлон` : "Документ — Сэйлон" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const document = documents[slug as DocumentSlug];
  if (!document) notFound();

  return <LocalizedLegalPage document={document} />;
}
