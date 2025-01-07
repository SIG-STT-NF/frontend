export default function Hero() {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2">
      <img
        src="./images/globe-indonesia.jpg"
        className="w-full rounded-lg shadow-2xl md:max-w-lg"
        loading="lazy"
      />
      <div className="space-y-3">
        <h1 className="text-2xl font-bold md:text-4xl">
          Sistem Informasi Geografis
        </h1>
        <p>
          Website ini diperuntukan untuk memudahkan masyarakat dalam mencari
          informasi tentang wilayah di Indonesia, mulai dari wilayah provinsi &
          kabupaten / kota. Selain itu, website ini juga menyediakan informasi
          tentang peta tematik di Provinsi Bali mengenai Populasi, Luas Lahan
          Pertanian, Luas Area Tanam, dan Skala Produksi Pertanian.
        </p>
      </div>
    </div>
  );
}
