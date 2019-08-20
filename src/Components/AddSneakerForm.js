import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSneaker } from '../actions/sneaker_actions';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';


class AddSneakerForm extends Component {

  state= {
    name: '',
    image: '',
    description: '',
    price: null,
    quantity: '',
    sku: '',
    cost: '',
    brand: '',
    seller_id: 1
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSneaker(this.state)


    fetch(`http://localhost:3001/sneakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        description: this.state.description,
        price: this.state.price,
        quantity:this.state.quantity,
        sku: this.state.sku,
        cost: this.state.cost,
        brand: this.state.brand,
        seller_id: this.state.seller_id
      })
    }).then(response => response.json())
    .then(sneaker => console.log(sneaker))
  }

  imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget({
      cloudName: 'amitscloudmanager',
      uploadPreset: 'med0uyhi'},
      (error, result) => {
        if (result.info.secure_url){
          this.setState({
            image: result.info.secure_url
          }, ()=> {
            console.log(this.state)})
          }
        }
      );
    }



    render() {
      return(
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              name='name'
              type='text'
              placeholder='Enter a product name'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Brand</label>
            <input
              name='brand'
              type='text'
              placeholder='Enter a brand'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Price</label>
            <input
              name='price'
              type='text'
              placeholder='Enter a price'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Description</label>
            <input
              name='description'
              type='text'
              placeholder='description'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Cost</label>
            <input
              name='cost'
              type='number'
              placeholder='Enter cost of sneaker'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Quantity</label>
            <input
              name='quantity'
              type='text'
              placeholder='Enter a quantity'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <label>Sku</label>
            <input
              name='sku'
              type='text'
              placeholder='Enter a SKU number'
              onChange={this.handleChange}
              value={this.state.value}
            />
            <div>
              <CloudinaryContext cloudName='amitscloudmanager' uploadPreset='med0uyhi'>
                <a id="upload_widget_opener" onClick={this.imageSubmit} >Upload Your Images</a>
              </CloudinaryContext>
            </div>
            <button>Submit</button>
          </form>
        </React.Fragment>
      )
    }
  }


const mapDispatchToProps = (dispatch) => {
  return {
    addSneaker: (newSneaker) => dispatch({
      type: "ADD_SNEAKER_SUCCESS",
      payload: newSneaker
    })
  }
}



export default connect( null, mapDispatchToProps)(AddSneakerForm);
