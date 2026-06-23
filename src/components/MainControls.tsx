import {useFlowStore} from "../store/useFlowStore"
import {Button} from "./Button"

function MainControls() {
  const decreaseCount = useFlowStore(s => s.decreaseCount)
  const increaseCount = useFlowStore(s => s.increaseCount)

  return (
    <div className="flex flex-col gap-1">
      <Button
        onClick={decreaseCount}
        variant={"red"}
      >Decrease Count</Button>

      <Button
        onClick={increaseCount}
        variant={"green"}
      >Increase Count</Button>

    </div>
  )
}

export default MainControls
