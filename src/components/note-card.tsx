export function NoteCard(){
    return(
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-500">
            <span className="text-sm font-medium text-slate-300">
            há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium recusandae veritatis totam quod architecto, doloribus nostrum. Quasi ratione quis, officiis, itaque quae eum suscipit quas, earum nemo at alias?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, quam enim exercitationem qui nostrum ipsa distinctio et repudiandae! Facilis eius sit rem dicta cum atque saepe accusantium fugit. Soluta, magnam!
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </button>
    )
}