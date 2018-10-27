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

    return this.stringifyQueryParams(queryParams);
  },
  parseQueryParams(queryString) {
    return qstring.parse(queryString);
  },
  stringifyQueryParams(queryParams) {
    return qstring.stringify(queryParams);
  },
  deleteQueryParam(location, history, key) {
    const queryParams = this.parseQueryParams(location.search);

    delete queryParams[key];

    history.push({
      pathname: location.pathname,
      search: this.stringifyQueryParams(queryParams),
    });
  }
}
