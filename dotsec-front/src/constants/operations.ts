export const Operation = {
  Encrypt: 'Encrypt',
  Decrypt: 'Decrypt',
} as const;

export type Operation = typeof Operation[keyof typeof Operation];