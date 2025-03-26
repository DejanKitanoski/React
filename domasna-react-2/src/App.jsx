
import './App.css'
import UserProfileFunction from './components/UserProfileFunction'
import UserProfileClass from './components/UserProfileClass'
import ListItem from './components/ListItem';
import Parent from './components/Parent';



const family = {
  name: "John (Parent)",
  children: [
      {
          name: "Alex (Child)",
          age: 30,
          grandchildren: [
              { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
              { name: "Sophia (Grandchild)", hobby: "Drawing" },
          ],
      },
      {
          name: "Emma (Child)",
          age: 28,
          grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
      },
  ],
};

function App() {

  return (
    <div>
    <div className="Cardss">
      <UserProfileClass name="Alice" age={25} hobby="Reading" />
      <UserProfileClass name="Bob" age={30} hobby="Cycling" />
      <UserProfileClass name="Charlie" age={22} hobby="Photography" />
      <UserProfileFunction name="David" age={28} hobby="Gaming" />
      <UserProfileFunction name="Eva" age={35} hobby="Traveling" />
      <UserProfileFunction name="Frank" age={40} hobby="Cooking" />
    </div>

      <ListItem/>
      <div className='family'>
        <Parent name={family.name} children={family.children}/>
      </div>



    </div>
  )
}

export default App
