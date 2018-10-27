import qstring from 'query-string';

export default {
  pushQueryParams(location, history, newParams) {
    history.push({
      pathname: location.pathname,
      search: this.updateQueryParamsFromString(location.search, newParams)
    });
  },
  pushQueryParamsToURL(location, history, newParams, url) {
    history.push({
      pathname: url,
      search: this.updateQueryParamsFromString(location.search, newParams)
    });
  },
  updateQueryParamsFromString(queryString, newParams) {
    const parsedExistingParams = this.parseQueryParams(queryString);

    return this.updateQueryParams(parsedExistingParams, newParams);
  },
  updateQueryParams(existingParams, newParams) {
    const queryParams = {
      ...existingParams,
      ...newParams,
    };

    return qstring.stringify(queryParams);
  },
  parseQueryParams(queryString) {
    return qstring.parse(queryString);
  }
}