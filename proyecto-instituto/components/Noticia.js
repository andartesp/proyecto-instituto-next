export default function Noticia({ titulo, imagen, fecha }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-60 w-full overflow-hidden rounded-lg border border-zinc-800">
        <img 
          src={imagen} 
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-red-500 text-xs font-bold uppercase">{fecha}</span>
          <h3 className="text-lg font-bold leading-tight">{titulo}</h3>
        </div>
      </div>
    </div>
  );
}