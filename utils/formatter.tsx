const formatter = (result) => {
  result.forEach((message) => {
    message.formatted = format(message.body);
  });

  return result;
};

const format = (data) => {
  switch (data.constructor) {
    case String:
      return data;
    case Object:
      return formatObject(data);
    case Array:
      return formatArray(data);
    default:
      return "";
  }
};

const formatObject = (obj) => {
  var formatted = obj.tmpl || "";
  if (obj.tmpl && obj.data) {
    Object.keys(obj.data).forEach(
      (key) =>
        (formatted = formatted.replace(new RegExp(`{${key}}`), obj.data[key]))
    );
  }
  return formatted;
};

const formatArray = (arr) => {
  const joined = arr.map((data) => format(data)).join("\n");
  return joined;
};

export default formatter;
