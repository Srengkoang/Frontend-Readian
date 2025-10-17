import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LayeredImages from "./components/LayeredImages";
import Trending from './components/Trending';
import BrowsingTags from "./components/BrowsingTags";
import ReadianInformation from "./components/ReadianInformation"
import SignIn from "./components/SignIn"
import Guide from "./components/Guide"

function App() {
  return (
    <div>
      <main>
        <Header />
        <LayeredImages />
        <Trending />
        <BrowsingTags />
        <ReadianInformation />
        <SignIn />
        <Guide />
      </main>
      <Footer />
    </div>
  );
}


export default App;

