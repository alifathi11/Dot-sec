export const BCM = {
  ECB: 'ECB',
  CBC: 'CBC',
  OFB: 'OFB',
  CFB: 'CFB',
} as const;

export type BCM = typeof BCM[keyof typeof BCM];