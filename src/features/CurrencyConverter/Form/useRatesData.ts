import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [data, setDate] = useState({
        date: "2022-09-20",
        rates: {
            BTC: 0.000052,
            EUR: 1,
            PLN: 4.713201,
            PYG: 6962.094208,
            RUB: 60.452232,
            UAH: 36.860712,
            USD: 1.001941,
        }
    });
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const getDate = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest")
                setDate(response.data);
                setStatus("ok")
            } catch (error) {
                setStatus("error")
            }
        };
        setTimeout(getDate, 1000);
    }, []);

    return { data, status };
};