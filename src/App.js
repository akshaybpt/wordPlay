import React,{useState} from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Text from './components/Text'

function App() {
  const [mode, setmode] = useState('light')
  const [color, setcolor] = useState(' Dark mode')
  const [alert, setAlert] = useState(null)
 
  const showAlert =(message)=>{
    setAlert({
      msg: message
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
 }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      setcolor(' Light mode')
      showAlert("Success: dark mode has been enabled")
      document.body.style.backgroundColor=  'rgb(107 87 124)';
      document.body.style.color=  'white';
    }else{
      setmode('light')
      setcolor(' Dark mode')
      showAlert("Success: light mode has been enabled")
      document.body.style.backgroundColor=  'white';
      document.body.style.color=  'black';
    }
  }
  return (
    <div>
      <Navbar tittle="Word Play" about="About us" mode={mode} toggle={toggleMode} color={color} />
      <Alert alert={alert}/>
      <Text heading="Enter Text For Analyze" mode={mode}  showAlert={showAlert} />
    </div>
  )
}

export default App