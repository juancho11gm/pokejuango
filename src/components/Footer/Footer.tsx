export default function Footer() {
  const date = new Date();
  const text = `${date.getFullYear()} Juan Gonzalez - @juancho11gm`;

  return (
    <footer>
      <p className="text-center">{text}</p>
    </footer>
  );
}
