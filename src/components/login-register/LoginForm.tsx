import BaseInput from "@/components/common/BaseInput";
import ReCAPTCHA from "react-google-recaptcha";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef, useState } from "react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import useMutationRegisterForm from "@/hooks/mutations/useMutationRegisterForm";
import useMutationLoginForm from "@/hooks/mutations/useMutationLoginForm";
import FormHeader from "@/components/login-register/FormHeader";
import useSendEmailCodeResolver from "@/hooks/validate/useSendEmailCodeResolver";

const LoginForm = () => {
	const { t } = useTranslation("common", { keyPrefix: "form.login_form" });
	const [login, setLogin] = useState(false);
	const resolver = useSendEmailCodeResolver();
	const { mutate: mutateRegister } = useMutationRegisterForm();
	const { mutate: mutateLogin } = useMutationLoginForm();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<LoginFormInput>({ mode: "all", resolver });
	const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
		const captchaValue = recaptchaRef.current?.getValue();
		if (captchaValue) {
			if (login) {
				await mutateLogin(data);
			}
			await mutateRegister(data);
		}
		recaptchaRef.current?.reset();
	};
	const changeModeHandler = () => {
		setLogin((prevState) => !prevState);
	};
	return (
		<div className="w-full md:w-3/6 xl:w-2/6 bg-[#f1f1f1] p-16">
			<FormHeader login={login} />
			<form
				className="flex flex-col w-full gap-5 "
				onSubmit={handleSubmit(onSubmit)}
			>
				<BaseInput
					error={errors["email"]?.message}
					label={t("email_label")}
					startIcon={<UserIcon className="w-5" />}
					placeholder={t("email_placeholder")}
					{...register("email", {
						required: {
							value: true,
							message: t("email_required_error"),
						},
					})}
				/>
				<BaseInput
					error={errors["password"]?.message}
					label={t("password_label")}
					startIcon={<LockClosedIcon className="w-5" />}
					placeholder={t("password_placeholder")}
					{...register("password", {
						required: {
							value: true,
							message: t("password_required_error"),
						},
					})}
				/>
				{login && (
					<a className="text-xs font-bold underline">
						{t("forgot_password")}
					</a>
				)}
				<div className="flex justify-center w-full">
					<ReCAPTCHA
						size="compact"
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						// onChange={onChange}
						ref={recaptchaRef}
					/>
				</div>
				<button
					disabled={!isValid}
					type="submit"
					className="w-full h-12 font-bold text-white bg-primary-main rounded-xl hover:shadow-card shadow-primary-main disabled:bg-gray-300 disabled:shadow-none"
				>
					{login ? t("submit") : t("register_now")}
				</button>
				<div className="flex gap-2">
					<h3>
						{login ? t("not_registered") : t("registered_before")}
					</h3>
					<a
						className="text-primary-main"
						onClick={changeModeHandler}
					>
						{login ? t("register_now") : t("login_now")}
					</a>
				</div>
				<div className="flex items-center justify-between w-full">
					<div className="w-[45%] h-[1px] bg-gray-300"></div>
					<h3>{t("or")}</h3>
					<div className="w-[45%] h-[1px] bg-gray-300"></div>
				</div>
				<button className="flex items-center justify-center w-full h-12 gap-2 font-bold bg-secondary-main rounded-xl hover:shadow-card shadow-secondary-main-main">
					<GoogleIcon className="w-10 text-red-600" />
					<h3>{t("login_google")}</h3>
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
