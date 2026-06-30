import {useDeckStore} from "../store/useDeckStore"
import CardView from "./CardView"

function AsideView() {
  const idActive = useDeckStore(s => s.idActive)

  return (
    <div className="flex flex-col gap-1 items-center">
      {idActive? (
        <>
          <CardView id={idActive}/>
        </>
      ): (
        <p className={`font-bold text-lg text-center select-none`}>No Active Card</p>
      )}
    </div>
  )
}

export default AsideView
