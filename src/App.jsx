import reactimg from './assets/react-core-concepts.png'

const randomGenerator = ['Fundametnal', 'Core', 'Conceptual'];

function Number(max){
  return Math.floor(Math.random()*(max+1));
}


function Header(){
  return (
  <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomGenerator[Number(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
