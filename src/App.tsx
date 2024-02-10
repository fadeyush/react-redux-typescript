import TodosList from './components/TodosList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <UsersList/>
      <hr></hr>
      <TodosList/>
    </div>
  );
}

export default App;
