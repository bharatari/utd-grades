import { createSelector } from 'reselect';
import _ from 'lodash';
import utils from './utils';

const sectionsSelector = state => _.get(state, 'section.fetchSections.sections');

export const normalizedSectionsSelector = createSelector(
  sectionsSelector,
  (sections) => utils.buildSectionNames(sections),
);
