export default function Hero() {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2">
      <img
        src="./images/globe-indonesia.jpg"
        className="max-w-sm rounded-lg shadow-2xl md:max-w-lg"
        loading="lazy"
      />
      <div className="space-y-3">
        <h1 className="text-2xl font-bold md:text-5xl">
          Sistem Informasi Geografis
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quam temporibus sint molestiae. Accusamus magnam eos sapiente dolor
          nobis tempora.
        </p>
      </div>
    </div>
  );
}
