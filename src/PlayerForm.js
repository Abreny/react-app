import React,{Component} from 'react'
import './PlayerForm.css'
const DEFAULT_ERRORS={nom: '', prenom: '', age: 0}

export default class PlayerForm extends Component{
	constructor(props){
		super(props)
		this.state={
			player: props.player,
			errors: {...DEFAULT_ERRORS}
		}
	}

	onChangeNom = (e_nom) =>{
		let {player,errors}=this.state
		let nom = e_nom.target.value.toUpperCase()
		player.setNom(nom)
		if(nom.length<5 || nom.length > 50) errors.nom = "Nom de 5 à 50 caractères!!"
		else errors.nom =''
		this.setState({player,errors})
	}

	onChangePrenom = (e_prenom)=>{
		let {player,errors}=this.state
		let prenom = e_prenom.target.value.trimStart().replace(/\s{2,}/,' ')
		prenom = prenom.split(/\s/).map((pr)=>{
			if(pr.length === 0) return '';
			else return [...pr].map((e,index)=>{return index === 0 ? e.toUpperCase():e.toLowerCase()}).join('')
		}).join(' ')
		player.setPrenom(prenom)
		this.setState({player,errors});
	}

	onChangeAge = (e_age)=>{
		let {player,errors}=this.state
		let age = e_age.target.value
		if(age.match(/[^0-9]+/))
		{
			age = age.match(/\d+/)[0]
			errors.age = "Age est un nombre entier!!!"
		}
		else errors.age =''
		player.setAge(age)
		this.setState({player,errors})
	}


	onSubmitPlayer = (e)=>{
		console.log(e)
		e.preventDefault()
	}

	render()
	{
		const {player,errors}=this.state
		console.log(errors)
		return (
			<form className="player-form" onSubmit={this.onSubmitPlayer}>
				<div className="form-control">
					<label htmlFor="nom">Nom: </label>
					<input type="text" value={player.nom} onChange={this.onChangeNom} />
				</div>
				<div className="form-control">
					<label htmlFor="prenom">Prenom: </label>
					<input type="text" value={player.prenom} onChange={this.onChangePrenom}/>
				</div>
				<div className="form-control">
					<label htmlFor="age">Age: </label>
					<input type="text" value={player.age} onChange={this.onChangeAge}/>
				</div>
				<div className="form-submit">
					<button type="reset" className="btn">Rejouer</button>
					<input type="submit" className="btn" value="Enregistrer score" />
				</div>
			</form>
		)
	}
}