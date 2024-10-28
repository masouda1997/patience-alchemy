"use client";
import EmptySpace from "@/components/EmptySpace";
import MouseImageTrail from "@/components/MouseImageTrail";
import PageTitle from "@/components/PageTitle";
import { floatingCard } from "@/constants";
import React from "react";

const page = () => {
	return (
		<section className="h-screen  relative flex flex-col items-center bg-transparent overflow-x-hidden no-scrollbar">
			<PageTitle
				primaryColor={"var(--primary-color)"}
				mainText={"explore for"}
				colorText={"fun"}
				shadowText={"creativity"}
			/>

			<section className="text-2xl  w-full min-h-screen">
				<EmptySpace />
				<MouseImageTrail
					renderImageBuffer={50}
					rotationRange={25}
					images={floatingCard}
				>
					<section className="grid h-screen w-full place-content-center ">
						<p className="flex items-center gap-2 text-3xl font-bold uppercase ">
							<span>Hoveeer Me</span>
						</p>
					</section>
				</MouseImageTrail>
			</section>
		</section>
	);
};

export default page;
