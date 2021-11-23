import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   addCustomerAction,
//   removeCustomerAction,
// } from './store/customerReducer';
// import { fetchCustomers } from './asyncActions/customers';

import { fetchUsers } from './store/userReducer';
import {
  incrementCreator,
  decrementCreator,
  asyncIncrementCreator,
  asyncDecrementCreator,
} from './store/countReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.countReducer.count);
  const customers = useSelector((state) => state.userReducer.users);

  // const addCustomer = (name) => {
  //   const customer = { name, id: Date.now() };
  //   dispatch(addCustomerAction(customer));
  // };

  // const removeCustomer = (customer) => {
  //   dispatch(removeCustomerAction(customer.id));
  // };

  return (
    <div className="app">
      <div style={{ fontSize: '50px' }}>Баланс: {cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch(asyncIncrementCreator())}>
          ПРИБАВИТЬ++
        </button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>
          ОТНЯТЬ--
        </button>
        {/* <button onClick={() => addCustomer(prompt())}>Добавить клиента</button> */}
        <button onClick={() => dispatch(fetchUsers())}>
          ПОЛУЧИТЬ ПОЛЬЗОВАТЕЛЕЙ
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              // onClick={() => removeCustomer(customer)}
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
