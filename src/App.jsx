import './App.css'
import newcontext from './contextfile/context';
import User1 from './components/user1';

function App() {
  const newname="Harsh";
  const newclass =12;
  const section="B";

  return (
    <>
    <newcontext.Provider value={{name : newname, yourclass : newclass,yoursection :section}}>
      <User1/>
    </newcontext.Provider>
    </>
  )
}

export default App
