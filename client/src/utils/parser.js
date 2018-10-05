export default {
  parseSearchString(search) {
    const prefixPattern = /(?<!\w)(?!summer|spring|fall)([a-zA-Z]{2,4})(?=(\s|\d+))/;
    const numberPattern = /(?<=fall\s?|spring\s?|summer\s?)(\d{4})/;
    const yearPattern = /(?<=fall\s|fall|spring\s|spring|summer\s|summer)(\d{4})/;
    const semesterPattern = /(fall\s|fall|spring\s|spring|summer\s|summer)(?=\d{4})/;
    const sectionPattern = /(?<=\d{4}|\d{4}\s|\.)(\d{1,3}|\w{1,3})(?=\s|$)/;

    const prefix = search.match(prefixPattern)[0];
    const number = search.match(numberPattern)[0];
    const year = search.match(yearPattern)[0];
    const semester = search.match(semesterPattern)[0];
    const section = search.match(sectionPattern)[0];

    // Professor's name?
    const rest = search.replace(prefixPattern, '').replace(numberPattern, '').replace(yearPattern, '').replace(semesterPattern, '').replace(sectionPattern, '');
    
    return {
      courseNumber: number,
      coursePrefix: prefix,
      sectionNumber: section,
      type: semester,
      year,
    };
  }
}