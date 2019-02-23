export default async function(server, query) {
  const { data, errors } = await (await fetch(`${server}?${query}`)).json();
  return errors ? {} : data;
}
