import { Inputtime } from "./rangetime";
import { Inputrange } from "./rangeinput";

const Index = (props) => {
  return (
    <>
      <Inputrange length={props.length} />
      <Inputtime />
    </>
  );
};
export default Index;
