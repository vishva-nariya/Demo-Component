import Route from './components/Route';
import Flex from './pages/flex';
import Grid from './pages/grid';
import Animation from './pages/animation';  
import MediaQuery from './pages/mediaQuery';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/">
                    <Flex />
                </Route>
                <Route path="/grid">
                    <Grid />
                </Route>
                 <Route path="/animation">
                    <Animation />
                </Route>
              <Route path="/mediaQuery">
                    <MediaQuery />
                </Route>
            </div>
        </div>
    );
}
export default App;