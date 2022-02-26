import React, { Component } from 'react'

export class CatList extends Component {
    renderCats = () => {
        return this.props.catPics.map(cp => <img key={cp.id} src={cp.url} alt="Cat" width="200" height="200" />)
    }
  
    render() {
    return (
      <div>
        {this.renderCats()}
      </div>
      
    )
  }
}

export default CatList