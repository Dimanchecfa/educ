const routes = {
  dashboard: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  profile: '/profile',
  reports : '/reports',
  invoices : '/invoices',
  campaign : '/campaign',
  createCampaign : '/campaign/create',
  createSmsCampaign : '/campaign/campaign_type/sms-campaign',
  createEmailCampaign : '/campaign/campaign_type/mail-campaign',
  settings: '/settings',
  contacts: '/contacts',
  orderUrl: (tracking_number: string) =>
    `/orders/${encodeURIComponent(tracking_number)}`,
  productUrl: (slug: string) => `/products/${slug}`,
  tagUrl: (slug: string) => `/products/tags/${slug}`,
  shopUrl: (slug: string) => `/authors/${slug}`,
  product: (slug: string) => {
    return `/products/${encodeURIComponent(slug)}`;
  },
  cards: '/cards',
};


export default routes;
