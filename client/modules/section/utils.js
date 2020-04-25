export default {
  buildSectionNames(sections) {
    if (sections) {
      for (let i = 0; i < sections.length; i++) {
        sections[i] = this.buildSectionName(sections[i]);
      }
    }

    return sections;
  },
  buildSectionName(section) {
    if (section && section.course && section.course.semester && section.course.semester.name && typeof section.course.semester.name === 'string') {
      const [year, semester] = section.course.semester.name.split(' ');

      section.course.semester.name = `${semester} ${year}`;
    }

    return section;
  }
}
