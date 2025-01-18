const capitalizeNames = (names) => {
  if (!names) return "";

  return names
    .split(" ")
    .map((name) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
    })
    .join(" ");
};

export default (json) => {
  const concatenatedNames = json.map((people) => {
    const firstName = capitalizeNames(people.nombre).trim();
    const secondName = capitalizeNames(people.apellido).trim();
    const thirdName = capitalizeNames(people.apellido2).trim();

    if (thirdName.length === 0) {
      return `<li>${firstName} ${secondName}</li>`;
    } else {
      return `<li>${firstName} ${secondName} ${thirdName}</li>`;
    }
  });

  return `<ul>${concatenatedNames.join("")}</ul>`;
};
