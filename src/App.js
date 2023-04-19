import './App.css';
import BikeComponents from './components/BikeComponents';
import CommentsContainer from './components/CommentsContainer';
import Layout from './components/Layout';
import MacbookComponents from './components/MacbookComponents';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <h1>React x Redux</h1>

      <Layout>
        <BikeComponents />
        <MacbookComponents />
      </Layout>

      <CommentsContainer />

      <Newsletter />
    </div>
  );
}

export default App;
