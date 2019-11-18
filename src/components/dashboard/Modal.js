import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {createScore} from "../../store/actions/scoreActions";
import connect from "react-redux/es/connect/connect";

class Modal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                // console.log("Open Start");
            },
            onOpenEnd: () => {
                // console.log("Open End");
            },
            onCloseStart: () => {
                // console.log("Close Start");
            },
            onCloseEnd: () => {
                // console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {highScore} = this.props;
        const createScore = {
                ...this.state,
                highScore
        };
        this.props.createProject(createScore);
    };


    render() {
        const {highScore} = this.props;
        return (
            <div>
                <p className="waves-effect waves-light btn modal-trigger"
                    data-target="modal1">
                    Save High Score
                </p>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal"
                >
                    {/* If you want Bottom Sheet Modal then add
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
                    <div className="modal-content">
                        <h4>High Score is {highScore}</h4>
                        <form onSubmit={this.handleSubmit} className='white'>
                            <h5 className="grey-text text-darken-3">Create New Project</h5>
                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0 modal-close">Save</button>
                                <button className="modal-close waves-effect waves-red btn-flat">
                                    Disagree
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createScore(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
