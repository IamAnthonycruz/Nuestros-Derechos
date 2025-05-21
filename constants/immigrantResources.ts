export type ResourceType = {
  name: string;
  website: string;
  description: string;
};

const immigrantResources: ResourceType[] = [
  {
    name: "United We Dream",
    website: "https://unitedwedream.org",
    description:
      "La red más grande dirigida por jóvenes inmigrantes en EE. UU., que aboga por los derechos y la dignidad de todos los inmigrantes.",
  },
  {
    name: "Informed Immigrant",
    website: "https://www.informedimmigrant.com",
    description:
      "Un centro de recursos confiables y guías prácticas para inmigrantes indocumentados y sus aliados en EE. UU.",
  },
  {
    name: "We Have Rights (ACLU)",
    website: "https://www.wehaverights.us",
    description:
      "Una serie de videos multilingües creada por la ACLU para informar a los inmigrantes sobre sus derechos ante ICE.",
  },
  {
    name: "Immi",
    website: "https://www.immi.org",
    description:
      "Una herramienta gratuita en línea del ILRC que ayuda a los inmigrantes a entender sus opciones legales y encontrar ayuda.",
  },
];

export default immigrantResources;
