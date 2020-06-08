import AddNewTestPageComponent from "./AddNewTestPageComponent";
import {connect} from "react-redux";
import {addNewTestRequest} from "../../redux/actions/actions";


const mapStateToProps = (state) => {

}

const mapDispatchToProps = dispatch => {
	return {
		addNewTest: (payload) => dispatch( addNewTestRequest(payload))
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTestPageComponent)