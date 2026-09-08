// Admin config - only this email can delete any video
export const ADMIN_EMAILS = [
  'unclediriisa@gmail.com',
];

export const isAdmin = (email: string | null | undefined) => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
};

export const ADMIN_PACKAGE = 'com.unclediriisa.dshorts';
