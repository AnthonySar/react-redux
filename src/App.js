import './App.css';
import BikeComponents from './components/BikeComponents';
import CommentsContainer from './components/CommentsContainer';
import Layout from './components/Layout';
import MacbookComponents from './components/MacbookComponents';
import Newsletter from './components/Newsletter';
import NewsletterV2 from './components/NewsletterV2';

function App() {
  return (
    <div className="App">
      <h1>React x Redux</h1>

      <Layout>
        <BikeComponents />
        <MacbookComponents />
      </Layout>

      <CommentsContainer />

      {/* Newsletter contient Formik avec les nouveaux standars
      <Formik>
        <Form></Form>
      </Formik> 
      Ainsi que le <FileUpload />
      */}
      <NewsletterV2 />
      
      {/* Newsletter contient Formik de manière "strandard" */}
      <Newsletter />
    </div>
  );
}

export default App;
