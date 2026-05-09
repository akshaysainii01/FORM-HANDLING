import SimpleForm from "./Simpleform"
import MultiInputFieldForm from "./MultiInputFieldForm"
import AdvancedForm from "./AdvancedFrom"
import UncontrolledForm from"./UncontrolledForm"
import BasicValidationForm from"./BasicValidationForm"
function App() {
 

  return (
    <>
    <BasicValidationForm/>
    <UncontrolledForm/>
    <AdvancedForm/>
    <MultiInputFieldForm/>
     <SimpleForm/>
       
    </>
  )
}

export default App
