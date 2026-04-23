"use client";

import Link from "next/link";
import type { FC } from "react";
import { useActionState } from "react";

import { registrationAction } from "../api";
import type { RegistrationState } from "../model";

export const Registration: FC = () => {
	const [state, action] = useActionState<RegistrationState, FormData>(registrationAction, null);

	return (
		<section className="relative">
			<h2>Register your account</h2>
			{state?.message && <p>{state.message}</p>}
			<form action={action} noValidate>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input
						id="fullName"
						name="fullName"
						type="text"
						aria-describedby={state?.errors?.fullName ? "fullName-error" : undefined}
						placeholder="Please write data"
					/>
				</div>
				{state?.errors?.fullName && <span>{state.errors.fullName[0]}</span>}
				<div>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						aria-describedby={state?.errors?.email ? "email-error" : undefined}
						placeholder="Please write data"
					/>
				</div>
				{state?.errors?.email && <span>{state.errors.email[0]}</span>}
				<div>
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						aria-describedby={state?.errors?.password ? "password-error" : undefined}
						placeholder="Please write data"
					/>
				</div>
				{state?.errors?.password && <span>{state.errors.password[0]}</span>}
				<button type="submit">Register Account</button>
			</form>
			<p>
				Already Have An Account — <Link href="/login">Sign In Here</Link>
			</p>
			<button type="button">SignUp With Google Account</button>
		</section>
	);
};
