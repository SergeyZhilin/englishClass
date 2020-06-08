import AnswersComponent from "./AnswersComponent";
import {connect} from "react-redux";
import {getAllAnswersRequest} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
	return  {
		allAnswers: state.allAnswers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllAnswers: (payload) => dispatch( getAllAnswersRequest(payload) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersComponent)