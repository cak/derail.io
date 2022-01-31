const code = [
  `derail := Hacker{
        Name:    "Caleb",
        Passion: "Application Security",
        Roles:   []string{"Christian", "father", "runner"},
      }`,
  `const derail: Hacker = {
    name: "Caleb",
    passion: "Application Security",
    roles: ["Christian", "father", "runner"],
  };`,
  `let derail = Hacker(
    name: "Caleb",
    passion: "Application Security",
    roles: ["Christian", "father", "runner"]
)`,
  `val derail = Hacker(
    name = "Caleb",
    passion = "Application Security",
    roles = listOf("Christian", "father", "runner")
)`,
];

export default function getCode() {
  const i = Math.floor(Math.random() * code.length);
  return code[i].trim();
}
