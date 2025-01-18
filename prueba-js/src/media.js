export default (json) => {
  const totalAges = json.reduce((acc, people) => acc + people.edad, 0);
  const avegarageAges = totalAges / json.length;

  return avegarageAges;
};
