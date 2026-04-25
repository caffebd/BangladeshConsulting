export const WHATSAPP_NUMBER = "+8801723957059";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`;
export const EMAIL = "mdkobiruddin@gmail.com";
export const CONTACT_EMAIL = "luke@caffebd.org";

export const SERVICES = [
  {
    key: "companyFormation",
    slug: "company-formation",
    icon: "Building2",
    price: "From BDT 25,000",
    timeframe: "4–6 weeks",
  },
  {
    key: "bankAccount",
    slug: "bank-account",
    icon: "Landmark",
    price: "From BDT 5,000",
    timeframe: "1–2 weeks",
  },
  {
    key: "etinVatBin",
    slug: "etin-vat-bin",
    icon: "FileText",
    price: "From BDT 3,000",
    timeframe: "3–7 days",
  },
  {
    key: "tradeLicence",
    slug: "trade-licence",
    icon: "Store",
    price: "From BDT 5,000",
    timeframe: "2–4 weeks",
  },
  {
    key: "bstiMark",
    slug: "bsti-mark",
    icon: "BadgeCheck",
    price: "From BDT 15,000",
    timeframe: "6–12 weeks",
  },
  {
    key: "teaBoardLicence",
    slug: "tea-board-licence",
    icon: "Leaf",
    price: "From BDT 8,000",
    timeframe: "3–6 weeks",
  },
  {
    key: "passport",
    slug: "passport",
    icon: "BookOpen",
    price: "From BDT 4,000",
    timeframe: "2–4 weeks",
  },
  {
    key: "nationalId",
    slug: "national-id",
    icon: "IdCard",
    price: "From BDT 3,000",
    timeframe: "2–4 weeks",
  },
  {
    key: "birthRegistration",
    slug: "birth-registration",
    icon: "Baby",
    price: "From BDT 2,500",
    timeframe: "1–3 weeks",
  },
  {
    key: "nationalUniversity",
    slug: "national-university-certificate",
    icon: "GraduationCap",
    price: "From BDT 3,500",
    timeframe: "2–5 weeks",
  },
] as const;

export type ServiceKey = (typeof SERVICES)[number]["key"];
export type ServiceSlug = (typeof SERVICES)[number]["slug"];
