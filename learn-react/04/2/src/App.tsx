import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";
import Input from "./components/html/Input";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 gap-2">
      <Input placeholder="Enter Todo List" />
      <Button style={`bg-gray-600 text-white`}>Add</Button>
      <Button style={`bg-red-400 text-white`}>Cancel</Button>
      <Button style={`bg-purple-500 text-white`}>Success</Button>
      <CheckBox>
        I agree with <b>terms</b> and <b>policies</b>.
      </CheckBox>
    </div>
  );
}
