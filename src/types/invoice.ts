export type DocumentType = 
  | 'invoice' 
  | 'quotation' 
  | 'proforma' 
  | 'credit-note' 
  | 'debit-note' 
  | 'purchase-order' 
  | 'delivery-challan'
  | 'sale-invoice'
  | 'purchase-invoice'
  | 'sale-order'
  | 'job-work'
  | 'inward-payment'
  | 'outward-payment'
  | 'bill';

export type GSTRate = 0 | 5 | 12 | 18 | 28;

export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';
export type CurrencyCode = Currency;

export type Template = 'modern' | 'classic' | 'minimal' | 'professional';
export type TemplateStyle = Template;

export const GST_RATES: GSTRate[] = [0, 5, 12, 18, 28];

export const CURRENCIES = [
  { code: 'INR' as CurrencyCode, symbol: '₹', name: 'Indian Rupee' },
  { code: 'USD' as CurrencyCode, symbol: '$', name: 'US Dollar' },
  { code: 'EUR' as CurrencyCode, symbol: '€', name: 'Euro' },
  { code: 'GBP' as CurrencyCode, symbol: '£', name: 'British Pound' },
];

export const TEMPLATE_STYLES = [
  { value: 'modern' as TemplateStyle, label: 'Modern' },
  { value: 'classic' as TemplateStyle, label: 'Classic' },
  { value: 'minimal' as TemplateStyle, label: 'Minimal' },
  { value: 'professional' as TemplateStyle, label: 'Professional' },
];

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

export const PAYMENT_TERMS = [
  'Due on Receipt',
  'Net 7',
  'Net 15',
  'Net 30',
  'Net 45',
  'Net 60',
  'Net 90',
  'Custom',
];

export interface DocumentTypeConfig {
  type: DocumentType;
  label: string;
  shortLabel: string;
  description: string;
  category: 'sales' | 'purchase' | 'orders' | 'adjustments' | 'payments';
  hasGST: boolean;
  hasDueDate: boolean;
  hasPayment: boolean;
}

export const DOCUMENT_TYPES: DocumentTypeConfig[] = [
  { type: 'sale-invoice', label: 'Sale Invoice', shortLabel: 'Sale Inv', description: 'Tax invoice for sales', category: 'sales', hasGST: true, hasDueDate: true, hasPayment: true },
  { type: 'invoice', label: 'Tax Invoice', shortLabel: 'Invoice', description: 'Standard tax invoice', category: 'sales', hasGST: true, hasDueDate: true, hasPayment: true },
  { type: 'purchase-invoice', label: 'Purchase Invoice', shortLabel: 'Purch Inv', description: 'Invoice for purchases', category: 'purchase', hasGST: true, hasDueDate: true, hasPayment: true },
  { type: 'quotation', label: 'Quotation', shortLabel: 'Quote', description: 'Price quotation for clients', category: 'sales', hasGST: true, hasDueDate: true, hasPayment: false },
  { type: 'proforma', label: 'Proforma Invoice', shortLabel: 'Proforma', description: 'Preliminary invoice', category: 'sales', hasGST: true, hasDueDate: true, hasPayment: true },
  { type: 'delivery-challan', label: 'Delivery Challan', shortLabel: 'Challan', description: 'Delivery note', category: 'sales', hasGST: false, hasDueDate: false, hasPayment: false },
  { type: 'purchase-order', label: 'Purchase Order', shortLabel: 'PO', description: 'Order to supplier', category: 'orders', hasGST: true, hasDueDate: true, hasPayment: false },
  { type: 'sale-order', label: 'Sale Order', shortLabel: 'SO', description: 'Order from customer', category: 'orders', hasGST: true, hasDueDate: true, hasPayment: false },
  { type: 'job-work', label: 'Job Work', shortLabel: 'Job', description: 'Job work challan', category: 'orders', hasGST: true, hasDueDate: true, hasPayment: false },
  { type: 'credit-note', label: 'Credit Note', shortLabel: 'CN', description: 'Credit adjustment', category: 'adjustments', hasGST: true, hasDueDate: false, hasPayment: false },
  { type: 'debit-note', label: 'Debit Note', shortLabel: 'DN', description: 'Debit adjustment', category: 'adjustments', hasGST: true, hasDueDate: false, hasPayment: false },
  { type: 'inward-payment', label: 'Inward Payment', shortLabel: 'Receipt', description: 'Payment received', category: 'payments', hasGST: false, hasDueDate: false, hasPayment: true },
  { type: 'outward-payment', label: 'Outward Payment', shortLabel: 'Payment', description: 'Payment made', category: 'payments', hasGST: false, hasDueDate: false, hasPayment: true },
  { type: 'bill', label: 'Bill / Receipt', shortLabel: 'Bill', description: 'Simple bill or receipt', category: 'sales', hasGST: true, hasDueDate: true, hasPayment: true },
];

