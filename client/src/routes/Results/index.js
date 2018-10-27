import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import View from './View';
import * as section from 'modules/section/actions';
import { normalizedSectionsSelector, normalizedSectionSelector } from 'modules/section/selectors';
import { searchSelector, sectionSelector } from './modules/selectors';
import { submit } from 'redux-form';

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  history: ownProps.history,
  match: ownProps.match,
  search: searchSelector(ownProps),
  sectionId: sectionSelector(ownProps),
  sections: normalizedSectionsSelector(state),
  requestingSections: state.section.fetchSections.requesting,
  section: normalizedSectionSelector(state),
  requestingSection: state.section.fetchSection.requesting,
  otherSections: state.section.fetchOtherSections.sections,
});

const actionCreators = {
  ...section,
  submit,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));
