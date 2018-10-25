import _ from 'lodash';

export default {
  convertAssociatedArrayToObjectArray(associatedArray) {
    const array = [];

    for (let property in associatedArray) {
      if (associatedArray.hasOwnProperty(property)) {
        array.push({
          key: property,
          value: parseInt(associatedArray[property]),
        });
      }
    }

    return array;
  },
  sortByGrades(grades) {
    const sort = {
      'A+': 100,
      'A': 95,
      'A-': 92,
      'B+': 89,
      'B': 85,
      'B-': 82,
      'C+': 79,
      'C': 75,
      'C-': 72,
      'D+': 68,
      'D-': 65,
      'D': 62,
      'F': 50,
      'W': 40,
    };

    const sortedGrades = _.sortBy(grades, (o) => {
      return sort[o.key];
    });

    return _.reverse(sortedGrades);
  },
  splitData(grades) {
    const keys = [];
    const values = [];

    for (let i = 0; i < grades.length; i++) {
      keys.push(grades[i].key);
      values.push(grades[i].value);
    }

    return { keys, values };
  }
};
