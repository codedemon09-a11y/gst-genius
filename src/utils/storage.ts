import {
  CompanySettings,
  Client,
  Document,
  DocumentType,
  DEFAULT_COMPANY_SETTINGS,
} from '@/types/invoice';

const STORAGE_KEYS = {
  COMPANY_SETTINGS: 'billcraft_company_settings',
  CLIENTS: 'billcraft_clients',
  DOCUMENTS: 'billcraft_documents',
};

export const saveCompanySettings = (settings: CompanySettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.COMPANY_SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save company settings:', error);
  }
};

export const loadCompanySettings = (): CompanySettings => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.COMPANY_SETTINGS);
    if (stored) {
      return { ...DEFAULT_COMPANY_SETTINGS, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Failed to load company settings:', error);
  }
  return DEFAULT_COMPANY_SETTINGS;
};

export const saveClients = (clients: Client[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
  } catch (error) {
    console.error('Failed to save clients:', error);
  }
};

export const loadClients = (): Client[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CLIENTS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load clients:', error);
  }
  return [];
};

export const saveDocuments = (documents: Document[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.DOCUMENTS, JSON.stringify(documents));
  } catch (error) {
    console.error('Failed to save documents:', error);
  }
};

export const loadDocuments = (): Document[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.DOCUMENTS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load documents:', error);
  }
  return [];
};

export const incrementCounter = (
  settings: CompanySettings,
  docType: DocumentType
): CompanySettings => {
  const updatedSettings = {
    ...settings,
    counters: {
      ...settings.counters,
      [docType]: settings.counters[docType] + 1,
    },
  };
  saveCompanySettings(updatedSettings);
  return updatedSettings;
};
