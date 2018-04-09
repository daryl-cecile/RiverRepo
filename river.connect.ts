declare const River:any;

namespace RiverUpdate{
	
	export function updateProgress(percentage:number){
		let p = <HTMLElement>document.querySelector('#update_progress .progress');
		p.style.width = percentage + "%";
	}

}

namespace RiverRemote{

	export function start_listening(){
		River.SpeakRequest(River.RegisterTask(""));
	}

	export function user_speak(message:string){
		makeBubble(message,"sent");
		scrollConversationBox();
	}

	export function response_speak(message:string){
		makeBubble(message,"received");
		scrollConversationBox();
	}
	
	export function when(eventName:string,handler:any){
		let onceHandler = (()=>{
			handler();
			removeEventListener(eventName,onceHandler);
		});
		addEventListener(eventName,onceHandler);
	}

	function scrollConversationBox(){
		let conversationbox = document.querySelector(".conversation");
		conversationbox.scrollTop = conversationbox.scrollHeight;
	}

	function makeBubble(text:string,side:string){
		let template = `<div class="bubble">
          <span>${text}</span>
          <span>${ (side === 'sent' ? 'You' : River.GetApplicationName()) }</span>
        </div>`;
      let divMsg = document.createElement('div');
      divMsg.className = 'msg '+side;
      divMsg.innerHTML = template;
      (<HTMLDivElement>document.querySelector(".conversation")).appendChild(divMsg);
	}

}

document.querySelector("#talk_btn").addEventListener("click",RiverRemote.start_listening);