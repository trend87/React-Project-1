import react from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import "./index.css"

function MyPage() {

  return(
    <div>
        <Header />
        <MainContent />
        <Footer />
        
        
    </div>
  )

}

ReactDOM.render(<MyPage />, document.getElementById("root"))