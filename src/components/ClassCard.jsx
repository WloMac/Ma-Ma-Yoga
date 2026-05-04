export default function ClassCard({ title, description, image, onOpen }) {
  return (
    <div className="group cursor-pointer flex flex-col items-center text-center">

      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[2/3] object-cover object-[center_60%] group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-4 text-lg font-medium text-primary">
        {title}
      </h3>
      <hr className="w-20 border-primary/30 mt-2" />

      {/* DESCRIPTION */}
      <p className="text-sm text-textSoft mt-1 flex-1">
        {description}
      </p>

      {/* BUTTON */}
      <button
        onClick={onOpen}
        className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-xl hover:bg-primaryDark transition"
      >
        +
      </button>

    </div>
  );
}