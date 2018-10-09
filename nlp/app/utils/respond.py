import json

def success(data):
  return {
    'statusCode': 200,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    'body': json.dumps(data),
  }

def bad_request(e):
  return {
    'statusCode': 400,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    'body': json.dumps(e)
  }

def error(e):
  return {
    'statusCode': 500,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    'body': json.dumps(e)
  }
