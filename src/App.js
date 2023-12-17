import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  }
  const removeCustomer = (customer) => {
  dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
}

  
  return (
    <div className="App">
      <div style={{ fontSize: "25px" }}>Balance: {cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет </button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button> 
        <button onClick={() => addCustomer(Number(prompt()))}>Добавить клиента</button>
        {/* <button onClick={() => removeCustomers(Number(prompt()))}>Удалять клиента</button>  */}
        
                  
      </div>

      {customers.length > 0 ? 
        <div>
          {customers.map(customer => <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)
                      }
        </div>
      : 
        <div style={{ fontSise: "30px" }}>Клиенты отсутствуют!</div>
      }
    </div>
  );
}

export default App;
