import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { HomePagerReducer } from './Redux/Reducer/HomePageReducer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.youtubeApp.videos);
  console.log(selector);

  useEffect(() => {
    dispatch(HomePagerReducer(false))
  }, [dispatch])
  return (
    <div className="App bg-zinc-900">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
