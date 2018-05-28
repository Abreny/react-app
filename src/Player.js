export default class Player{
	constructor(nom,prenom,age)
	{
		this.nom = nom
		this.prenom = prenom;
		this.age=age;
	}
	
	getNom = ()=> this.nom

	setNom = (nom)=>{
		this.nom = nom
	}

	getPrenom = ()=> this.prenom

	setPrenom = (prenom)=>{
		this.prenom = prenom
	}

	getAge=()=> this.age

	setAge = (age)=>{
		this.age = age
	}
}