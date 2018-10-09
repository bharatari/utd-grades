import re

def parse_search_string(search_string):
  search_string = search_string.lower()

  prefix_pattern = r'(?<!\w)(?!summer|spring|fall)([a-zA-Z]{2,4})(?=(\s|\d+))'
  number_pattern = r'(?<!fall\s?|spring\s?|summer\s?)(\d{4})'
  year_pattern = r'(?<=fall\s|fall|spring\s|spring|summer\s|summer)(\d{4})'
  semester_pattern = r'(fall|spring|summer)(?=\d{4}|\s\d{4})'
  section_pattern = r'(?<=\d{4}|\d{4}\s|\.)(\d{1,3}|\w{1,3})(?=\s|$)'

  prefix = re.search(prefix_pattern, search_string)
  number = re.search(number_pattern, search_string)
  year = re.search(year_pattern, search_string)
  semester = re.search(semester_pattern, search_string)
  section = re.search(section_pattern, search_string)

  # Get professor's name from this?
  rest = re.sub(prefix_pattern, '', search_string).sub(number_pattern, '', search_string).sub(year_pattern, '', search_string).sub(semester_pattern, '', search_string).sub(section_pattern, '', search_string)

  params = {}

  if prefix:
    params['coursePrefix'] = prefix.match

  if number:
    params['courseNumber'] = number.match

  if year:
    params['year'] = year.match

  if semester:
    params['type'] = semester.match

  if section:
    params['sectionNumber'] = section.match

  return params
