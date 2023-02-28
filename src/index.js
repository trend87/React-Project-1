import react from "react"
import ReactDOM from "react-dom"

function MyPage() {

  return(
    <div>
      <h1>Why I Want To Learn React</h1>
      <ul>
        <li>Because it is user friendly</li>
        <li>Because i want to improve my web development skills</li>
      </ul>
    </div>
  )

}

ReactDOM.render(<MyPage />, document.getElementById("root"))