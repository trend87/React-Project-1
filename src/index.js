import react from "react"
import ReactDOM from "react-dom"

function Header() {
  return (
    <header>
          <nav>
            <img src="./logo512.png" width="100" />
          </nav>
      </header>
  )
}

function MainContent() {
  return (

    <div>
        <h1>Reasons I'm Excited To Learn React</h1>
        <ul>
          <li>Because it is user friendly</li>
          <li>Because i want to improve my web development skills</li>
        </ul>
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