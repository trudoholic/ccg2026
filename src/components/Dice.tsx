import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs"

const color = "#4caf50" // green.500
const size = 32

const DiceIcons = [
  <BsFillDice1Fill color={color} size={size} />,
  <BsFillDice2Fill color={color} size={size} />,
  <BsFillDice3Fill color={color} size={size} />,
  <BsFillDice4Fill color={color} size={size} />,
  <BsFillDice5Fill color={color} size={size} />,
  <BsFillDice6Fill color={color} size={size} />,
]

const Dice = ({n}: {n: number}) => {
  return (
    <>
      {DiceIcons[n]}
    </>
  )
}

export default Dice
