import { connect } from 'react-redux';

import { NewApplicationList } from '../../pages/reports'
import { updatePolicies } from '../../redux/actions';

const mapStateToProps = (state) => ({
  newApplications: state.policies.filter(p => p.type !== 'renewal')
});

const mapDispatchToProps = (dispatch) => ({
  updatePolicies: (policies) => dispatch(updatePolicies(policies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewApplicationList);