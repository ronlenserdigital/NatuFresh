export const SITE = {
  name: "NatuFresh",
  tagline: "Green Cleaning for Healthy Living",
  phoneDisplay: "571-575-5615",
  phoneTel: "5715755615",
  email: "NatufreshLLC@hotmail.com",
  owner: 'Maria "Bertilla" Torres',
  yearsExperience: 12,
} as const;

/** Respects Vite `base` (GitHub Pages: /nutrue/) */
function imageUrl(filename: string): string {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

export const IMAGES = {
  logo: imageUrl("natufresh-logo.png"),
  hero: imageUrl("commercial-hallway.jpg"),
  galleryMain: imageUrl("commercial-hallway.jpg"),
  galleryA: imageUrl("office-cubicle.jpg"),
  galleryB: imageUrl("long-hallway.jpg"),
  businessCard: imageUrl("business-card.jpg"),
} as const;
