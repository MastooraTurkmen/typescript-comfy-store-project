import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button variant="secondary" size="lg" onClick={() => console.log("Hello")}>
        Click Me
      </Button>
      <h2 className="text-red-900 p-3">Hello People</h2>;
    </div>
  );
}

export default App;
