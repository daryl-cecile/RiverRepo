namespace RiverUpdate{
	
	export function updateProgress(percentage:number){
		let p = (<HTMLProgressElement>document.querySelector('#update_progress'));
		p.value = percentage;
		p.max = 100;
	}

}