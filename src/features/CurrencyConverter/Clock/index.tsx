import { Data } from "./styled";
import { useCurrenctDate } from "./useCurrentData";

const Clock = () => {
    const date = useCurrenctDate();

    return (
        <Data>
            {date.toLocaleString(undefined, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}
        </Data>
    );
};

export default Clock;