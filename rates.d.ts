declare namespace euVatRates {
    export interface EuVatRates {
        last_updated: string;
        disclaimer: string;
        source: string;
        rates: Record<string, CountryRate>;
    }
    
    export interface CountryRate {
        country: string;
        vat_name: string;
        vat_abbr: string;
        standard_rate: number;
        reduced_rate: boolean | number;
        reduced_rate_alt: boolean | number;
        super_reduced_rate: boolean | number;
        parking_rate: boolean | number;
    }
}
declare const euVatRates: euVatRates.EuVatRates;
export = euVatRates;
