import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import View from './View';
import * as section from 'modules/section/actions';
import { normalizedSectionSelector } from 'modules/section/selectors';

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  history: ownProps.history,
  match: ownProps.match,
  section: normalizedSectionSelector(state),
});

const actionCreators = {
  ...section,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));
