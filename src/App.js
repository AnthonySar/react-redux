import './App.css';
import BikeComponents from './components/BikeComponents';
import Layout from './components/Layout';
import MacbookComponents from './components/MacbookComponents';

function App() {
  return (
    <div className="App">
      <h1>Redux X JavaScript Vanilla</h1>

      <Layout>
        <BikeComponents />
        <MacbookComponents />
      </Layout>
    </div>
  );
}

export default App;
