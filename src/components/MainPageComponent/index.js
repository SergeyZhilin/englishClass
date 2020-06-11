import MainPageComponent from "./MainPageComponent";
import {connect} from "react-redux";
import {getQuestionsByLevelRequest, submitDoneTestRequest} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
    return  {
        questionsByLevel: state.questionsByLevel,
        questionWithAnswer: state.questionWithAnswer,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestionsByLevel: (payload) => dispatch( getQuestionsByLevelRequest(payload) ),
        submitTest: (payload) => dispatch( submitDoneTestRequest(payload) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageComponent)