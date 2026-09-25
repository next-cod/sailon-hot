import type { SiteLanguage } from "./use-site-language";

const en: Record<string, string> = {
  "Сэйлон": "Saleon",
  "Как отвечает": "How it responds",
  "Настройка": "Setup",
  "Сценарии": "Scenarios",
  "Тарифы": "Pricing",
  "Вопросы": "Questions",
  "Попробовать бесплатно": "Try for free",
  "Начать бесплатный тест": "Start free trial",
  "Поразговаривать с ботом": "Chat with the bot",
  "с характером*": "with personality*",
  "AI-бот для продаж,": "An AI sales bot,",
  "от первого сообщения": "from the first message",
  "до заявки": "to a qualified lead",
  "Отвечает клиентам 24/7 по базе вашего бизнеса, помогает разобраться и переводит к следующему шагу": "Answers customers 24/7 using your business knowledge, helps them decide, and guides them to the next step",
  "Клиент": "Customer",
  "- выбирает формат": "— choosing an option",
  "Отвечает Ai-бот": "AI bot is replying",
  "Хочу попробовать, но немного переживаю - вдруг бот будет отвечать клиентам": "I want to try it, but I am a little worried the bot might reply to customers",
  "как-то не так": "the wrong way",
  "Понимаю ваше переживание. Я общаюсь": "I understand your concern. I speak",
  "по вашей базе и подстраиваюсь под стиль вашего бизнеса": "using your knowledge base and adapt to your business tone",
  "А если вопрос будет какой-то нестандартный?": "What if the question is unusual?",
  "Разберусь в смысле и контексте, чтобы ответ был уместным и понятным, если нужно, передам менеджеру": "I will understand the meaning and context so the answer is relevant and clear. If needed, I will hand it over to a manager",
  "Нешаблонные ответы": "Natural, non-scripted replies",
  "на основе вашего бизнеса": "based on your business",
  "14 дней бесплатного теста": "14-day free trial",
  "После регистрации вы получите бесплатные 10 000 кредитов на 14 дней для проверки AI-бота на реальных обращениях": "After signup, you receive 10,000 free credits for 14 days to test the AI bot on real customer requests",
  "Понимает что нужно клиенту": "Understands what the customer needs",
  "Отвечает не шаблонно, понимает запрос, контекст и следующий шаг в разговоре": "Responds naturally, understands the request, context, and the next step in the conversation",
  "Отвечает с характером!": "Speaks with personality",
  "Общается с клиентами так, как принято у вас": "Talks to customers in the way that fits your business",
  "может быть добрым, энергичный, да ваще любым": "Can be warm, energetic, formal, or anything in between",
  "Знает ваш бизнес": "Knows your business",
  "Отвечает на основе ваших услуг, условий, цен и другой информации": "Answers using your services, terms, prices, and other business information",
  "Учитывает контекст": "Keeps the context",
  "Помнит, о чём шёл разговор, и не начинает каждый ответ с нуля": "Remembers the conversation and never starts each reply from scratch",
  "Напоминает о себе": "Follows up",
  "Если клиент пропал, бот напомнит о себе в нужный момент": "If a customer goes quiet, the bot follows up at the right moment",
  "Настройте характер своего бота сами": "Set your bot’s personality yourself",
  "От первого сообщения": "From the first message",
  "— к конкретному шагу": "to a clear next step",
  "Наш бот не выдаёт случайные заготовки - он учитывает знания компании, контекст": "Our bot does not send random scripts — it uses your company knowledge, conversation context,",
  "разговора и цель этапа, чтобы каждый ответ двигал клиента": "and the goal of each stage so every reply moves the customer forward",
  "Знает бизнес": "Knows the business",
  "Берёт факты из вашей базы": "Uses facts from your",
  "Понимает ситуацию": "Understands the situation",
  "Учитывает этап и контекст": "Understands the stage and",
  "Отвечает уместно": "Replies appropriately",
  "Следует правилам и характеру": "Follows your rules and",
  "Ведёт дальше": "Moves the conversation forward",
  "Работает ради цели текущего": "Works toward the current",
  "этапа": "stage goal",
  "Передаёт человеку": "Hands over to a person",
  "Если сработало заданное": "When a defined handoff",
  "условие": "condition is met",
  "На каждом этапе своя цель разговора": "A different conversation goal at every stage",
  "Человек только заинтересовался, сравнивает варианты, сомневается или готов": "A customer may be interested, comparing options, hesitating, or ready",
  "действовать - для каждого состояния можно задать отдельную задачу, знания, follow-up и": "to act — each state can have its own goal, knowledge, follow-up, and",
  "условие передачи сотруднику": "handoff condition",
  "Интерес": "Interest",
  "Выбор": "Consideration",
  "Сомнение": "Hesitation",
  "Действие": "Action",
  "Цель этапа": "Stage goal",
  "Понять задачу": "Understand the need",
  "Разобраться, что человек ищет и насколько срочно.": "Find out what the customer needs and how urgent it is.",
  "Инструкция": "Instruction",
  "Задать один точный вопрос — без длинной анкеты": "Ask one precise question — no long questionnaire",
  "Нужные знания": "Required knowledge",
  "Услуги / форматы / базовые условия": "Services / options / basic terms",
  "Предложить подходящий следующий шаг": "Offer the right next step",
  "Хочу попробовать, но пока не понимаю, какой": "I want to try it, but I do not know which",
  "формат выбрать": "option to choose",
  "Расскажите, что для вас важнее: начать спокойно": "Tell me what matters more: a calm start",
  "или быстро увидеть результат? Подберу вариант": "or faster results? I will suggest an option",
  "под вашу задачу": "for your needs",
  "Пусть бот разговаривает": "Make the bot speak",
  "так, как принято у вас": "the way your business does",
  "Один и тот же вопрос не должен звучать одинаково в цветочном магазине, фитнес-клубе и": "The same question should not sound identical in a flower shop, a fitness club, and an",
  "автосервисе - вы задаёте тон, формальность, живость и манеру ответа": "auto shop — you choose the tone, formality, energy, and style of every reply",
  "Цветочный магазин": "Flower shop",
  "Фитнес-зал": "Fitness club",
  "Автосервис": "Auto service",
  "Агентство недвижимости": "Real estate agency",
  "мягкий / заботливый": "warm / caring",
  "энергичный / поддерживающий": "energetic / supportive",
  "прямой / спокойный": "direct / calm",
  "сдержанный / тактичный": "reserved / tactful",
  "Конечно. Подскажите, для кого букет и какое настроение хочется": "Of course. Who is the bouquet for, and what mood would you like",
  "передать? Соберу 2–3 спокойных варианта в вашем бюджете": "to convey? I will suggest 2–3 tasteful options within your budget",
  "Не верь AI на слово —": "Do not take AI on trust —",
  "настрой, за что он отвечает": "control what it is responsible for",
  "Сэйлон использует знания компании, понимает этап клиента, следует инструкции": "Saleon uses company knowledge, understands the customer stage, follows instructions,",
  "и сохраняет заданный характер. Если ситуация выходит за рамки, диалог можно": "and keeps the selected personality. If a situation goes beyond the rules, the conversation can be",
  "передать менеджеру": "handed over to a manager",
  "Знания компании": "Company knowledge",
  "условия, цены, правила": "terms, prices, rules",
  "Этап клиента": "Customer stage",
  "- сейчас сомневается": "— currently hesitating",
  "не обещать лишнего": "do not overpromise",
  "Характер": "Personality",
  "спокойно и по делу": "calm and to the point",
  "Вы сами задаёте,": "You decide",
  "в каких ситуациях бот": "when the bot",
  "подключает менеджера,": "brings in a manager",
  "если это нужно": "when needed",
  "Решите сами, сколько": "You decide how much",
  "общения отдать боту": "of the conversation to automate",
  "Простой диалог можно автоматизировать почти целиком": "A straightforward conversation can be almost fully automated",
  "AI-бот + сотрудник": "AI bot + team member",
  "Менеджер подключается, когда нужны опыт, ответственность или нестандартный подход": "A manager steps in when experience, responsibility, or a non-standard approach is needed",
  "Менеджер подключается к важному": "A manager focuses on what matters",
  "AI квалифицирует, снимает типовые сомнения и": "AI qualifies leads, handles common concerns, and",
  "подключает сотрудника в заранее выбранной точке": "brings in a team member at a predefined point",
  "Логика разговора": "Conversation logic",
  "меняется вместе с задачей бизнеса": "changes with the business goal",
  "Сэйлон забирает рутину.": "Saleon handles the routine.",
  "Оставляет людям сложные решения": "People keep the complex decisions",
  "Уточняет задачу, фиксирует важные детали и передаёт сотруднику уже подготовленный диалог": "Clarifies the request, captures key details, and hands a prepared conversation to your team",
  "Компьютерный клуб": "Gaming club",
  "Салон красоты": "Beauty salon",
  "Падел": "Padel club",
  "Сложная продажа": "Complex sales",
  "Диалог в работе": "Live conversation",
  "Онлайн": "Online",
  "Этап": "Stage",
  "Выбор времени": "Choosing a time",
  "быстрый / свой человек": "quick / friendly",
  "Цель": "Goal",
  "Довести до брони": "Complete the booking",
  "Для каждого сценария - свои правила разговора. Меняются цель, характер и следующий шаг": "Every scenario has its own conversation rules. The goal, personality, and next step all change",
  "Есть места сегодня после десяти?": "Are there any spots tonight after ten?",
  "Да, Вас сколько и хотите общий зал или буткемп? Проверю подходящие места": "Sure. How many of you are there, and would you prefer the main hall or a bootcamp room? I will check",
  "Нас четверо, лучше рядом": "There are four of us; seats together would be best",
  "Есть 4 места рядом, с 22:30, зафиксировать бронь на два часа?": "Four adjacent seats are available from 10:30 PM. Shall I book them for two hours?",
  "Все подключённые диалоги в одном окне": "All connected conversations in one place",
  "Чаты": "Chats",
  "Новый посетитель": "New visitor",
  "Только что": "Just now",
  "2 минуты назад": "2 minutes ago",
  "5 минут назад": "5 minutes ago",
  "Хочу попробовать. С чего начать?": "I want to try it. Where do I start?",
  "Хорошо, я подумаю": "All right, I will think about it",
  "Спасибо, посоветуюсь с коллегами": "Thanks, I will discuss it with my colleagues",
  "Спасибо большое за быструю запись! Завтра в 19 буду": "Thank you for the quick booking! I will be there tomorrow at 7 PM",
  "Бот напомнит клиенту через 12 часов": "The bot will follow up in 12 hours",
  "Возвращает клиента в разговор": "Brings the customer back into the conversation",
  "Если человек взял паузу, Сэйлон вовремя напомнит о себе и продолжит диалог по заданному сценарию": "If a customer pauses, Saleon follows up at the right moment and continues the conversation according to your scenario",
  "Отвечает на типовые вопросы": "Answers common questions",
  "Собирает контекст для менеджера": "Prepares context for the manager",
  "Передать": "Hand over",
  "Собрать данные": "Collect details",
  "Квалифицировать": "Qualify",
  "уточнить": "clarify",
  "важно": "important",
  "Сэйлон можно бесплатно проверить в работе и только потом выбрать тариф": "Test Saleon for free in real conversations, then choose a plan",
  "реальные диалоги - без обязательства сразу менять весь процесс": "real conversations — without committing to change your entire process",
  "14 дней, чтобы собрать настройки, подключить первый канал и проверить": "14 days to configure the bot, connect your first channel, and test",
  "до теста": "before the trial",
  "10 000 кредитов уже на аккаунте": "10,000 credits already in your account",
  "уже на вашем аккаунте": "already in your account",
  "Новичок": "Starter",
  "Среднячок": "Growth",
  "Премиум": "Premium",
  "до 20 обращений / день": "up to 20 requests / day",
  "20–50 обращений / день": "20–50 requests / day",
  "50-100 обращений / день": "50–100 requests / day",
  "Более 100 диалогов в день": "Over 100 conversations per day",
  "Для небольшого входящего потока": "For a small inbound volume",
  "Для растущего объёма диалогов": "For a growing conversation volume",
  "Для высокой нагрузки": "For high-volume teams",
  "в месяц": "per month",
  "в месяц · без НДС": "per month · VAT exempt",
  "10000 кредитов": "10,000 credits",
  "БЕРУТ ЧАЩЕ ВСЕГО": "MOST POPULAR",
  "Настройка бота - 40 000 ₽": "Bot setup — ₽40,000",
  "Индивидуальный тариф: 1 ₽ за каждый ответ Сэйлона.": "Custom plan: ₽1 per Saleon reply.",
  "Индивидуальный тариф: 1 ₽ за ответ Сэйлона, без НДС.": "Custom plan: ₽1 per Saleon reply, VAT exempt.",
  "Настройка бота - 40 000 ₽, без НДС": "Bot setup — ₽40,000, VAT exempt",
  "Оплата на сайте не принимается · условия и документы отправим после заявки": "Payment is arranged after your request · terms and documents will be sent directly",
  "Вы можете бесплатно настроить бота сами или это можем сделать мы": "You can configure the bot yourself for free, or we can do it for you",
  "Что обычно": "What is worth",
  "AI может ошибиться?": "Can AI make mistakes?",
  "Сэйлон заменяет менеджера?": "Does Saleon replace a manager?",
  "Подойдёт ли AI-бот сложному бизнесу?": "Will an AI bot work for a complex business?",
  "Как настраивается характер?": "How is the personality configured?",
  "Нужно ли уметь программировать?": "Do I need coding skills?",
  "Какие каналы доступны сейчас?": "Which channels are available now?",
  "Можно подключить нашу CRM или расписание?": "Can we connect our CRM or calendar?",
  "Что будет после 14 дней теста?": "What happens after the 14-day trial?",
  "Кто стоит": "Who is behind",
  "за Сэйлоном?": "Saleon?",
  "Четыре разных взгляда - один Сэйлон": "Four different perspectives — one Saleon",
  "Стратегия и маркетинг": "Strategy and marketing",
  "Дизайн и веб": "Design and web",
  "Контент и коммуникации": "Content and communications",
  "Формирует позиционирование, предложение и логику продвижения продукта.": "Shapes product positioning, offers, and go-to-market logic.",
  "Отвечает за архитектуру продукта, AI-логику и стабильность сервиса.": "Leads product architecture, AI logic, and service reliability.",
  "Проектирует интерфейс, визуальную систему и пользовательский путь.": "Designs the interface, visual system, and customer journey.",
  "Настраивает голос бренда, сценарии и понятную коммуникацию.": "Defines the brand voice, scenarios, and clear communication.",
  "Обсудить доработку": "Discuss a custom feature",
  "Не нашли нужную функцию? Добавим под ваш бизнес": "Missing a feature? We can build it for your business",
  "Расскажите о задаче - обсудим решение и разработаем нужный сценарий, интеграцию или отдельную функцию": "Tell us about your use case — we will discuss the solution and build the right scenario, integration, or feature",
  "Посмотрите, как Сэйлон будет": "See how Saleon will",
  "работать именно с вашими клиентами": "work with your customers",
  "И": "I",
  "О": "O",
  "М": "M",
  "Н": "N",
  "Сайт": "Website",
  "Конфиденциальность": "Privacy",
  "Поддержка": "Support",
  "Продукт и разработка": "Product and engineering",
  "AI продавец для входящих обращений,": "An AI sales assistant for inbound requests,",
  "настроенный под знания, правила и стиль вашего бизнеса": "configured around your business knowledge, rules, and tone",
  "© 2026 Сэйлон": "© 2026 Saleon"
  ,"AI-бот": "AI bot"
  ,"AI продавец для входящих обращений, настроенный под знания, правила и стиль вашего бизнеса.": "An AI sales assistant for inbound requests, configured around your business knowledge, rules, and tone of voice."
  ,"Бот понимает этап клиента, выбирает цель диалога и ведёт к нужному действию - брони, записи, заказу или передаче менеджеру": "The bot understands the customer stage, chooses the conversation goal, and guides them to the right action — a booking, an order, or a manager handoff"
  ,"В сложной продаже AI заберёт первую линию и подготовит контекст для эксперта": "In a complex sale, AI handles the first line and prepares context for an expert"
  ,"Все диалоги одном окне. Сразу видно, откуда пришёл клиент, о чём он спрашивал и чем закончился разговор": "Every conversation is in one place. You immediately see where the customer came from, what they asked, and how the conversation ended"
  ,"Все частые вопросы бот закрывает - менеджеру не приходится десятки раз писать одно и то же": "The bot handles common questions, so managers do not have to repeat the same answers dozens of times"
  ,"Вы выбираете тон, степень формальности, допустимые формулировки и примеры ответов. Всё можно менять без программирования.": "You choose the tone, level of formality, allowed wording, and example replies. Everything can be changed without coding."
  ,"Да, как и любой AI. Поэтому вы задаёте знания, правила и границы ответа, а нестандартные ситуации бот передаёт сотруднику.": "Yes, like any AI. You define its knowledge, rules, and response boundaries, while unusual situations are handed over to a team member."
  ,"Да. Типовые подключения настраиваются готовыми способами, нестандартную интеграцию можно обсудить отдельно.": "Yes. Standard connections use ready-made integrations, and a custom integration can be discussed separately."
  ,"Диалог меняет задачу вместе с этапом": "The conversation goal changes with the stage"
  ,"Для каждого сценария свои правила разговора. Меняются цель, характер и следующий шаг": "Every scenario has its own conversation rules. The goal, personality, and next step all change"
  ,"Доступ не продлится автоматически. Вы увидите результаты теста и сможете сами решить, нужен ли платный тариф.": "Access will not renew automatically. You will see the trial results and decide whether you need a paid plan."
  ,"Конечно. Подскажите, для кого букет и какое настроение хочется передать? Соберу 2–3 спокойных варианта в вашем бюджете": "Of course. Who is the bouquet for, and what mood would you like to convey? I will suggest 2–3 tasteful options within your budget"
  ,"Нет. Базовые знания, сценарии и характер настраиваются через понятный интерфейс.": "No. Core knowledge, scenarios, and personality are configured through a straightforward interface."
  ,"Нет. Он забирает повторяющуюся первую линию, квалифицирует обращение и подключает менеджера там, где нужен человек.": "No. It handles repetitive first-line conversations, qualifies requests, and brings in a manager where a person is needed."
  ,"Подключаем сайт и популярные мессенджеры. Точный список зависит от выбранной конфигурации и этапа запуска.": "We connect websites and popular messengers. The exact list depends on your configuration and launch stage."
  ,"Подойдёт для понятной части диалога: первичной консультации, сбора вводных и подготовки клиента к разговору с экспертом.": "It works well for the structured part of a conversation: initial guidance, collecting details, and preparing the customer to speak with an expert."
  ,"Понял, в субботу буду": "Got it, I will be there on Saturday"
  ,"Расскажите, что для вас важнее: начать спокойно или быстро увидеть результат? Подберу вариант под вашу задачу": "Tell me what matters more: a calm start or faster results? I will suggest the best option for your needs"
  ,"Сотрудник может подключиться к диалогу в нужный момент": "A team member can join the conversation at the right moment"
  ,"Условия": "Terms"
  ,"Характер ассистента": "Assistant personality"
  ,"Хочу попробовать, но пока не понимаю, какой формат выбрать": "I want to try it, but I do not know which option to choose"
  ,"бренда": "brand personality"
  ,"диалога": "conversation context"
  ,"знаний": "knowledge base"
  ,"настройте характер у вашего бота": "set your bot’s personality"
  ,"от первого сообщения до заявки": "from the first message to a qualified lead"
  ,"сотруднику": "to a team member"
  ,"Ответить": "Reply"
  ,"Мария": "Maria"
  ,"Иван": "Ivan"
  ,"Олег": "Oleg"
  ,"Татьяна": "Tatiana"
  ,"Игорь": "Igor"
  ,"Дима": "Dima"
  ,"Арина": "Arina"
  ,"К": "C"
  ,"Пример диалога с AI-ботом": "Example conversation with the AI bot"
  ,"Сценарии бизнеса": "Business scenarios"
  ,"Сценарий": "Scenario"
  ,"Частые вопросы": "Frequently asked questions"
  ,"Этапы пути клиента": "Customer journey stages"
  ,"Привет! Я Сэйлон — AI-продавец для входящих обращений. Могу рассказать, как помогаю бизнесу.": "Hi! I’m Saleon, an AI sales assistant for inbound requests. I can show you how I help businesses."
  ,"Я отвечаю по знаниям и правилам вашего бизнеса, уточняю задачу клиента и передаю менеджеру только сложные обращения. Хотите посмотреть такой сценарий на своих диалогах?": "I reply using your business knowledge and rules, clarify the customer’s needs, and hand only complex requests to a manager. Would you like to see this flow with your own conversations?"
  ,"AI-продавец онлайн": "AI sales assistant online"
  ,"Закрыть чат": "Close chat"
  ,"Напишите вопрос": "Type your question"
  ,"Сообщение для Сэйлона": "Message for Saleon"
  ,"Отправить сообщение": "Send message"
  ,"Закрыть": "Close"
  ,"Заявка принята": "Request received"
  ,"Мы свяжемся с вами и поможем запустить бесплатный тест.": "We will contact you and help launch your free trial."
  ,"Готово": "Done"
  ,"14 дней бесплатно": "14 days free"
  ,"Посмотрите Сэйлон на своих обращениях": "See Saleon work with your own customer requests"
  ,"Оставьте контакты — поможем подключить первый канал и настроить тест.": "Leave your contact details — we will help connect your first channel and configure the trial."
  ,"Ваше имя": "Your name"
  ,"Телефон или почта": "Phone or email"
  ,"Нажимая кнопку, вы соглашаетесь на обработку персональных данных.": "By clicking the button, you consent to personal data processing."
  ,"Хочу попробовать, но немного переживаю — вдруг бот будет отвечать клиентам как-то не так": "I want to try it, but I am a little worried the bot might reply to customers the wrong way"
  ,"Понимаю ваше переживание. Я общаюсь по вашей базе и подстраиваюсь под стиль вашего бизнеса": "I understand your concern. I speak using your knowledge base and adapt to your business tone"
  ,"Разберусь в смысле и контексте, чтобы ответ был уместным и понятным. Если нужно, передам менеджеру": "I will understand the meaning and context so the answer is relevant and clear. If needed, I will hand it over to a manager"
  ,"Да. Вас сколько и хотите общий зал или буткемп? Проверю подходящие места": "Sure. How many of you are there, and would you prefer the main hall or a bootcamp room? I will check"
  ,"Есть 4 места рядом с 22:30. Зафиксировать бронь на два часа?": "Four adjacent seats are available from 10:30 PM. Shall I book them for two hours?"
  ,"Помочь сравнить": "Compare options"
  ,"Понять критерии выбора и предложить подходящий вариант.": "Understand the decision criteria and recommend the best option."
  ,"Уточнить бюджет, формат и главное ограничение": "Clarify the budget, preferred format, and main constraint"
  ,"Тарифы / отличия / доступные варианты": "Plans / differences / available options"
  ,"Сузить выбор до двух решений": "Narrow the choice to two options"
  ,"Сравниваю два варианта и не понимаю, какой мне подойдёт": "I am comparing two options and cannot tell which one fits me"
  ,"Сравню их по вашей задаче. Что важнее: быстрее запуститься или получить больше возможностей?": "I will compare them around your needs. What matters more: launching faster or getting more capabilities?"
  ,"Снять сомнение": "Address the concern"
  ,"Понять причину паузы и ответить без давления.": "Understand what is causing hesitation and respond without pressure."
  ,"Разобрать одно сомнение конкретными фактами": "Address one concern with specific facts"
  ,"Гарантии / ограничения / реальные условия": "Guarantees / limitations / real terms"
  ,"Вернуть человека к решению": "Help the customer move toward a decision"
  ,"Переживаю, что это не сработает именно в нашем случае": "I am worried this may not work for our case"
  ,"Понимаю. Давайте проверим на ваших обращениях: покажу, что бот сможет закрыть, а где подключится менеджер": "I understand. Let us test it on your inquiries: I will show what the bot can handle and when a manager steps in"
  ,"Довести до шага": "Complete the next step"
  ,"Помочь оформить запись, заявку, заказ или встречу.": "Help the customer book, order, apply, or schedule a meeting."
  ,"Предложить конкретное действие и удобное время": "Offer a clear action and a convenient time"
  ,"Свободные слоты / условия / контакты": "Available slots / terms / contacts"
  ,"Зафиксировать заявку": "Confirm the request"
  ,"Хорошо, готов попробовать. Что нужно сделать?": "All right, I am ready to try it. What do I need to do?"
  ,"Создам тестовый доступ и помогу подключить первый канал. На какой номер отправить данные?": "I will create trial access and help connect your first channel. Which number should I send the details to?"
  ,"Отличный старт! Какая цель сейчас важнее: набрать форму, стать сильнее или вернуть регулярность? Подберу подходящий формат": "Great start! What matters most right now: getting fit, becoming stronger, or rebuilding consistency? I will suggest the right format"
  ,"Понял. Напишите марку, модель и что именно происходит с машиной. Сориентирую по диагностике и ближайшему времени": "Got it. Send the make, model, and what is happening with the car. I will suggest the right diagnostic and the nearest available time"
  ,"Подскажите район, бюджет и цель покупки. Отберу подходящие варианты и уточню важные условия до просмотра": "Tell me the area, budget, and purpose of the purchase. I will shortlist suitable options and clarify the key terms before a viewing"
  ,"Хочу освежить цвет, но не знаю, что выбрать": "I want to refresh my color, but I am not sure what to choose"
  ,"Подскажите длину волос и желаемый результат. Помогу подобрать услугу": "Tell me your hair length and the result you want. I will help choose the right service"
  ,"Волосы до плеч, хочется натурально": "Shoulder-length hair; I would like a natural result"
  ,"Подойдёт мягкое тонирование. Есть окно завтра в 18:00, записать вас?": "A soft toner would work well. We have an opening tomorrow at 6 PM. Shall I book you in?"
  ,"Подбор услуги": "Choosing a service"
  ,"заботливый / уверенный": "caring / confident"
  ,"Довести до записи": "Book an appointment"
  ,"Бот уточняет пожелания, помогает выбрать услугу и предлагает свободное время": "The bot clarifies preferences, helps choose a service, and offers an available time"
  ,"Можно поиграть в субботу утром?": "Can we play on Saturday morning?"
  ,"Да. Сколько вас будет и нужен ли тренер?": "Sure. How many players are there, and do you need a coach?"
  ,"Нас четверо, тренер не нужен": "There are four of us; we do not need a coach"
  ,"Есть свободный корт в 10:30. Забронировать на полтора часа?": "A court is available at 10:30 AM. Shall I book it for 90 minutes?"
  ,"Сбор команды": "Team details"
  ,"живой / спортивный": "upbeat / sporty"
  ,"Забронировать корт": "Book a court"
  ,"Сценарий учитывает состав игроков, инвентарь, тренера и доступные слоты": "The scenario accounts for the players, equipment, coaching, and available slots"
  ,"Нужна интеграция с нашей CRM": "We need an integration with our CRM"
  ,"Уточню задачу: какая CRM и какие данные должны передаваться?": "Let me clarify: which CRM do you use, and what data needs to be transferred?"
  ,"Bitrix24, сделки и история диалогов": "Bitrix24, deals, and conversation history"
  ,"Понял. Подготовлю контекст и предложу время разговора с техническим специалистом": "Got it. I will prepare the context and suggest a time to speak with a technical specialist"
  ,"Квалификация": "Qualification"
  ,"спокойный / экспертный": "calm / expert"
  ,"Подготовить встречу": "Prepare the meeting"
  ,"AI собирает вводные и передаёт менеджеру подготовленный диалог без лишних повторов": "AI collects the key details and hands a prepared conversation to the manager without needless repetition"
};

const normalize = (value: string) => value.trim().replace(/\s+/g, " ");

export function translateText(language: SiteLanguage, value: string) {
  if (language === "ru") return value;
  return en[normalize(value)] ?? value;
}

export function containsRussian(value: string) {
  return /[А-Яа-яЁё]/.test(value);
}
