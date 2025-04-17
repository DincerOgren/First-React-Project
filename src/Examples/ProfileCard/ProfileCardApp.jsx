import ProfileCard from './ProfileCard';
function App(){
    
    const handlePropertyClick = (prop) => {
        alert(`You clicked on: ${prop}`);  // Use backticks (`) instead of quotes
    };

    const  aliceProfile = {
        name:"Alice",
        age: 23,
        isMember: true,
        onPropertyClick: handlePropertyClick
    }

    const  johnProfile = {
        name:"John",
        age: 42,
        isMember: true,
        onPropertyClick: handlePropertyClick
    }

    return (
    <div >

        <ProfileCard {...aliceProfile}/>
        <ProfileCard {...johnProfile}/>



    </div>

    );
}

export default App