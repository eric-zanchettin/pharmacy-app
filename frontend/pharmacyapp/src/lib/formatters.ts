export function phoneFormatter(phone: string): string {
    const mask = /(\d{2})(\d{4,5})(\d{4})/
    const formattedPhone = phone.replace(mask, '($1) $2-$3');

    return formattedPhone;
};