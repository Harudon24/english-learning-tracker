// Add topics and milestones here. No UI changes are required.
export const CONFIG = {
  storageKey: 'little-voice-v1',
  durations: [5, 10, 15],
  milestones: [1, 7, 30],
  defaultMinutes: 5,
};
export const MENUS = [
  {
    id: 'Listening',
    title: '耳をならす',
    description: '短い英語を聞いて、わかった言葉を残す。',
    color: 'mint',
  },
  {
    id: 'Speaking',
    title: 'とにかく声にする',
    description: '単語だけでもOK。30秒、話し続けてみよう。',
    color: 'purple',
  },
  {
    id: 'Conversation',
    title: 'ひとこと会話',
    description: '身近な場面で、短いやりとりを重ねる。',
    color: 'orange',
  },
  {
    id: 'Review',
    title: 'もう一度、言ってみる',
    description: '昨日の「言えた」を、今日の自信に。',
    color: 'blue',
  },
];
export const TOPICS = [
  {
    id: 'intro',
    level: 1,
    title: '自分のことを、ひとこと',
    text: 'Hi. I am Alex. I like coffee. I have a cat.',
    translation:
      'こんにちは。私はアレックスです。コーヒーが好きです。猫を飼っています。',
    prompt: '名前・好きなもの・身近なものについて話そう。',
    starters: ['I am …', 'I like …', 'I have …'],
    questions: [
      'Hi! What is your name?',
      'What do you like?',
      'Do you have a pet?',
    ],
  },
  {
    id: 'morning',
    level: 1,
    title: 'いつもの朝',
    text: 'I get up at seven. I drink water. I eat bread.',
    translation: '7時に起きます。水を飲みます。パンを食べます。',
    prompt: '朝にすることを、1つずつ話そう。',
    starters: ['I get up at …', 'I drink …', 'I eat …'],
    questions: [
      'What time do you get up?',
      'What do you drink?',
      'What do you eat?',
    ],
  },
  {
    id: 'cafe',
    level: 1,
    title: 'カフェで注文',
    text: 'I want tea, please. A small one. Thank you.',
    translation: '紅茶をください。小さいものを1つ。ありがとう。',
    prompt: '飲み物を注文してみよう。',
    starters: ['I want …', 'A small one, please.', 'Thank you.'],
    questions: [
      'Hello! What would you like?',
      'Small or large?',
      'Anything else?',
    ],
  },
  {
    id: 'hobby',
    level: 2,
    title: '好きなことを、もう少し',
    text: 'I like games. I play after work. It is fun.',
    translation: 'ゲームが好きです。仕事の後に遊びます。楽しいです。',
    prompt: '好きなこと・いつするか・気持ちを話そう。',
    starters: ['I like …', 'I … after work.', 'It is …'],
    questions: [
      'What do you do for fun?',
      'When do you do that?',
      'Why do you like it?',
    ],
  },
  {
    id: 'yesterday',
    level: 2,
    title: '昨日の小さなできごと',
    text: 'I went to a shop. I bought milk. It was cold.',
    translation: 'お店に行きました。牛乳を買いました。寒かったです。',
    prompt: '昨日のことを、短い文で話そう。',
    starters: ['I went to …', 'I bought …', 'It was …'],
    questions: [
      'Where did you go yesterday?',
      'What did you buy?',
      'How was your day?',
    ],
  },
  {
    id: 'plans',
    level: 3,
    title: '次のお休み',
    text: 'I want to go to the park. I will meet my friend. We like walking.',
    translation: '公園に行きたいです。友達に会います。私たちは散歩が好きです。',
    prompt: '次のお休みにしたいことを話そう。',
    starters: ['I want to …', 'I will …', 'We like …'],
    questions: [
      'What do you want to do this weekend?',
      'Who will you meet?',
      'What will you do together?',
    ],
  },
];
export const CHECK_TASK = TOPICS[0];
