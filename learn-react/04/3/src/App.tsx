import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
// import Input from "./components/Input";

export default function App() {
  return (
    <div className="center">
      <Button type="button" disabled>
        Add
      </Button>
      <Button className="bg-[#ed4848]">Add</Button>
      <Checkbox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>
        </span>
      </Checkbox>
    </div>
  );
}
