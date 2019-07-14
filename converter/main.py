import pandas as pd
import json
import os
import math

TERM = '2019 Spring'

def main():
  dirname = os.path.dirname(__file__)
  filename = os.path.join(dirname, 'data/data.xlsx')

  df = pd.read_excel(filename)
  df = df.rename(index=str, columns={'Subject': 'subj', 'Catalog Number': 'num', 'Section': 'sect', 'Instructor 1': 'prof'})
  df = df.drop(columns=['Instructor 2', 'Instructor 3', 'Instructor 4', 'Instructor 5', 'Instructor 6'])

  records = df.to_dict('records')
  processed_records = nest_grades(records)

  output_filename = os.path.join(dirname, 'output/output.json')

  with open(output_filename, 'w+', encoding='utf-8') as outfile:
    json.dump(processed_records, outfile)

def nest_grades(records):
  for record in records:
    record['grades'] = construct_dict_of_grades(record)
    record = clean_record(record)
    record['term'] = TERM

  return records

def construct_dict_of_grades(record):
  grades = dict()

  grades['A+'] = record['A+']
  grades['A'] = record['A']
  grades['A-'] = record['A-']
  grades['B+'] = record['B+']
  grades['B'] = record['B']
  grades['B-'] = record['B-']
  grades['C+'] = record['C+']
  grades['C'] = record['C']
  grades['C-'] = record['C-']
  grades['D+'] = record['D+']
  grades['D'] = record['D']
  grades['D-'] = record['D-']
  grades['F'] = record['F']
  grades['W'] = record['W']

  cleaned_grades = dict()

  for key, value in grades.items():
    if not math.isnan(value):
      cleaned_grades[key] = int(value)

  return cleaned_grades

def clean_record(record):
  del record['A+']
  del record['A']
  del record['A-']
  del record['B+']
  del record['B']
  del record['B-']
  del record['C+']
  del record['C']
  del record['C-']
  del record['D+']
  del record['D']
  del record['D-']
  del record['F']
  del record['W']

  return record

if __name__ == '__main__':
  main()
