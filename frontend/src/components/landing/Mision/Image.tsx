
type Props ={
  urlImage: string
}
export const Image = ({urlImage}:Props) => {
  return (
   <img src={urlImage} alt={urlImage} className="rounded-md"/>
  )
}
