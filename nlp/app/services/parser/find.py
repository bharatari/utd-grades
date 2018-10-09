from app.utils.respond import success
from app.services.parser.utils import parse_search_string

def find(event, context):
  response = parse_search_string(event['queryStringParameters']['search'])

  return success(response)
