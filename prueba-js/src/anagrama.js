const normalizeWords = (word1, word2) => {
  if (!word1 && word1) return "";

  const word1Normalized = word1
    .toLowerCase()
    .normalize("NFD")
    .replace(/,/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .split("")
    .sort()
    .join("");
  const word2Normalized = word2
    .toLowerCase()
    .normalize("NFD")
    .replace(/,/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .split("")
    .sort()
    .join("");

  return word1Normalized === word2Normalized;
};

export default (word1, word2) => {
  return normalizeWords(word1, word2);
};
