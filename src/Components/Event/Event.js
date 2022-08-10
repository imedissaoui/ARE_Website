import React from 'react'
import './event.css'


const Event = (props) =>{
    return (
            <SlideShow data={props.data}/>
    )
}
export const EventDescription =(props)=>{
    return (
            <p data-aos="fade-left"style={{paddingRight:"5%",paddingLeft:"5%"}} className="description col-md-6">{props.data.description}</p>
    )

}

class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgIndx: 0,
            category: Object.keys(this.props.data.edition)[0],
            right: 1
        }

        this.timer= 0;
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }

    handleNext(){
        this.setState(prevState=>{
            if (prevState.imgIndx === this.props.data.edition[this.state.category].length -1)
                return { imgIndx : 0}
            else
                return { imgIndx : prevState.imgIndx + 1}   
        })
    }

    handlePrev(){
        this.setState(prevState=>{
            if (prevState.imgIndx === 0)
                return { imgIndx : this.props.data.edition[this.state.category].length -1}
            else
                return { imgIndx : prevState.imgIndx - 1}   
        })
    }

    handleCategory(e){
        this.setState({
            imgIndx: 0,
            category: e.target.value
        })
    }

    componentDidMount(){
        if (this.state.right === 1){
            this.timer = setInterval(this.handleNext, 3000);
        }else{
            this.timer = setInterval(this.handlePrev, 3000);
        }
        
    }

    render(){
        const imgArr = this.props.data.edition[this.state.category];
       
        return(
            <div data-aos="fade-right" id="slideshow">
                <div className="mySlides">
                    <div className="numbertext">{this.state.imgIndx+1 + "/"+ imgArr.length}</div>
                    <img src={imgArr[this.state.imgIndx]} alt={this.props.data.name} width="500px" height="375px"/>
                </div>

                <button className="btn-prev" onClick={this.handlePrev}>&#10094;</button>
                <button className="btn-next" onClick={this.handleNext}>&#10095;</button>

                
                <p id="slideshow-caption">{this.props.data.name}</p>
                

                <div className="slideshow-row">
                    {Object.keys(this.props.data.edition).map((value, index)=>{
                        return(
                            <button className={`btn-cat ${value == this.state.category ? "btn-active" : ""}`} onClick={this.handleCategory} value={value} key={index}>{value}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}



export default Event;