export default {
  parseSearchString(search) {
    const searchString = search.toLowerCase();

    const prefixPattern = new RegExp('(?<!\\w)(?!summer|spring|fall)([a-zA-Z]{2,4})(?=(\\s|\\d+))');
    const numberPattern = new RegExp('(?<!fall\\s?|spring\\s?|summer\\s?)(\\d{4})');
    const yearPattern = new RegExp('(?<=fall\\s|fall|spring\\s|spring|summer\\s|summer)(\\d{4})');
    const semesterPattern = new RegExp('(fall\\s|fall|spring\\s|spring|summer\\s|summer)(?=\\d{4})');
    const sectionPattern = new RegExp('(?<=\\d{4}|\\d{4}\\s|\\.)(\\d{1,3}|\\w{1,3})(?=\\s|$)');

    const prefix = searchString.match(prefixPattern);
    const number = searchString.match(numberPattern);
    const year = searchString.match(yearPattern);
    const semester = searchString.match(semesterPattern);
    const section = searchString.match(sectionPattern);

    // Professor's name?
    const rest = searchString.replace(prefixPattern, '').replace(numberPattern, '').replace(yearPattern, '').replace(semesterPattern, '').replace(sectionPattern, '');

    let params = {};

    if (number) {
      params.courseNumber = number[0];
    }

    if (prefix) {
      params.coursePrefix = prefix[0];
    }

    if (section) {
      params.sectionNumber = section[0];
    }

    if (semester) {
      params.type = semester[0];
    }

    if (year) {
      params.year = year[0];
    }

    return params;
  }
}
