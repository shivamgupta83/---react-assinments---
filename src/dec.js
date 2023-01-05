import React from "react"
import "./count.css"

class Counter extends React.Component{

constructor(){
    super()
    this.state={
        counter:0
    }
}

increment=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}

decrement=()=>{
this.setState({
    counter:this.state.counter-1
})

}


render(){

 return <div className="q">
    
<p className="displayNumber">{this.state.counter}</p>

<button className="i" onClick={()=>{
this.increment()
}}>+increment</button>

<button className="d" onClick={()=>{
this.decrement()
}}>-decrement</button>

</div>

}
}

export default Counter