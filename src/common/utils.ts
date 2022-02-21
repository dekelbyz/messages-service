export function toLowerCaseRemoveSpaces(string: string) {
  return string.toLowerCase().replace("-", "").split(/\s+/).join("");
}
