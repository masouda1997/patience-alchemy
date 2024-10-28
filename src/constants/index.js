export const TiltCartOption = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99) ",    // Easing on enter/exit.
}

export const graphNetworkData = [
	{ from: "skills", to: "JS" },
	{ from: "skills", to: "HTML" },
	{ from: "skills", to: "css" },
	{ from: "skills", to: "SQL" },
	{ from: "skills", to: "Python" },
	{ from: "skills", to: "Git" },
	{ from: "css", to: "sass" },
	{ from: "css", to: "tailwind" },
	{ from: "css", to: "bootstrap" },
	{ from: "css", to: "css module" },
	{ from: "JS", to: "react" },
	{ from: "JS", to: "ts" },
	{ from: "JS", to: "redux" },
	{ from: "JS", to: "node" },
	{ from: "react", to: "next" },
	{ from: "node", to: "express"}
]; 

export const flipLinkCte = { 
	duration: 0.25, //total animation duration
	stagger: 0.045  //time between each letter animation happen
};

export const floatingCard = [
	{
		src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "6deg",
		top: "20%",
		left: "25%",
		className: "w-36",
	},
	{
		src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "12deg",
		top: "45%",
		left: "60%",
		className: "w-24 ",
	},
	{
		src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-6deg",
		top: "20%",
		left: "40%",
		className: "w-52 ",
	},
	{
		src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "8deg",
		top: "50%",
		left: "40%",
		className: "w-48 ",
	},
	{
		src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "18deg",
		top: "20%",
		left: "65%",
		className: "w-40 ",
	},
	{
		src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-3deg",
		top: "35%",
		left: "55%",
		className: "w-24 ",
	},
];
