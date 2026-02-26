export interface OpdsLink {
  rel: string;
  href: string;
  type?: string;
  title?: string;
  alternate?: OpdsLink[];
  height?: number;
  width?: number;
  properties?: any;
}

export interface OpdsMetadata {
    title: string;
    description?: string;
    identifier?: string;
    author?: string | { name: string };
    modified?: string;
    published?: string;
    language?: string;
    rights?: string;
    subject?: Array<string | { name: string, code?: string, scheme?: string }>;
    [key: string]: any;
}
