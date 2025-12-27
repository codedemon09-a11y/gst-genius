import { GSTRate, LineItem, Currency } from '@/types/invoice';

export const calculateLineItem = (
  quantity: number,
  rate: number,
  gstRate: GSTRate,
  isInterState: boolean
): Partial<LineItem> => {
  const amount = quantity * rate;
  const gstAmount = (amount * gstRate) / 100;

  if (isInterState) {
    return {
      amount,
      gstAmount,
      cgst: 0,
      sgst: 0,
      igst: gstAmount,
    };
  }

  return {
    amount,
    gstAmount,
    cgst: gstAmount / 2,
    sgst: gstAmount / 2,
    igst: 0,
  };
};

export const calculateTotals = (
  items: LineItem[],
  discountType: 'amount' | 'percentage',
  discountValue: number
) => {
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  
  const discountAmount = discountType === 'percentage'
    ? (subtotal * discountValue) / 100
    : discountValue;

  const taxableAmount = subtotal - discountAmount;

  const cgstTotal = items.reduce((sum, item) => {
    const itemDiscount = item.amount / subtotal * discountAmount || 0;
    const taxable = item.amount - itemDiscount;
    return sum + (taxable * item.gstRate / 100 / 2) * (item.cgst > 0 ? 1 : 0);
  }, 0);

  const sgstTotal = cgstTotal;

  const igstTotal = items.reduce((sum, item) => {
    const itemDiscount = item.amount / subtotal * discountAmount || 0;
    const taxable = item.amount - itemDiscount;
    return sum + (taxable * item.gstRate / 100) * (item.igst > 0 ? 1 : 0);
  }, 0);

  const totalBeforeRound = taxableAmount + cgstTotal + sgstTotal + igstTotal;
  const grandTotal = Math.round(totalBeforeRound);
  const roundOff = grandTotal - totalBeforeRound;

  return {
    subtotal,
    discountAmount,
    cgstTotal,
    sgstTotal,
    igstTotal,
    roundOff,
    grandTotal,
  };
};

export const amountToWords = (amount: number): string => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const convertLessThanHundred = (n: number): string => {
    if (n < 20) return ones[n];
    return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
  };

  const convertLessThanThousand = (n: number): string => {
    if (n < 100) return convertLessThanHundred(n);
    return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convertLessThanHundred(n % 100) : '');
  };

  if (amount === 0) return 'Rupees Zero Only';

  const crore = Math.floor(amount / 10000000);
  const lakh = Math.floor((amount % 10000000) / 100000);
  const thousand = Math.floor((amount % 100000) / 1000);
  const hundred = Math.floor(amount % 1000);
  const paise = Math.round((amount % 1) * 100);

  let words = 'Rupees ';
  if (crore) words += convertLessThanThousand(crore) + ' Crore ';
  if (lakh) words += convertLessThanHundred(lakh) + ' Lakh ';
  if (thousand) words += convertLessThanHundred(thousand) + ' Thousand ';
  if (hundred) words += convertLessThanThousand(hundred);
  
  words = words.trim();
  
  if (paise) {
    words += ' and ' + convertLessThanHundred(paise) + ' Paise';
  }

  return words + ' Only';
};

export const generateDocumentNumber = (prefix: string, counter: number): string => {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  return `${prefix}${year}${month}-${String(counter).padStart(4, '0')}`;
};

export const formatCurrency = (amount: number, currency: string = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
