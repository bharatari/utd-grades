from ...utils.respond import success
from .utils import parse_search_string

def find(event, context):
  response = parse_search_string(event['queryStringParameters']['search'])

  return success(response)
