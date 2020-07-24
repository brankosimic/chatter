const messages = [
  { id: 991, body: "I once ate 7 cheeseburgers" },
  { id: 992, body: { tmpl: "My friend is a {opt1}", data: { opt1: "jedi" } } },
  {
    id: 993,
    body: [
      {
        tmpl: "I like to {opt1}, {opt2}",
        data: { opt1: "ride my", opt2: "bicycle" },
      },
      "I like to ride my bike",
    ],
  },
  {
    id: 994,
    body: [
      [
        {
          tmpl: "I like to {opt1}, {opt2}",
          data: { opt1: "ride my", opt2: "bicycle" },
        },
        "I like to ride my bike",
        [
          {
            tmpl: "I like to {opt1}, {opt2}",
            data: { opt1: "ride my", opt2: "bicycle" },
          },
          "I like to ride my bike",
        ],
      ],
    ],
  },
];

export default messages;
