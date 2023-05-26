export default function Button(props: any | undefined) {
  return (
    <button
      className={`heading-s ${props.textColor} h-11 whitespace-nowrap px-4 ${props.bgColor} rounded-full hover:opacity-80 ml-2`} onClick={props.onClick}>{props.name}</button>
  )
}