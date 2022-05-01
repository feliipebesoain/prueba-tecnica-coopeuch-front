import './App.css';
import TablaTareas from "./TablaTareas";
import Card from "./Card";
import Container from "./Container";
import HeaderTareas from "./HeaderTareas";

function App() {
  return (
    <Container>
      <Card>
        <div className="body">
          <HeaderTareas/>
          <TablaTareas/>
        </div>
      </Card>
    </Container>
  );
}

export default App;
