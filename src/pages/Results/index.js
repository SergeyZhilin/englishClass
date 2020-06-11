import Results from "./Results";
import {connect} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
    return  {
        allTests: state.allTests,
        person: state.person,
        questionsByLevel: state.questionsByLevel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllTests: () => dispatch( getAllTestsRequest() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)