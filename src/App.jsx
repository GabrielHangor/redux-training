import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = { name, id: Date.now() };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="app">
      <div style={{ fontSize: '50px' }}>Баланс: {cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Добавить клиентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: '20px',
                border: '1px solid black',
                padding: '10px',
                textAlign: 'center',
                marginTop: '5px',
                cursor: 'pointer',
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '25px', marginTop: '10px' }}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
}

export default App;
