import './photo.css'

function Photo({Titre,Image}:{Titre:string,Image:string})
{
	return(
		<div>
			<h2>{Titre}</h2>
			<p>{Image}</p>

		</div>
	)
}
export default Photo