import React, { Component } from 'react'

const Loadable = ({ loader, loading: Loading }) => {
    return class LoadableComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                LoadedComponent: 'null'

            }
        }
        componentDidMount() {
            loader().then(resp => {
                console.log(resp.default)
                this.setState({
                    LoadedComponent: resp.default
                })
            })
        }
        render() {
            const { LoadedComponent } = this.state
            // const LoadedComponent  = this.state.LoadedComponent
            return (

                LoadedComponent ?
                    <LoadedComponent />
                    : <Loading />

            )
        }
    }
}
export default Loadable