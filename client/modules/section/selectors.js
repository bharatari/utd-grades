import { createSelector } from 'reselect';
import _ from 'lodash';
import utils from './utils';

const sectionsSelector = state => _.get(state, 'section.fetchSections.sections');
const sectionSelector = state => _.get(state, 'section.fetchSection.section');

export const normalizedSectionsSelector = createSelector(
  sectionsSelector,
  (sections) => utils.buildSectionNames(sections)
);

export const normalizedSectionSelector = createSelector(
  sectionSelector,
  (section) => utils.buildSectionName(section)
);
