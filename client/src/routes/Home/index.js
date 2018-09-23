import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import reducer from './modules/reducer';
import { rootSaga } from './modules/sagas';
import { injectReducer, injectSaga } from 'modules/';
import View from './View';

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  history: ownProps.history,
});

const actionCreators = {

};

const localActionCreators = {

};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
  localActions: bindActionCreators(localActionCreators, dispatch),
});

const Route = withRouter(connect(mapStateToProps, mapDispatchToProps)(View));

export default (store) => {
  injectReducer(store, 'home', reducer);
  injectSaga(store, rootSaga);

  return Route;
};