export const getDocumentTypeConfig = (type: DocumentType): DocumentTypeConfig => {
  return DOCUMENT_TYPES.find(d => d.type === type) || DOCUMENT_TYPES[0];
};

export interface CompanySettings {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  website: string;
  gstin: string;
  pan: string;
  logo: string;
  signature: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  ifsc: string;
  branchName: string;
  upiId: string;
  defaultGstRate: GSTRate;
  defaultCurrency: Currency;
  defaultTemplate: Template;
  prefixes: Record<DocumentType, string>;
  counters: Record<DocumentType, number>;
  termsAndConditions: string;
  terms: string;
  jurisdiction: string;
}

export const DEFAULT_COMPANY_SETTINGS: CompanySettings = {
  name: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
  email: '',
  website: '',
  gstin: '',
  pan: '',
  logo: '',
  signature: '',
  bankName: '',
  accountNumber: '',
  ifscCode: '',
  ifsc: '',
  branchName: '',
  upiId: '',
  defaultGstRate: 18,
  defaultCurrency: 'INR',
  defaultTemplate: 'modern',
  prefixes: {
    'invoice': 'INV-',
    'quotation': 'QT-',
    'proforma': 'PI-',
    'credit-note': 'CN-',
    'debit-note': 'DN-',
    'purchase-order': 'PO-',
    'delivery-challan': 'DC-',
    'sale-invoice': 'SI-',
    'purchase-invoice': 'PI-',
    'sale-order': 'SO-',
    'job-work': 'JW-',
    'inward-payment': 'IR-',
    'outward-payment': 'OP-',
    'bill': 'BL-',
  },
  counters: {
    'invoice': 1,
    'quotation': 1,
    'proforma': 1,
    'credit-note': 1,
    'debit-note': 1,
    'purchase-order': 1,
    'delivery-challan': 1,
    'sale-invoice': 1,
    'purchase-invoice': 1,
    'sale-order': 1,
    'job-work': 1,
    'inward-payment': 1,
    'outward-payment': 1,
    'bill': 1,
  },
  termsAndConditions: '1. Payment is due within 30 days.\n2. Goods once sold will not be taken back.\n3. Subject to local jurisdiction.',
  terms: '1. Payment is due within 30 days.\n2. Goods once sold will not be taken back.\n3. Subject to local jurisdiction.',
  jurisdiction: '',
};

export interface Client {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  gstin: string;
}

export interface LineItem {
  id: string;
  description: string;
  hsnSac: string;
  quantity: number;
  rate: number;
  gstRate: GSTRate;
  amount: number;
  gstAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
}

export interface Document {
  id: string;
  type: DocumentType;
  number: string;
  date: string;
  dueDate: string;
  placeOfSupply: string;
  countryOfSupply: string;
  client: Client;
  items: LineItem[];
  subtotal: number;
  discountType: 'amount' | 'percentage';
  discountValue: number;
  discountAmount: number;
  cgstTotal: number;
  sgstTotal: number;
  igstTotal: number;
  shippingCharges: number;
  roundOff: number;
  grandTotal: number;
  amountInWords: string;
  paymentTerms: string;
  notes: string;
  isInterState: boolean;
  currency: Currency;
  template: Template;
}
