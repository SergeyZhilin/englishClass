import Auth from "./Auth";
import {connect} from "react-redux";
import { authUserRequest} from "../../redux/actions/actions";


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authUser: (payload) => dispatch( authUserRequest(payload))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)