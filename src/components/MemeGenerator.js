import React from "react";

import Profile from "../prof.jpg"

class MemeGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            image: Profile,
            allMemeImgs: [],
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                let memes = response.data;
                this.setState({
                    allMemeImgs: memes.memes
                })
            })
    }

    changeHandler(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log("Submitting")
        // console.log(this.state.allMemeImgs.length);
        let index = Math.floor((Math.random() * this.state.allMemeImgs.length) + 1);
        let randomImage = this.state.allMemeImgs[index].url;
        this.setState({
            image: randomImage
        })
    }

    render() {
        return (
            <div className="memes">
                <div>
                    <form className="memeForm" onSubmit={this.submitHandler}>
                        <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.changeHandler} />
                        <br />
                        <br />
                        <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.changeHandler} />
                        <br />
                        <br />
                        <br />
                        <button>Generate</button>
                    </form>
                    {/* <p>{this.state.topText}{this.state.bottomText}</p> */}
                </div>
                <div className="meme">
                    <img src={this.state.image} alt="meme_img" />
                    <h2 style={{ position: 'absolute', top: '20px', left: '50%', width: '500px', marginLeft: "-250px", textTransform: "uppercase" }}>{this.state.topText}</h2>
                    <h2 style={{ position: 'absolute', top: '460px', left: '50%', width: "500px", marginLeft: "-250px", textTransform: "uppercase" }}>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}



export default MemeGenerator;