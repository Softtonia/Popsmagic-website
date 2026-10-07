// Email notification helpers
export const email = {
  sendEmail: async ({ to, subject }: { to: string; subject: string }) => ({
    success: true,
    to,
    subject,
  }),
};
