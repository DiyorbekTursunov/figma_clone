import CursorSVG from "@/public/assets/CursorSVG";

type Props = {
  color: string;
  x:number;
  y:number;
  massage:string;
}

const Cursor = ({color , x , y , massage}:Props) => {
  return (
    <div className="pointer-events-none absolute top-0 left-0" style={{transform: `translateX( ${x}px )    translateY( ${y}px )`}}>
      <CursorSVG color={color}/>

      {massage}
    </div>
  )
}

export default Cursor
