import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [status, setStatus] = useState("loading");
    const [data, setData] = useState({
        date: "2022-11-22",
        rates: {
            "AED": 3.767522,
            "AFN": 89.989865,
            "ALL": 117.086018,
            "AMD": 404.53179,
            "ANG": 1.843913,
            "AOA": 522.230838,
            "ARS": 167.338548,
            "AUD": 1.549988,
            "AWG": 1.849364,
            "AZN": 1.743535,
            "BAM": 1.95536,
            "BBD": 2.051089,
            "BDT": 105.381281,
            "BGN": 1.954058,
            "BHD": 0.387424,
            "BIF": 2117.039508,
            "BMD": 1.026509,
            "BND": 1.415393,
            "BOB": 7.067476,
            "BRL": 5.456218,
            "BSD": 1.026496,
            "BTC": 0.000065,
            "BTN": 83.642315,
            "BWP": 13.335765,
            "BYN": 2.583525,
            "BZD": 2.062266,
            "CAD": 1.377411,
            "CDF": 2101.846489,
            "CHF": 0.981146,
            "CLF": 0.035114,
            "CLP": 966.058636,
            "CNH": 7.340346,
            "CNY": 7.33545,
            "COP": 5105.304986,
            "CRC": 621.169233,
            "CUC": 1.026017,
            "CUP": 26.405212,
            "CVE": 110.875696,
            "CZK": 24.324832,
            "DJF": 182.085144,
            "DKK": 7.436884,
            "DOP": 55.983105,
            "DZD": 142.820794,
            "EGP": 25.132524,
            "ERN": 15.382169,
            "ETB": 54.641366,
            "EUR": 1,
            "FJD": 2.297097,
            "FKP": 0.865047,
            "GBP": 0.865673,
            "GEL": 2.754491,
            "GGP": 0.865115,
            "GHS": 14.830624,
            "GIP": 0.865871,
            "GMD": 63.136005,
            "GNF": 8814.229932,
            "GTQ": 7.978993,
            "GYD": 213.982376,
            "HKD": 8.008347,
            "HNL": 25.278415,
            "HRK": 7.53747,
            "HTG": 140.625051,
            "HUF": 408.445199,
            "IDR": 16112.148213,
            "ILS": 3.564298,
            "IMP": 0.865746,
            "INR": 83.853512,
            "IQD": 1492.778829,
            "IRR": 43375.690011,
            "ISK": 147.272585,
            "JEP": 0.865431,
            "JMD": 157.42392,
            "JOD": 0.727549,
            "JPY": 145.319862,
            "KES": 124.888254,
            "KGS": 86.211367,
            "KHR": 4244.37914,
            "KMF": 492.873667,
            "KPW": 922.888008,
            "KRW": 1388.286941,
            "KWD": 0.31612,
            "KYD": 0.85248,
            "KZT": 474.134823,
            "LAK": 17686.364987,
            "LBP": 1546.542753,
            "LKR": 375.880569,
            "LRD": 157.917357,
            "LSL": 17.79957,
            "LYD": 5.015958,
            "MAD": 11.029325,
            "MDL": 19.643359,
            "MGA": 4405.701297,
            "MKD": 61.576658,
            "MMK": 2147.904676,
            "MNT": 3493.604916,
            "MOP": 8.226829,
            "MRU": 38.901365,
            "MUR": 45.016839,
            "MVR": 15.791961,
            "MWK": 1050.538614,
            "MXN": 20.037045,
            "MYR": 4.691819,
            "MZN": 65.525498,
            "NAD": 17.771533,
            "NGN": 452.589904,
            "NIO": 36.818286,
            "NOK": 10.498352,
            "NPR": 133.835136,
            "NZD": 1.675023,
            "OMR": 0.395307,
            "PAB": 1.02658,
            "PEN": 3.919741,
            "PGK": 3.605207,
            "PHP": 58.865787,
            "PKR": 229.389594,
            "PLN": 4.696097,
            "PYG": 7327.343421,
            "QAR": 3.742279,
            "RON": 4.938549,
            "RSD": 117.26919,
            "RUB": 62.362259,
            "RWF": 1104.979506,
            "SAR": 3.855048,
            "SBD": 8.44017,
            "SCR": 13.745653,
            "SDG": 583.98353,
            "SEK": 10.970877,
            "SGD": 1.416543,
            "SHP": 0.865243,
            "SLL": 18114.221587,
            "SOS": 581.45854,
            "SRD": 31.555197,
            "SSP": 133.573293,
            "STD": 23404.405424,
            "STN": 24.559748,
            "SVC": 8.949086,
            "SYP": 2576.423902,
            "SZL": 17.800855,
            "THB": 37.093595,
            "TJS": 10.218542,
            "TMT": 3.588998,
            "TND": 3.338056,
            "TOP": 2.441015,
            "TRY": 19.10295,
            "TTD": 6.942487,
            "TWD": 31.963398,
            "TZS": 2386.21179,
            "UAH": 37.589766,
            "UGX": 3832.456319,
            "USD": 1.02649,
            "UYU": 40.829136,
            "UZS": 11458.092119,
            "VES": 10.221423,
            "VND": 25486.020733,
            "VUV": 125.368181,
            "WST": 2.865351,
            "XAF": 655.880579,
            "XAG": 0.049352,
            "XAU": 0.00197,
            "XCD": 2.772544,
            "XDR": 0.763364,
            "XOF": 655.881055,
            "XPD": 0.00134,
            "XPF": 119.318961,
            "XPT": 0.001968,
            "YER": 256.633694,
            "ZAR": 17.719261,
            "ZMW": 17.030727,
            "ZWL": 330.188891
        }
    });
    useEffect(() => {
        axios.get("https://api.exchangerate.host/latest")
            .then((response) => {
                if (response.data) {
                    setData(response.data);
                    setTimeout(() => setStatus("ok"), 400);
                } else { setStatus("error"); }
            })
            .catch(() => {
                setStatus("error");
            })
    }, [])

    return { data, status };
};