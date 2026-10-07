import { COMPANY_DETAILS } from '../data/companyData';

/**
 * Generates an encoded WhatsApp web/app link with a pre-filled message.
 * @param {string} customMessage Optional custom text message
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppLink = (customMessage = null) => {
  const defaultText = `Hello ${COMPANY_DETAILS.name},\n\nI am interested in your Makhana products. Please share product details, available grades, pricing and supply information.`;
  const messageText = customMessage || defaultText;
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodedText}`;
};

/**
 * Generates a product-specific pre-filled WhatsApp link.
 * @param {string} productName Name of the target product
 * @param {string} grade Optional grade spec
 * @returns {string} WhatsApp URL
 */
export const getProductWhatsAppLink = (productName, grade = '') => {
  const text = `Hello ${COMPANY_DETAILS.name},\n\nI am interested in ${productName}${grade ? ` (${grade})` : ''}. Please share product specification sheet, available bulk quantities, pricing and supply terms.`;
  return `https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates a custom B2B quote request WhatsApp link from the estimator form.
 * @param {Object} details Form payload containing product, quantity, location, etc.
 * @returns {string} WhatsApp URL
 */
export const getB2BQuoteWhatsAppLink = (details) => {
  const text = `Hello ${COMPANY_DETAILS.name},\n\n*B2B BULK ENQUIRY DETAILED SUMMARY*\n` +
    `--------------------------------------\n` +
    `*Client Name:* ${details.name || 'N/A'}\n` +
    `*Phone:* ${details.phone || 'N/A'}\n` +
    `*Product Grade:* ${details.product || 'Standard Grade Phool Makhana'}\n` +
    `*Requirement:* ${details.requirementType || 'Bulk Wholesale'}\n` +
    `*Estimated Quantity:* ${details.quantity || '500 kg'}\n` +
    `*Destination Location:* ${details.location || 'N/A'}\n` +
    `*Message / Specs:* ${details.message || 'Please send quotation.'}\n` +
    `--------------------------------------\n` +
    `Please review and provide pricing & delivery timeline from Madhubani, Bihar.`;

  return `https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(text)}`;
};
