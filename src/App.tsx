import './App.css';
import ClearButton from './components/clear-button/clear-button';
import Page from "./components/page/page"
import Upload from "./components/upload/upload"
import DecksProvider from './state/decks';

/**
 * @function App
 * @description The root component for the web app
 * @author J. Trpka
 * @returns {JSX.Element}
 */
function App() {
  return (
    <main className="app">
      <DecksProvider>
        <Page />
        <Upload />
        <ClearButton />
      </DecksProvider>
    </main>
  )
}

export default App
