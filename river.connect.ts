namespace RiverUpdate{
	
	export function updateProgress(percentage:number){
		let p = <HTMLElement>document.querySelector('#update_progress .progress');
		p.style.width = percentage + "%";
	}

}

namespace RiverRemote{
	
	export function when(eventName:string,handler:any){
		let onceHandler = (()=>{
			handler();
			removeEventListener(eventName,onceHandler);
		});
		addEventListener(eventName,onceHandler);
	}

}