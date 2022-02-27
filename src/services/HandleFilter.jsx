export default function HandleFIlter(data, name) {
  if (name !== '') {
    return data.filter((planets) => planets.name.includes(name));
  }
  return data;
}
