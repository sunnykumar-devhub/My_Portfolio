'use client';

import React, { useSyncExternalStore } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit' });

// Re-check a few times a minute; the snapshot is a string, so React only re-renders when the minute changes
const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};

// Sunny's current time in India, so visitors in other time zones know when to expect a reply.
// The page is static, so the server renders the time zone alone and the clock fills in after hydration.
const LocalTime: React.FC = () => {
  const time = useSyncExternalStore(subscribe, () => formatter.format(new Date()), () => null);
  return <span>{time ? `${time} IST` : 'IST (UTC+5:30)'}</span>;
};

export default LocalTime;
