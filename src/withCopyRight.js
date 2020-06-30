import React, { Component } from "react"
const withCopyRight = (YourComponent)=>{
    return class WithCopyRight extends Component{
        render(){
            return (
                <div>
                    <YourComponent {...this.props}/>
                    @CopyRight 2077
                    </div>
            )
        }
    }
}

export default withCopyRight