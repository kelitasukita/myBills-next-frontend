export default function Button(props: any | undefined) {
  return (
    <button className={`heading-s ${props.textColor} py-5 px-6 ${props.bgColor} rounded-full hover:opacity-80`}>{props.name}</button>
  )
}