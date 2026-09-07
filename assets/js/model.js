import { CONFIG } from './data.js';
export const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const words = (t) =>
  (t.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || []).length;
export const lines = (t) => [
  ...new Set(
    t
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean),
  ),
];
export const fresh = () => ({
  version: 1,
  sessions: [],
  settings: { minutes: CONFIG.defaultMinutes, level: 1, rate: 0.8 },
});
export function validData(d) {
  return (
    d?.version === 1 &&
    Array.isArray(d.sessions) &&
    d.sessions.every(
      (s) =>
        typeof s.id === 'string' &&
        /^\d{4}-\d{2}-\d{2}$/.test(s.date) &&
        Number.isFinite(s.seconds) &&
        s.seconds >= 0 &&
        s.seconds < 86400 &&
        ['Listening', 'Speaking', 'Conversation', 'Review'].includes(s.menu) &&
        typeof s.transcript === 'string' &&
        typeof s.heard === 'string' &&
        typeof s.expressions === 'string' &&
        typeof s.ai === 'string' &&
        Number.isInteger(s.self) &&
        s.self >= 1 &&
        s.self <= 5 &&
        Number.isFinite(s.wordCount) &&
        s.wordCount >= 0 &&
        (!s.check || CONFIG.milestones.includes(s.check)),
    ) &&
    d.settings &&
    CONFIG.durations.includes(d.settings.minutes) &&
    [1, 2, 3].includes(d.settings.level) &&
    [0.65, 0.8, 1].includes(d.settings.rate)
  );
}
export function stats(sessions, now = new Date()) {
  const dates = new Set(sessions.map((s) => s.date));
  let streak = 0,
    d = new Date(now);
  if (!dates.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (dates.has(dayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return {
    days: dates.size,
    streak,
    minutes: Math.floor(sessions.reduce((a, s) => a + s.seconds, 0) / 60),
    expressions: new Set(sessions.flatMap((s) => lines(s.expressions))).size,
    heard: new Set(sessions.flatMap((s) => lines(s.heard))).size,
  };
}
export function learningDay(sessions, now = new Date()) {
  if (!sessions.length) return 1;
  const first = sessions.map((s) => s.date).sort()[0];
  return Math.max(
    1,
    Math.round(
      (Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
        Date.parse(first + 'T00:00:00Z')) /
        86400000,
    ) + 1,
  );
}
