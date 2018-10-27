import { createSelector } from 'reselect';
import _ from 'lodash';
import utils from 'utils/query';

const querySelector = ownProps => _.get(ownProps, 'location.search');

export const searchSelector = createSelector(
  querySelector,
  (search) => {
    const queryParams = utils.parseQueryParams(search);

    return queryParams.search;
  }
);

export const sectionSelector = createSelector(
  querySelector,
  (search) => {
    const queryParams = utils.parseQueryParams(search);

    return queryParams.section;
  }
);
