export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="text-center">
        <p>
          Made with 💖 and 🍵- Fakhirul Akmal & Team Corps &copy;{currentYear}
        </p>
      </div>
    </footer>
  );
}
