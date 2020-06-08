import ListOfTestsPage from "./ListOfTestsPage";
import {connect} from "react-redux";
import {getAllTestsRequest} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
   return  {
        allTests: state.allTests
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllTests: () => dispatch( getAllTestsRequest() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTestsPage)