import re

def parse_search_string(search_string):
  search_string = search_string.lower()

  prefix_pattern = r'(?<!\w)(?!summer|spring|fall)([a-zA-Z]{2,4})(?=(\s|\d+))'
  number_pattern = r'(?:(?<!fall\s)|(?<!fall)|(?<!spring\s)|(?<!spring)|(?<!summer\s)|(?<!summer))(\d{4})'
  year_pattern = r'(?:(?<=fall\s)|(?<=fall)|(?<=spring\s)|(?<=spring)|(?<=summer\s)|(?<=summer))(\d{4})'
  semester_pattern = r'(fall|spring|summer)(?=\d{4}|\s\d{4})'
  section_pattern = r'(?:(?<=\d{4})|(?<=\d{4}\s)|(?<=\.))(\d{1,3}|\w{1,3})(?=\s|$)'

  prefix = re.search(prefix_pattern, search_string)
  number = re.search(number_pattern, search_string)
  year = re.search(year_pattern, search_string)
  semester = re.search(semester_pattern, search_string)
  section = re.search(section_pattern, search_string)

  params = {}
  
  prefix = prefix.group(0)
  number = number.group(0)
  year = year.group(0)
  semester = semester.group(0)
  section = section.group(0)

  professor = search_string.replace(prefix, '').replace(number, '').replace(year, '') \
    .replace(semester, '').replace(section, '').replace('.', '').strip()

  if professor:
    if ',' in professor:
      names = professor.split(',')

      first_name = names[1].strip()
      last_name = names[0].strip()
    elif ' ' in professor:
      names = professor.split(' ')

      first_name = names[0].strip()
      last_name = names[1].strip()
    else:
      first_name = None
      last_name = professor
  else:
    first_name = None
    last_name = None

  if prefix:
    params['coursePrefix'] = prefix

  if number:
    params['courseNumber'] = number

  if year:
    params['year'] = year

  if semester:
    params['type'] = semester

  if section:
    params['sectionNumber'] = section

  if first_name:
    params['firstName'] = first_name
  
  if last_name:
    params['lastName'] = last_name

  return params
