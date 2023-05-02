import { useState } from "react";
import Container from "./Components/Container/Container";
import Hero from "./Components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Hero />
      </Container>
    </>
  );
}

export default App;
