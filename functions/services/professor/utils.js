module.exports = {
  async parseSearchStringIfExists(queryParams) {
    if (queryParams) {
      const search = queryParams['search'];

      if (search) {
        queryParams = await this.parseSearchString(search);
      }
    }

    return queryParams;
  },

  async parseSearchString(search) {
    const searchString = search.lower();
    const professor = searchString;

    professor = professor.replace('.', '').trim();

    if (professor) {
      if (professor.includes(',')) {
        names = professor.split(',');

        firstName = names[1].trim();
        lastName = names[0].trim();
      } else if (professor.includes(' ')) {
        names = professor.split(' ');

        firstName = names[0].trim();
        lastName = names[1].trim();
      } else {
        firstName = null;
        lastName = professor;
      }
    } else {
      firstName = null;
      lastName = null;
    }

    if (firstName) params['firstName'] = firstName;
    if (lastName) params['lastName'] = lastName;

    return params;
  }
}
