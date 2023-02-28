import react from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Header() {
  return (
    <header >
          <nav className="nav">
            <img src="./logo512.png" className="logo" />
            <ul className="nav-items" >
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
  )
}

function MainContent() {
  return (

    <div>
        <h1>Reasons I'm Excited To Learn React</h1>
        <ol>
          <li>Because it is user friendly</li>
          <li>Because i want to improve my web development skills</li>
        </ol>
    </div>
    
  )
}

function Footer() {
    return (

      <footer>
          <p> &copy; 2023 Robert's development. All Rights reserved.</p>
      </footer>

  )
}

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