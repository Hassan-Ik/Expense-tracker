import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="grid-container">
      <Header />
      <div className="container">
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
      );
}

export default App;