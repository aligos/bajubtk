import React, { Component } from "react";
import Header from "./Header";
import ProdCard from "./ProdCard";
import Pagination from "./Pagination";
import Info from "./Info";
import Footer from "./Footer";

// import ImagePaletteProvider from "react-image-palette";

const bajubs = [
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik1" },
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik2" },
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik3" },
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik4" },
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik5" },
  { name: "BA8606 Blus Batik Tunik Coklat", image: "batik6" }
];

class App extends Component {
  componentWillMount() {
    this.mounted = true;
  }

  render() {
    return (
      <div>
        <Header />
        {/* Populer */}
        <div className="container">
          <div className="populer">
            <div className="row">
              {bajubs.map(b => {
                return(
                  <ProdCard {...b} key={b.image}/>
                )
              })}
            </div>
          </div>
        </div>
        {/* pagination */}
        <Pagination />
        {/* information */}
        <Info />
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
