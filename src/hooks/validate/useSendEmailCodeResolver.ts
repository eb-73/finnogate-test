import { EMAIL_REGEX } from "@/helpers/constants";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import * as yup from "yup";

const useSendEmailCodeResolver = () => {
	const { t } = useTranslation("common", { keyPrefix: "alerts" });
	return useMemo(() => {
		const schema = yup.object().shape({
			email: yup
				.string()
				.required(t("required"))
				.matches(EMAIL_REGEX, t("wrong_email")),
		});
		return yupResolver(schema);
	}, []);
};

export default useSendEmailCodeResolver;
