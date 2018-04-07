namespace RiverUpdate{
	
	export function updateProgress(percentage:number){
		let p = <HTMLElement>document.querySelector('#update_progress .progress');
		p.style.width = percentage + "%";
	}

}