export function phoneFormatter(phone: string, containsDdd: boolean): string {
    let mask = /(\d{2})(\d{4,5})(\d{4})/;
    let layout = '($1) $2-$3'
    
    if (!containsDdd) {
        mask = /(\d{4,5})(\d{4})/;
        layout = '$1-$2';
    };

    let formattedPhone = phone.replace(mask, layout);

    return formattedPhone;
};

export function cnpjFormatter(cnpj: string): string {
    const mask = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
    const formattedCnpj = cnpj.replace(mask, '$1.$2.$3/$4-$5');

    return formattedCnpj;
};

export function dddFormatter(ddd: string): string {
    if (ddd.length === 2) {
        const mask = /(\d{2})/;
        const formattedDdd = ddd.replace(mask, '($1)');
        
        return formattedDdd;
    };

    return ddd;
};