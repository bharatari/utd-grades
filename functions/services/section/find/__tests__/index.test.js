const find = require('../index');
const Connection = require('../../../models/index');

let connection;

beforeAll(async () => {
  connection = new Connection();

  await connection.connect();
});

describe('Test sample queries', () => {
  test('Should search by course prefix and number', async () => {
    const queries = [
      { search: 'CS 1337', expected: { coursePrefix: 'CS', courseNumber: '1337' } },
      { search: 'BCOM 3310', expected: { coursePrefix: 'BCOM', courseNumber: '3310' } },
      { search: 'HIST 1301', expected: { coursePrefix: 'BCOM', courseNumber: '1301' } }
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
    }
  });
  
  test('Should handle lowercase course prefixes', async () => {
    const queries = [
      { search: 'cs 1337', expected: { coursePrefix: 'CS', courseNumber: '1337' } },
      { search: 'bcom 3310', expected: { coursePrefix: 'BCOM', courseNumber: '3310' } },
      { search: 'hist 1301', expected: { coursePrefix: 'BCOM', courseNumber: '1301' } }
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
    }
  });

  test('Should handle section numbers', async () => {
    const queries = [
      { search: 'CS 1337.001', expected: { coursePrefix: 'CS', courseNumber: '1337', sectionNumber:'1' } },
      { search: 'CS 1337.0U1', expected: { coursePrefix: 'CS', courseNumber: '1337', sectionNumber:'0U1' } },
      { search: 'BCOM 3310.HON', expected: { coursePrefix: 'BCOM', courseNumber: '3310', sectionNumber: 'HON' } },
      { search: 'HIST 1301 001', expected: { coursePrefix: 'BCOM', courseNumber: '1301', sectionNumber: '1'} }
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
      expect(response[0].number).stringContaining(expected.sectionNumber);
    }
  });

  test('Should handle semesters', async () => {
    const queries = [
      { search: 'CS 1337 fall 2019', expected: { coursePrefix: 'CS', courseNumber: '1337', semesterType: 'fall', year: 2019 } },
      { search: 'BCOM 3310 Summer 2019', expected: { coursePrefix: 'BCOM', courseNumber: '3310', semesterType: 'summer', year: 2019 } },
      { search: 'HIST 1301 Spring 2018', expected: { coursePrefix: 'BCOM', courseNumber: '1301', semesterType: 'spring', year: 2018 } }
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
      expect(response[0].course.semester.type).toEqual(expected.semesterType);
      expect(response[0].course.semester.year).toEqual(expected.year);
    }
  });

  test('Should handle professor names', async () => {
    const queries = [
      { search: 'CS 1337 fall 2019', expected: { coursePrefix: 'CS', courseNumber: '1337', professorFirstName: 'Stephen', professorLastName: 'Perkins' } }
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
      expect(response[0].professor.firstName).toEqual(expected.professorFirstName);
      expect(response[0].professor.lastName).toEqual(expected.professorLastName);
    }
  });

  test('Should handle everything together', async () => {
    const queries = [
      { search: 'CS 1337 501 fall 2019 Stephen Perkins', expected: { coursePrefix: 'CS', courseNumber: '1337', semesterType: 'fall', year: 2019 } },
      { search: 'BCOM 3310 HON Fall 2019 Stephen'}
    ];

    for (let i = 0; i < queries.length; i++) {
      const { search, expected } = queries[i];
      const response = await find({ search }, connection);

      expect(response).not.toHaveLength(0);
      expect(response[0].course.number).toEqual(expected.courseNumber);
      expect(response[0].course.prefix).toEqual(expected.coursePrefix);
      expect(response[0].course.semester.type).toEqual(expected.semesterType);
      expect(response[0].course.semester.year).toEqual(expected.year);
    }
  });
});
