import PropsClass from "./Props/PropsClass";
import PropsFunctionEx1 from "./Props/PropsFunctionEx1";
import PropsFunctional from "./Props/PropsFunctional";
import PropsArrow from "./Props/PropsArrow";
import StateClassCom from "./State/StateClassCom";
import StateFunction from "./State/StateFunction";
import StateHoldObject from "./State/StateHoldObjects";
import Parent from "./Communication/ParentChildCommunication";
import DynamicRendering from "./Communication/DynamicRendering";
import TwoWayBinding from "./Communication/TwoWayBinding";
import DefaultProps from "./Communication/DefaultProps";
import List from './Day6/List';
import Key from "./Day6/Key";
import Object from "./Day6/Object";
import BasicButtons from "./Day6/BasicButtons";
import IconLabelButtons from "./Day6/IconButtons";
import IconButtonColors from "./Day6/Fingerprint";
import ErrorBoundary from "./Day7/ErrorBoundary";
import Car from "./Day7/Car";
import TryCatch from "./Day7/TryCatch";
import ComponentLifeCycle from "./Day7/ComponentLifeCycle";
import LifecycleFunctional from "./Day7/LifeCycleFunctional";
export default function APP()
{
  return(
    <div>
      {/* <PropsFunctional name="Harini"></PropsFunctional>
      <PropsClass college="SKCT"></PropsClass>
      <PropsFunctionEx1 college="SKCT" place="Coimbatore"></PropsFunctionEx1>
      <PropsArrow place="New York"></PropsArrow>
      <StateClassCom/>
      <StateFunction carName="Supra"></StateFunction>
      <StateHoldObject/>
      <Parent/>
      <DynamicRendering/>
      <TwoWayBinding/>
      <DefaultProps/> */}
      {/* <List/>
      <Key/>
      <Object/>
      <BasicButtons/>
      <IconLabelButtons/>
      <IconButtonColors/> */}
      <ErrorBoundary>
        <Car carName="JCB"></Car>
      </ErrorBoundary>
      <ErrorBoundary>
        <Car carName="Thar"></Car>
      </ErrorBoundary>
      <TryCatch fruit="root"/>
      <ComponentLifeCycle/>
      <LifecycleFunctional/>
    </div>
  )
}