import Profile from "./profile/Profile";



function App() {
  const fullName="yasmine";
  const bio="je suis full stackdevollper";
const profession= "develloper";
const handleName= () => {
  alert(fullName)
}
const image='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
  return (
    <div className="App">
      <Profile
       name={fullName} resume={bio} job={profession} handleNameFunction= {handleName()} img={image}/>

  
    </div>
    
  );
}

export default App;
