"use client"
import Button from "@/components/cell/Button";
import Input from "@/components/cell/Input";
import PageTitle from "@/components/PageTitle";
import { DevTool } from "@hookform/devtools";
import Link from "next/link";

import React, { forwardRef, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { FaLinkedinIn ,FaInstagram ,FaTelegramPlane , FaGithub  } from "react-icons/fa";


// eslint-disable-next-line react/display-name
const Contact = forwardRef(
	(prpos , ref) => {
		const [isDark, setIsDark] = useState(false)
		const [loading, setLoading] = useState(false);
		const [inputValue, setInputValue] = useState('');
		// const [error, setError] = useState('');
		const inputRef = useRef();
	
		useEffect(() => {
			const classDark = document.body.className
			console.log(classDark.includes("darkTheme"));
			
			if(classDark.includes("darkTheme")){
				setIsDark(true)
				console.log(isDark);
			}else{
				setIsDark(false)
			}
	
		}, [isDark]);

		const {register, reset ,control , handleSubmit , formState:{errors , isSubmitSuccessful , isDirty , isValid} } = useForm({mode:"onBlur"})

		useEffect(()=>{
			console.log(isSubmitSuccessful);
			if(isSubmitSuccessful){
				reset()
			}
		},[isSubmitSuccessful])

		const submitter = (e)=>{
			console.log(e);
			setLoading(true)
			setTimeout(()=>{
				setLoading(false)
			} , 2000)
		}
	
		return (
			<section className="h-screen  relative flex flex-col items-center bg-transparent overflow-x-hidden no-scrollbar">
				<PageTitle
					primaryColor={"var(--primary-color)"}
					mainText={"get in"}
					colorText={"touch"}
					shadowText={"contact"}
				/>

				<section className="flex justify-center  w-7/12 gap-4 ">
					<article className="flex flex-col basis-2/6 justify-between items-start gap-4">
						<h2 className="uppercase font-black text-2xl tracking-tight">
							don't be shy!
						</h2>
						<p>
							Feel free to get in touch with me. I am always open to
							discussing new projects, creative ideas or opportunities to
							be part of your visions.
						</p>

						<div className=" flex justify-between items-center gap-4">
							<span>
								<FaEnvelopeOpen className="text-[var(--primary-color)] text-4xl" />
							</span>
							<span className="flex flex-col">
								<p className="uppercase font-bold text-lightGray">
									mail me{" "}
								</p>
								<p className="text-opacity-25 font-extrabold">
									masoud.anaraki97@gmail.com
								</p>
							</span>
						</div>

						<div className=" flex justify-between items-center  gap-4">
							<span>
								<FaPhoneSquareAlt className="text-[var(--primary-color)] text-4xl" />
							</span>
							<span className="flex flex-col">
								<p className="uppercase font-bold text-lightGray">
									call me{" "}
								</p>
								<p className="text-opacity-25 font-extrabold">
									0939-503-4974
								</p>
							</span>
						</div>

						<div className="flex justify-around  gap-2">
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link
									href={"https://www.linkedin.com/in/masoud-anaraki/"}
								>
									<FaLinkedinIn />
								</Link>
							</div>
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href="https://github.com/masouda1997">
									<FaGithub />
								</Link>
							</div>
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href={"https://t.me/masouda1997"}>
									<FaTelegramPlane />
								</Link>
							</div>
							<div className="bg-lightGray bg-opacity-40 p-4 rounded-full hover:bg-[var(--primary-color)] transition-all duration-200 ease-linear ">
								<Link href={"https://www.instagram.com/masouda1997/"}>
									<FaInstagram />
								</Link>
							</div>
						</div>
					</article>

					<form  onSubmit={handleSubmit((e)=> submitter(e))}  className="basis-4/6 flex flex-col gap-5 ">
						<div className="flex justify-between items-center ">
							<Input
								placeholder={"Enter name"}
								error={errors.username?.message}
								{...register("username", {
									required: "this field is necessary",
									minLength:{value:3 , message:"must be at least 3 character"},
									maxLength: 30,
								})}		
							/>

							<Input
								type={"email"}
								placeholder={"Enter email"}
								error={errors.email?.message}
								{...register("email" , {
									required:"Email is required",
									pattern:{
										value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
										message:"invalid format!"
									}
								})}
							/>


							<Input
								placeholder={"Enter subject"}
								error={errors.subject?.message}
								{...register("subject", {
									required: "subject is required",
									minLength:{value:3 , message:"must be at least 3 character"},
									maxLength: 50,
								})}
							/>
						</div>

						<div className="flex flex-col justify-start">
							<textarea
								{...register("body",{
									required:"message is required",
									minLength:{value:3 , message:"Enter your message"}
								})}
								rows={12}
								name="body"
								id=""
								className={`bg-gray-300 border border-transparent rounded-3xl px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`}
							></textarea>
							{errors.body && (
								<span className={`text-[var(--primary-color)] text-xs pl-2 `} >{errors.body?.message}</span>
							)}
						</div>


						<Button
							type={"submit"}
							// onClick={submitter}
							loading={loading}
							// disabled={!isDirty || !isValid}
							className={`bg-gray-300 border border-transparent rounded-full px-5 p-1 focus:border-[var(--primary-color)] hover:bg-[var(--primary-color)] transition-all duration-75 outline-none  bg-opacity-40 self-end`}
						>
							{loading ? "loading..." : "send"}
						</Button>
					</form>
					<DevTool control={control} />
				</section>
			</section>
		);
	}
) 

export default Contact;
