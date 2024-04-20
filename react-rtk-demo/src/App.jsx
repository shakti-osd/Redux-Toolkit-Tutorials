import './App.css'
import { CakeView } from './features/cake/CakeView'
import DemoView from './features/cake/DemoView'
import { TestView } from './features/cake/TestView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'
//import ReducerComponent from './components/UseReducer'
import DropDown from './components/DropDown'

function App() {
  return (
    <div className='App'>
      <DropDown />
      <CakeView />
      <TestView />
      <IcecreamView />
      <DemoView />
      <UserView />
    </div>
  )
}

export default App
