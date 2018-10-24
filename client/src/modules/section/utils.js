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
    if (section) {
      const name = `${section.course.prefix} ${section.course.number}.${section.number} - ${section.professor.firstName} ${section.professor.lastName} (${section.course.semester.name})`;

      section.name = name;
    }

    return section;
  }
}
