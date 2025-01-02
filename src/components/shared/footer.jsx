export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="text-center">
        <p>Created by SIG - Kelompok sekian &copy;{currentYear}</p>
      </div>
    </footer>
  );
}
