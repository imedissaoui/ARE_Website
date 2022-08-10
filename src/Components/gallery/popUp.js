import React, {Component} from "react";
import "./images.css"

class PopUp extends Component{

    render()
    {
        return (
            <div className="popupParent">
                <div className="popupImage">
                    <button onClick={this.props.closePopup} className="imageClosingButton">X</button>

                </div>
                <img src={this.props.popImageUrl}/>
            </div>
        )
    }
}
export default PopUp;