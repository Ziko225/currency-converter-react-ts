import Clock from "./Clock";
import Form from "./Form";
import { Content, Header } from "./styled";

const CurrencyConverter = () => {
    return (
        <Content>
            <Clock/>
            <Header>Kalkulator walutowy</Header>
            <Form/>
        </Content>)
};

export default CurrencyConverter;